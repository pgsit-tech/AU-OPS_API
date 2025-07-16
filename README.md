# AU-OPS API Documentation Website

A modern, responsive web interface for browsing AU-OPS API documentation. This website provides an easy-to-navigate interface for viewing API documentation in multiple formats.

## Features

- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- 🌓 **Dark Mode Support**: Automatic dark mode based on system preferences
- 🔍 **Search Functionality**: Search through API documentation content
- 📑 **Tabbed Interface**: Easy navigation between different API documentation sets
- 🎨 **Syntax Highlighting**: Beautiful code highlighting for JSON examples
- ⚡ **Fast Loading**: Optimized performance with caching
- 🔗 **Direct GitHub Integration**: Loads documentation directly from GitHub repository

## Documentation Sections

1. **Complete API Documentation** (`AU-OPS_api_EN.md`)
   - Comprehensive English API documentation
   - Order Management APIs
   - Overview of all major API modules

2. **Overseas Warehouse APIs** (`Overseas_Warehouse_Inventory_Management_EN.md`)
   - Detailed overseas warehouse management APIs
   - Inventory management
   - Order fulfillment
   - SKU management

3. **Chinese API Documentation** (`AU-OPS_api.md`)
   - Complete Chinese API documentation
   - All 100+ API endpoints
   - Detailed specifications and examples

## Live Demo

🌐 **Website URL**: [https://au-ops-api.pages.dev](https://au-ops-api.pages.dev)

## Local Development

### Prerequisites

- A modern web browser
- Local web server (optional, for development)

### Running Locally

1. Clone the repository:
```bash
git clone https://github.com/pgsit-tech/AU-OPS_API.git
cd AU-OPS_API
```

2. Open `index.html` in your web browser, or serve it using a local web server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

3. Open your browser and navigate to `http://localhost:8000`

## Deployment to Cloudflare Pages

### Method 1: GitHub Integration (Recommended)

1. **Fork or use the existing repository**
   - Repository: `https://github.com/pgsit-tech/AU-OPS_API`

2. **Connect to Cloudflare Pages**
   - Go to [Cloudflare Pages](https://pages.cloudflare.com/)
   - Click "Create a project"
   - Connect your GitHub account
   - Select the `AU-OPS_API` repository

3. **Configure build settings**
   - **Project name**: `au-ops-api` (or your preferred name)
   - **Production branch**: `main`
   - **Build command**: Leave empty (static site)
   - **Build output directory**: `/` (root directory)

4. **Deploy**
   - Click "Save and Deploy"
   - Your site will be available at `https://au-ops-api.pages.dev`

### Method 2: Direct Upload

1. **Prepare files**
   - Download or clone the repository
   - Ensure you have: `index.html`, `script.js`, `styles.css`

2. **Upload to Cloudflare Pages**
   - Go to [Cloudflare Pages](https://pages.cloudflare.com/)
   - Click "Upload assets"
   - Drag and drop your files
   - Deploy

### Custom Domain (Optional)

1. In Cloudflare Pages dashboard, go to your project
2. Navigate to "Custom domains"
3. Click "Set up a custom domain"
4. Follow the instructions to configure your domain

## File Structure

```
AU-OPS_API/
├── index.html              # Main HTML file
├── script.js               # JavaScript functionality
├── styles.css              # Additional CSS styles
├── README.md               # This file
├── AU-OPS_api_EN.md        # English API documentation
├── Overseas_Warehouse_Inventory_Management_EN.md  # Overseas warehouse docs
└── AU-OPS_api.md           # Chinese API documentation
```

## Technical Details

### Dependencies

The website uses the following CDN libraries:
- **Prism.js**: Syntax highlighting for code blocks
- **Font Awesome**: Icons
- **Marked.js**: Markdown to HTML conversion

### Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

### Performance Features

- **Caching**: Documentation content is cached after first load
- **Lazy Loading**: Content is loaded only when needed
- **Optimized Assets**: Minified CSS and JavaScript
- **CDN Delivery**: Fast global content delivery via Cloudflare

## Customization

### Styling

Edit `styles.css` to customize the appearance:
- Colors and themes
- Typography
- Layout and spacing
- Responsive breakpoints

### Functionality

Edit `script.js` to modify:
- API endpoints
- Content loading behavior
- Search functionality
- Navigation features

### Content

The website automatically loads documentation from:
- `AU-OPS_api_EN.md` - English API docs
- `Overseas_Warehouse_Inventory_Management_EN.md` - Overseas warehouse docs
- `AU-OPS_api.md` - Chinese API docs

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request

## License

This project is licensed under the MIT License - see the repository for details.

## Support

For issues or questions:
- Create an issue on GitHub
- Contact the development team
- Check the documentation

## Changelog

### v1.0.0 (2024-07-16)
- Initial release
- Responsive design
- Three documentation sections
- Search functionality
- Dark mode support
- Cloudflare Pages deployment ready
