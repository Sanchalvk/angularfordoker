Set up Node.js.

Install dependencies.

Lint the code (using ESLint or a similar tool).

1 npm install eslint /npm i eslint -->on git bash  --> In the context of the GitHub Actions workflow for checking Angular code 

2 npm install --save-dev @eslint/config or npm install @eslint/config

3 npx eslint .-->> install configuration 

4  ng lint -->> When you run ng lint, the Angular CLI uses the ESLint configuration you've set up (usually in files like
.eslintrc.json) to check your TypeScript and/or JavaScript files. If the linter finds any issues, it will display them in your terminal,
helping you identify and fix problems in your code.

5 npm install ->> Install everything in package.json
npm: Node Package Manager. It's the default package manager for Node.js.
install: A command that tells npm to install the packages.

6 npm run build --> It runs the build script defined in your project's package.json file under the "scripts" section.

7 npm run lint --> In this case, when you run npm run lint, npm will execute the command eslint src/**/*.ts.  This command tells ESLint to check all TypeScript files (.ts) in the src directory and its subdirectories.







