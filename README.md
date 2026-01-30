# PoC of React Deployment to GitHub Pages using GitHub Actions

![Deploy Status](https://github.com/marykuo/poc-gh-pages-actions-react/actions/workflows/deploy.yml/badge.svg)

This is a proof of concept repository to demonstrate the deployment of a React project to GitHub Pages using GitHub Actions.

## Deployment Methods

- Pros:
  - Automated build and deployment process managed by GitHub Actions.
  - No need to maintain a separate branch for compiled code.
- Cons:
  - Requires a one-time configuration of a YAML workflow file.

How to Enable:

1. Go to Settings > Pages.
2. Under Build and deployment > Source, select GitHub Actions.
3. GitHub will automatically detect and run your workflow file (e.g., `deploy.yml`).

## Different from deploying to VM

Deploying a React app to GitHub Pages (Static Hosting) differs from a Virtual Machine (VM) in several architectural ways:

| Feature        | GitHub Pages (Static)                        | Virtual Machine (e.g., EC2, VPS)                  |
| :------------- | :------------------------------------------- | :------------------------------------------------ |
| Infrastructure | Fully managed, serverless file hosting.      | You manage the OS, Web Server (Nginx/Apache).     |
| Backend        | No server-side logic (No Node.js/Python/DB). | Can run full-stack applications.                  |
| Routing        | Client-side only. Requires hacks for 404s.   | Server-side configuration for "Fallback" routing. |
| Security       | API Keys are exposed in frontend code.       | API Keys can be hidden in server-side `.env`.     |
| Cost           | Free for public repositories.                | Monthly subscription fee.                         |

Key Limitations to Note:

- No Private API Keys: Since there is no backend, any environment variables (like `.env`) are bundled into the JavaScript and visible to anyone inspecting the browser.
- CORS Issues: You cannot set up a Reverse Proxy on GitHub Pages to bypass CORS; the API provider must allow your GitHub Pages domain.
- The "Refresh" Problem: Single Page Applications (SPA) will return a 404 if you refresh the page on a sub-route (e.g., `/about`), as GitHub Pages doesn't know how to redirect to `index.html` automatically.

## Setup Steps

1. create Vite project

```bash
# check node version
node -v

# create vite project
npm create vite@latest your-project-name -- --template react-swc
```

2. setup Vite config

在 `vite.config.js` 中，必須設定 `base` 路徑以對應 GitHub Pages 的 URL：

```javascript
export default {
  // your repository name
  base: "/your-project-name",
};
```

3. create GitHub Actions workflow

Create a file at `.github/workflows/deploy.yml`.

4. run GitHub Actions

## Local Development

```bash
# 安裝套件
npm install

# 啟動開發伺服器
npm run dev

# 測試打包
npm run build
```
