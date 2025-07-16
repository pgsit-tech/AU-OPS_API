// API Documentation Viewer
class APIDocViewer {
    constructor() {
        this.baseURL = 'https://raw.githubusercontent.com/pgsit-tech/AU-OPS_API/main/';
        this.cache = new Map();
        this.init();
    }

    init() {
        this.setupTabNavigation();
        this.loadInitialContent();
        this.addSearchFunctionality();
        this.setupCopyButtons();
        this.forceTextColors();
    }

    setupTabNavigation() {
        const tabButtons = document.querySelectorAll('.tab-btn');
        const tabPanes = document.querySelectorAll('.tab-pane');

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons and panes
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabPanes.forEach(pane => pane.classList.remove('active'));

                // Add active class to clicked button and corresponding pane
                button.classList.add('active');
                const tabId = button.getAttribute('data-tab');
                const targetPane = document.getElementById(tabId);
                if (targetPane) {
                    targetPane.classList.add('active');
                    this.loadTabContent(tabId);
                }
            });
        });
    }

    async loadInitialContent() {
        // Load the first tab content
        await this.loadTabContent('complete-api');
    }

    async loadTabContent(tabId) {
        const pane = document.getElementById(tabId);
        if (!pane) return;

        // Check if content is already loaded
        if (this.cache.has(tabId)) {
            pane.innerHTML = this.cache.get(tabId);
            this.highlightCode();
            return;
        }

        // Show loading state
        pane.innerHTML = `
            <div class="loading">
                <i class="fas fa-spinner fa-spin"></i> Loading ${this.getTabTitle(tabId)}...
            </div>
        `;

        try {
            let content = '';
            switch (tabId) {
                case 'complete-api':
                    content = await this.loadMarkdownFile('AU-OPS_api_EN.md');
                    break;
                case 'overseas-warehouse':
                    content = await this.loadMarkdownFile('Overseas_Warehouse_Inventory_Management_EN.md');
                    break;
                case 'chinese-api':
                    content = await this.loadMarkdownFile('AU-OPS_api.md');
                    break;
            }

            const htmlContent = this.convertMarkdownToHTML(content);
            this.cache.set(tabId, htmlContent);
            pane.innerHTML = htmlContent;
            this.highlightCode();
            this.addCopyButtonsToCodeBlocks();
            this.forceTextColors();

        } catch (error) {
            console.error('Error loading content:', error);
            pane.innerHTML = `
                <div class="error">
                    <i class="fas fa-exclamation-triangle"></i> 
                    Error loading documentation. Please try again later.
                    <br><small>Error: ${error.message}</small>
                </div>
            `;
        }
    }

    async loadMarkdownFile(filename) {
        const url = `${this.baseURL}${filename}`;
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`Failed to load ${filename}: ${response.status} ${response.statusText}`);
        }
        
        return await response.text();
    }

    convertMarkdownToHTML(markdown) {
        // Configure marked options
        marked.setOptions({
            highlight: function(code, lang) {
                if (lang && Prism.languages[lang]) {
                    return Prism.highlight(code, Prism.languages[lang], lang);
                }
                return code;
            },
            breaks: true,
            gfm: true
        });

        let html = marked.parse(markdown);
        
        // Post-process HTML to add custom styling
        html = this.addCustomStyling(html);
        
        return html;
    }

    addCustomStyling(html) {
        // Add custom classes to tables
        html = html.replace(/<table>/g, '<table class="params-table">');
        
        // Add method badges to API endpoints
        html = html.replace(/\*\*Method\*\*:\s*`(GET|POST|PUT|DELETE|PATCH)`/g, 
            (match, method) => {
                const methodClass = `method-${method.toLowerCase()}`;
                return `**Method**: <span class="api-method ${methodClass}">${method}</span>`;
            }
        );

        // Add URL styling
        html = html.replace(/\*\*URL\*\*:\s*`([^`]+)`/g, 
            (match, url) => {
                return `**URL**: <div class="api-url">${url}</div>`;
            }
        );

        // Wrap code blocks
        html = html.replace(/<pre><code class="language-json">/g, 
            '<div class="code-block"><pre><code class="language-json">');
        html = html.replace(/<\/code><\/pre>/g, '</code></pre></div>');

        // Add response example styling
        html = html.replace(/\*\*(\d+)\s*Response\s*Example\*\*:/g, 
            '<div class="response-example"><div class="response-title">$1 Response Example:</div>');

        return html;
    }

    highlightCode() {
        // Re-run Prism highlighting for dynamically loaded content
        if (typeof Prism !== 'undefined') {
            Prism.highlightAll();
        }
    }

    getTabTitle(tabId) {
        const titles = {
            'complete-api': 'Complete API Documentation',
            'overseas-warehouse': 'Overseas Warehouse Documentation',
            'chinese-api': 'Chinese API Documentation'
        };
        return titles[tabId] || 'Documentation';
    }

    addSearchFunctionality() {
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = 'Search API documentation...';
        searchInput.className = 'search-input';

        const searchContainer = document.createElement('div');
        searchContainer.className = 'search-container';
        searchContainer.appendChild(searchInput);

        // Insert search container after header
        const header = document.querySelector('.header');
        header.insertAdjacentElement('afterend', searchContainer);

        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const activePane = document.querySelector('.tab-pane.active');

            if (searchTerm.length > 2) {
                this.highlightSearchResults(activePane, searchTerm);
            } else {
                this.clearSearchHighlights(activePane);
            }
        });
    }

    highlightSearchResults(container, searchTerm) {
        // Clear previous highlights
        this.clearSearchHighlights(container);

        // Simple search highlighting implementation
        const walker = document.createTreeWalker(
            container,
            NodeFilter.SHOW_TEXT,
            null,
            false
        );

        const textNodes = [];
        let node;

        while (node = walker.nextNode()) {
            if (node.parentNode.tagName !== 'SCRIPT' && node.parentNode.tagName !== 'STYLE') {
                textNodes.push(node);
            }
        }

        textNodes.forEach(textNode => {
            const text = textNode.textContent;
            if (text.toLowerCase().includes(searchTerm)) {
                const highlightedText = text.replace(
                    new RegExp(`(${searchTerm})`, 'gi'),
                    `<mark>$1</mark>`
                );
                const span = document.createElement('span');
                span.innerHTML = highlightedText;
                textNode.parentNode.replaceChild(span, textNode);
            }
        });
    }

    clearSearchHighlights(container) {
        const marks = container.querySelectorAll('mark');
        marks.forEach(mark => {
            const parent = mark.parentNode;
            parent.replaceChild(document.createTextNode(mark.textContent), mark);
            parent.normalize();
        });
    }

    setupCopyButtons() {
        // This will be called after content is loaded
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('copy-btn')) {
                const codeBlock = e.target.closest('.code-block');
                const code = codeBlock.querySelector('code');
                if (code) {
                    navigator.clipboard.writeText(code.textContent).then(() => {
                        e.target.textContent = 'Copied!';
                        e.target.classList.add('copied');
                        setTimeout(() => {
                            e.target.textContent = 'Copy';
                            e.target.classList.remove('copied');
                        }, 2000);
                    });
                }
            }
        });
    }

    addCopyButtonsToCodeBlocks() {
        const codeBlocks = document.querySelectorAll('.code-block');
        codeBlocks.forEach(block => {
            if (!block.querySelector('.copy-btn')) {
                const copyBtn = document.createElement('button');
                copyBtn.className = 'copy-btn';
                copyBtn.textContent = 'Copy';
                copyBtn.title = 'Copy code to clipboard';
                block.appendChild(copyBtn);
            }
        });
    }

    forceTextColors() {
        // Force black text color on all elements to override night mode/dark mode
        setTimeout(() => {
            const elements = document.querySelectorAll('.tab-content *, .tab-pane *, .params-table *, .api-section *');
            elements.forEach(element => {
                // Skip elements that should keep their color (like method badges)
                if (!element.classList.contains('method-get') &&
                    !element.classList.contains('method-post') &&
                    !element.classList.contains('method-put') &&
                    !element.classList.contains('method-delete') &&
                    !element.classList.contains('api-title')) {
                    element.style.color = '#000000';
                    element.style.webkitTextFillColor = '#000000';
                    element.style.textShadow = 'none';
                }
            });

            // Force table text to be black
            const tableElements = document.querySelectorAll('table, th, td, tr');
            tableElements.forEach(element => {
                element.style.color = '#000000';
                element.style.webkitTextFillColor = '#000000';
                element.style.textShadow = 'none';
            });

            // Force headings to be black
            const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
            headings.forEach(heading => {
                if (!heading.classList.contains('api-title')) {
                    heading.style.color = '#000000';
                    heading.style.webkitTextFillColor = '#000000';
                    heading.style.textShadow = 'none';
                    heading.style.fontWeight = '700';
                }
            });

            // Force paragraphs and lists to be black
            const textElements = document.querySelectorAll('p, li, span, div');
            textElements.forEach(element => {
                if (!element.classList.contains('method-get') &&
                    !element.classList.contains('method-post') &&
                    !element.classList.contains('method-put') &&
                    !element.classList.contains('method-delete') &&
                    !element.classList.contains('api-title') &&
                    !element.classList.contains('loading') &&
                    !element.classList.contains('error')) {
                    element.style.color = '#000000';
                    element.style.webkitTextFillColor = '#000000';
                    element.style.textShadow = 'none';
                }
            });
        }, 100);
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const viewer = new APIDocViewer();

    // Periodically force text colors to override any dynamic changes
    setInterval(() => {
        viewer.forceTextColors();
    }, 2000);
});

// Add smooth scrolling for anchor links
document.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});



// Error handling for network issues
window.addEventListener('online', () => {
    console.log('Connection restored');
});

window.addEventListener('offline', () => {
    console.log('Connection lost');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error';
    errorDiv.innerHTML = `
        <i class="fas fa-wifi"></i> 
        You appear to be offline. Some content may not load properly.
    `;
    document.body.insertBefore(errorDiv, document.body.firstChild);
    
    setTimeout(() => {
        errorDiv.remove();
    }, 5000);
});
