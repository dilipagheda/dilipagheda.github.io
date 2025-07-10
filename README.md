## About this branch

Dev branch holds the source code of this React website. If you would like to fork then use this branch.
DONOT use master branch as it contains live deployed pieces including binaries.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Deployment Instructions

Read this to deploy
https://medium.com/swlh/deploying-react-apps-to-github-pages-on-master-branch-creating-a-user-site-bc96c2a37dc8
https://medium.com/the-andela-way/how-to-deploy-your-react-application-to-github-pages-in-less-than-5-minutes-8c5f665a2d2a

## Deploying to GitHub Pages and Custom Domain

### Deploying the Project

1. Make sure your changes are committed and pushed to the `dev` branch.
2. Run the build command:
   ```bash
   npm run build
   ```
3. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```
   This will publish the contents of the `build` folder to the `master` branch (or the branch specified in your deployment settings) and update your GitHub Pages site at `https://dilipagheda.github.io`.

### Pointing to Your Custom Domain (dilipagheda.com)

After each deployment, if you want your site to be accessible at `https://dilipagheda.com` instead of `https://dilipagheda.github.io`, follow these steps:

1. Go to your repository on GitHub.
2. Click on **Settings** > **Pages** (or **Settings** > **Pages** in the sidebar).
3. In the **Custom domain** section, enter `dilipagheda.com` and click **Save**.
4. Make sure your DNS provider has a CNAME record pointing `dilipagheda.com` to `dilipagheda.github.io`.
   - Example CNAME record:
     | Type | Name | Value |
     |-------|-------------------|--------------------------|
     | CNAME | dilipagheda.com | dilipagheda.github.io |
5. GitHub Pages will automatically create or update a `CNAME` file in your repository with your custom domain.
6. It may take a few minutes for DNS changes to propagate. After that, your site will be available at `https://dilipagheda.com`.

**Note:** If you ever see your site revert to the `github.io` URL after a deploy, simply repeat the above steps to re-point your custom domain.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## GitHub Projects Data Refresh

This project uses a local JSON file to display GitHub projects, instead of fetching from the GitHub API on every page load. This improves performance and avoids API rate limits.

### Refreshing GitHub Projects Data

To update the list of GitHub projects shown on your site:

1. Make sure you have all dependencies installed. If you are using Node.js < 18, run:
   ```bash
   npm install node-fetch
   ```
2. Run the following command in your project root:

   ```bash
   npm run refresh:github-projects
   ```

   This will fetch your latest public repositories from GitHub and update `src/data/github-projects.json`.

3. Commit and deploy your changes as usual.

**Note:** The site will only show the data present in `src/data/github-projects.json` until you manually refresh it with the above command.

## GitHub Project READMEs Data Refresh

This project uses a local JSON file to display each project’s README content, so your site never makes API calls at runtime. You can refresh all README content in one go using a script.

### Refreshing All GitHub Project READMEs

To update the local cache of all your GitHub project README files:

1. **(Optional, but recommended for large repos)**  
   Set a GitHub personal access token as an environment variable to avoid API rate limits:

   ```bash
   export GITHUB_TOKEN=your_personal_access_token
   ```

   - You can create a token at [github.com/settings/tokens](https://github.com/settings/tokens) (no scopes needed for public repos).

2. **Run the refresh script:**

   ```bash
   npm run refresh:github-readmes
   ```

   This will:

   - Read your `src/data/github-projects.json`
   - Fetch the README for each project from GitHub
   - Save all content to `src/data/github-readmes.json` (keyed by project name)

3. **Commit and deploy your changes as usual.**

#### Script Features & Error Handling

- **Rate limits:**  
  If you have many repos, use a GitHub token to avoid hitting the 60 requests/hour unauthenticated limit.
- **Missing README:**  
  If a project has no README, it will be skipped and a warning will be shown.
- **Duplicate project names:**  
  The script will warn you if duplicate names are found (the last one wins).
- **Network/API errors:**  
  Any fetch errors are logged, and the script continues with the next project.
- **Summary:**  
  At the end, the script prints a summary of successes and failures.

#### Troubleshooting

- **No README shown for a project?**
  - Make sure the project’s `name` in `github-projects.json` matches the actual GitHub repo name.
  - Check the script output for warnings about missing or failed fetches.
- **Rate limit errors?**
  - Set the `GITHUB_TOKEN` environment variable as described above.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
