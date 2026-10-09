# Deploying a Static Site
```https://vite.dev/guide/static-deploy#building-the-app```
# Vite Static Deployment Guide

A beginner-friendly guide to building and deploying a Vite app using the command line (CLI).

Official documentation: https://vite.dev/guide/static-deploy#building-the-app

## 1. How Vite deployment works

During development, Vite runs a local development server. Before publishing your app, you create a production build.

```text
Your project files
       |
       | npm run build
       v
  dist/ folder
       |
       | Upload / deploy
       v
Hosting platform
       |
       v
Public website URL
```

- **Build command:** converts your project into optimized files for production.
- **`dist/` folder:** contains the generated production files by default.
- **Hosting platform:** serves those files to visitors.
- **CLI:** means Command Line Interface, where you run commands in a terminal such as CMD or PowerShell.

> Important: In the usual Vite setup, you deploy the contents generated in `dist/`, not your entire source project folder.

## 2. Before you start

You need:
- Node.js and npm installed.
- A working Vite project.
- A terminal opened in your project root, where `package.json` is located.

Check Node.js and npm:

```bash
node -v
npm -v
```

If both commands print version numbers, they are available in your terminal.

Move into your project folder (replace the example path with your own):

```powershell
cd "D:\web development\my-vite-app"
```

Install dependencies if needed:

```bash
npm install
```

## 3. Build the app

Run:

```bash
npm run build
```

Vite normally writes the production build to:

```text
dist/
```

If the build fails, fix the reported errors before deploying.

### Preview the production build locally

Run:

```bash
npm run preview
```

Vite usually prints a local address similar to `http://localhost:4173`. Open the address in your browser and check the built app.

`npm run preview` is for local checking. It is **not** intended to be your production hosting server.

## 4. Deployment option A: Vercel CLI

Vercel is a straightforward option for many Vite projects.

### Step 1: Install the CLI

```bash
npm install -g vercel
```

### Step 2: Sign in

```bash
vercel login
```

Follow the instructions shown in the terminal.

### Step 3: Deploy

From your project's root directory, run:

```bash
vercel
```

Answer the interactive prompts. Vercel detects many Vite projects automatically and provides a deployment URL.

### Step 4: Deploy production updates

After testing the preview deployment, publish a production deployment with:

```bash
vercel --prod
```

**Typical workflow:**

```bash
npm install
npm run build
vercel
vercel --prod
```

Vercel can also build the project itself when configured for the repository. Follow the prompts and verify the build settings shown by the platform.

Official Vite instructions: https://vite.dev/guide/static-deploy#vercel

## 5. Deployment option B: Netlify CLI

### Step 1: Install the CLI

```bash
npm install -g netlify-cli
```

### Step 2: Connect or create a site

```bash
netlify login
netlify init
```

Follow the prompts to link your project to a Netlify site.

### Step 3: Create a preview deployment

```bash
npm run build
netlify deploy
```

If Netlify asks for the publish directory, use:

```text
dist
```

### Step 4: Publish to production

```bash
netlify deploy --prod
```

The CLI displays a URL when the deployment is ready.

Official Vite instructions: https://vite.dev/guide/static-deploy#netlify

## 6. Deployment option C: GitHub Pages

GitHub Pages can host a Vite app, but it needs a build workflow. If the site will live at `https://USERNAME.github.io/REPOSITORY/`, configure Vite's `base` path.

### Step 1: Configure `vite.config.ts` or `vite.config.js`

For a repository named `my-vite-app`, set the base path to `/my-vite-app/`.

Example for `vite.config.ts`:

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/my-vite-app/',
})
```

Keep your project's existing plugins and settings. Change only the `base` value as needed.

- For a project site such as `https://USERNAME.github.io/my-vite-app/`, use `base: '/my-vite-app/'`.
- For a user site such as `https://USERNAME.github.io/`, or a custom domain at the root, use `base: '/'` or omit it.

### Step 2: Push the project to GitHub

Make sure the project is committed and pushed to the repository's default branch, commonly `main`.

### Step 3: Add a GitHub Actions workflow

Create this file in your project:

```text
.github/workflows/deploy.yml
```

Use this workflow as a starting point:

```yaml
name: Deploy Vite site to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build-and-deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: lts/*
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Configure GitHub Pages
        uses: actions/configure-pages@v5

      - name: Upload build output
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

Action versions can change over time. If GitHub recommends newer versions, use the versions in the current official Vite guide.

### Step 4: Enable GitHub Pages

1. Open your GitHub repository.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set the source to **GitHub Actions**.
4. Open the **Actions** tab and wait for the workflow to finish.
5. Open the published website URL shown by GitHub.

When you push a new commit to `main`, the workflow builds and deploys the updated site.

Official Vite instructions: https://vite.dev/guide/static-deploy#github-pages

## 7. Other hosting platforms

Vite's official guide also documents these options:

| Platform | Typical build command | Output directory / deploy command |
|---|---|---|
| Render Static Site | `npm install && npm run build` | Publish directory: `dist` |
| Cloudflare Pages with Git | `npm run build` | Build output: `dist` |
| Firebase Hosting | `npm run build` | Configure `public` as `dist`, then `firebase deploy` |
| Surge | `npm run build` | `surge dist` |

Read the platform-specific instructions in the official guide before deploying, because account setup, configuration, and CLI prompts can differ.

Official guide: https://vite.dev/guide/static-deploy

## 8. Common problems

### `npm run build` fails

- Read the first meaningful error in the terminal.
- Confirm dependencies are installed with `npm install`.
- Fix TypeScript, JSX, import-path, or other build errors.
- Run `npm run build` again.

### The website loads, but images or assets are missing

- For GitHub Pages project sites, check that Vite's `base` matches the repository path, including the leading and trailing `/`.
- Check file paths and filename capitalization.
- Rebuild and redeploy after changing configuration.

### The homepage works, but refreshing a nested route gives a 404

If your app uses client-side routing, the hosting platform may need a fallback/rewrite to send route requests to `index.html`. Configure this according to your router and hosting provider. The correct setup depends on the platform.

### The deployed website does not show the latest changes

- Confirm the deployment completed successfully.
- Check that you deployed the correct project and branch.
- Rebuild and deploy again if needed.
- Hard-refresh the browser or check in a private window if caching may be involved.

### `vite preview` works, but the public website does not

Previewing checks the local production build only. It does not verify your hosting configuration, base path, redirects, environment variables, or deployment settings.

## 9. Which method should you choose?

- **Vercel CLI:** a good simple choice for deploying from your terminal.
- **Netlify CLI:** useful if you want Netlify preview and production deployments.
- **GitHub Pages:** useful for a project already hosted on GitHub, especially a static site.
- **Render or Cloudflare Pages:** useful alternatives with Git-based automatic deployments.

For a beginner who wants a quick CLI deployment, start with **Vercel**:

```bash
npm install
npm run build
npm install -g vercel
vercel login
vercel
```

When you're ready to publish the production deployment:

```bash
vercel --prod
```

## 10. Quick checklist

- [ ] Opened the terminal in the folder containing `package.json`.
- [ ] Installed dependencies.
- [ ] Ran `npm run build` successfully.
- [ ] Checked the `dist/` output.
- [ ] Tested with `npm run preview`.
- [ ] Chose a hosting platform and followed its setup instructions.
- [ ] Opened the public URL and tested the app.
- [ ] Checked asset paths and nested routes if applicable.

## Official reference

- Vite: Deploying a Static Site — https://vite.dev/guide/static-deploy
- Vite: Building for Production — https://vite.dev/guide/build


# practics link
```https://github.com/ProgrammingHero1/react-ts-on-the-go```
