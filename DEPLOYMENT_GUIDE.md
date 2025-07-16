# Cloudflare Pages 部署指南

本指南将帮助您将AU-OPS API文档网站部署到Cloudflare Pages。

## 前提条件

1. **GitHub账户**: 确保您有GitHub账户访问权限
2. **Cloudflare账户**: 注册免费的Cloudflare账户 (https://cloudflare.com)
3. **仓库访问**: 确保您可以访问 `https://github.com/pgsit-tech/AU-OPS_API` 仓库

## 部署步骤

### 方法1: GitHub集成部署 (推荐)

#### 步骤1: 登录Cloudflare Pages
1. 访问 [Cloudflare Pages](https://pages.cloudflare.com/)
2. 使用您的Cloudflare账户登录
3. 如果没有账户，请先注册

#### 步骤2: 创建新项目
1. 点击 **"Create a project"** 按钮
2. 选择 **"Connect to Git"**
3. 选择 **"GitHub"** 作为Git提供商
4. 授权Cloudflare访问您的GitHub账户

#### 步骤3: 选择仓库
1. 在仓库列表中找到 `AU-OPS_API`
2. 点击 **"Begin setup"**

#### 步骤4: 配置构建设置
```
项目名称: au-ops-api (或您喜欢的名称)
生产分支: main
框架预设: None
构建命令: (留空)
构建输出目录: / (根目录)
环境变量: (无需设置)
```

#### 步骤5: 部署
1. 点击 **"Save and Deploy"**
2. 等待部署完成 (通常需要1-3分钟)
3. 部署成功后，您将获得一个URL，格式为: `https://au-ops-api.pages.dev`

### 方法2: 直接上传部署

如果您无法使用GitHub集成，可以直接上传文件：

#### 步骤1: 准备文件
1. 下载或克隆仓库到本地
2. 确保包含以下文件:
   - `index.html`
   - `script.js`
   - `styles.css`
   - `404.html`
   - `_headers`
   - 所有 `.md` 文档文件

#### 步骤2: 上传到Cloudflare Pages
1. 在Cloudflare Pages中点击 **"Upload assets"**
2. 拖拽所有文件到上传区域
3. 点击 **"Deploy site"**

## 自定义域名设置 (可选)

如果您想使用自己的域名:

### 步骤1: 添加自定义域名
1. 在Cloudflare Pages项目中，转到 **"Custom domains"** 标签
2. 点击 **"Set up a custom domain"**
3. 输入您的域名 (例如: `api-docs.yourcompany.com`)

### 步骤2: 配置DNS
1. 在您的域名注册商处，添加CNAME记录:
   ```
   名称: api-docs (或您选择的子域名)
   值: au-ops-api.pages.dev
   ```
2. 或者，如果使用根域名，添加A记录指向Cloudflare的IP

### 步骤3: 验证
1. 等待DNS传播 (可能需要几分钟到几小时)
2. 在Cloudflare中验证域名
3. 启用SSL证书 (自动提供)

## 验证部署

部署完成后，请验证以下功能:

### ✅ 基本功能检查
- [ ] 网站可以正常访问
- [ ] 三个标签页都能正常切换
- [ ] API文档内容正确加载
- [ ] 搜索功能正常工作
- [ ] 代码块复制功能正常
- [ ] 移动端响应式设计正常

### ✅ 内容检查
- [ ] **Complete API Documentation** 标签显示英文API文档
- [ ] **Overseas Warehouse APIs** 标签显示海外仓API文档
- [ ] **Chinese API Documentation** 标签显示中文API文档
- [ ] 所有代码示例正确高亮显示
- [ ] 表格格式正确显示

### ✅ 性能检查
- [ ] 页面加载速度快 (< 3秒)
- [ ] 文档内容缓存正常
- [ ] 搜索响应及时
- [ ] 无JavaScript错误

## 故障排除

### 常见问题

#### 1. 部署失败
**问题**: 部署过程中出现错误
**解决方案**:
- 检查所有必需文件是否存在
- 确保文件名大小写正确
- 检查GitHub仓库权限

#### 2. 文档内容不显示
**问题**: 标签页显示加载中但内容不出现
**解决方案**:
- 检查浏览器控制台是否有错误
- 确认GitHub仓库中的.md文件存在
- 检查网络连接

#### 3. 搜索功能不工作
**问题**: 搜索框输入后没有高亮显示
**解决方案**:
- 确保JavaScript文件正确加载
- 检查浏览器兼容性
- 清除浏览器缓存

#### 4. 样式显示异常
**问题**: 页面样式不正确或缺失
**解决方案**:
- 确认styles.css文件正确上传
- 检查CDN资源是否可访问
- 验证CSS文件路径

### 调试步骤

1. **检查浏览器控制台**:
   - 按F12打开开发者工具
   - 查看Console标签中的错误信息
   - 检查Network标签中的请求状态

2. **验证文件访问**:
   - 直接访问: `https://your-site.pages.dev/index.html`
   - 检查: `https://your-site.pages.dev/script.js`
   - 确认: `https://your-site.pages.dev/styles.css`

3. **测试API文档加载**:
   - 直接访问GitHub原始文件URL
   - 检查CORS设置
   - 验证文件内容格式

## 更新和维护

### 自动更新
如果使用GitHub集成部署，当您向main分支推送更改时，网站会自动重新部署。

### 手动更新
如果使用直接上传方式，需要手动重新上传更改的文件。

### 监控
- 在Cloudflare Pages仪表板中监控部署状态
- 设置通知以获取部署成功/失败的消息
- 定期检查网站可用性

## 安全和性能优化

### 已配置的安全头
网站已配置以下安全头 (在`_headers`文件中):
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- X-XSS-Protection: 1; mode=block
- Content-Security-Policy: 限制资源加载来源

### 缓存策略
- 静态资源 (CSS/JS): 1年缓存
- HTML文件: 1小时缓存
- API文档: 1小时缓存

### 性能优化
- 使用CDN加速全球访问
- 启用Brotli压缩
- 优化图片和资源加载
- 实现懒加载和缓存策略

## 支持和联系

如果在部署过程中遇到问题:

1. **检查文档**: 首先查看本指南和README.md
2. **GitHub Issues**: 在仓库中创建issue报告问题
3. **Cloudflare支持**: 访问Cloudflare帮助中心
4. **联系开发团队**: 通过指定渠道联系技术支持

## 成功部署确认

部署成功后，您应该能够:

✅ 访问网站URL (例如: https://au-ops-api.pages.dev)
✅ 看到美观的API文档界面
✅ 在三个标签页之间切换
✅ 搜索和浏览API文档内容
✅ 在移动设备上正常使用

恭喜！您已成功部署AU-OPS API文档网站到Cloudflare Pages。
