This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Grid System
The site uses reflex, which is a responsive flexbox grid with inline-block legacy support
https://github.com/leejordan/reflex
https://www.npmjs.com/package/reflex-grid
Documentation can be found here:
http://leejordan.github.io/reflex/docs/

## Deployments
For the time being, deployments are manual

### Development
http://www-dev.martiansf.com reflects `master` branch

### Staging
http://www-stg.martiansf.com reflects `staging` branch

To deploy staging:
* `git checkout master`
* `git pull`
* `git checkout staging`
* `git pull`
* `git merge master --no-ff`
* Enter `:wq` to write and quit out of vim
* `git push`

After branch is updated, ssh into server and run the following:

* `ssh -i /Users/USERNAME/.ssh/Martian-west1.pem martian@52.53.236.31`
* `cd /var/app/Martian-Site`
* `git pull`
* `npm install` if you made any npm package updates
* `npm run build` to rebuild the app in production mode
* `pm2 restart all` restart app

### Production
TBD

## Available Scripts
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run server`

Launches the app in staging/prod mode<br>

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!


## Displaying Lint Output in the Editor

>Note: this feature is available with `react-scripts@0.2.0` and higher.

Some editors, including Sublime Text, Atom, and Visual Studio Code, provide plugins for ESLint.

They are not required for linting. You should see the linter output right in your terminal as well as the browser console. However, if you prefer the lint results to appear right in your editor, there are some extra steps you can do.

You would need to install an ESLint plugin for your editor first.

>**A note for Atom `linter-eslint` users**

>If you are using the Atom `linter-eslint` plugin, make sure that **Use global ESLint installation** option is checked:

><img src="http://i.imgur.com/yVNNHJM.png" width="300">

Then add this block to the `package.json` file of your project:

```js
{
  // ...
  "eslintConfig": {
    "extends": "react-app"
  }
}
```

Finally, you will need to install some packages *globally*:

```sh
npm install -g eslint-config-react-app@0.3.0 eslint@3.8.1 babel-eslint@7.0.0 eslint-plugin-react@6.4.1 eslint-plugin-import@2.0.1 eslint-plugin-jsx-a11y@2.2.3 eslint-plugin-flowtype@2.21.0
```

We recognize that this is suboptimal, but it is currently required due to the way we hide the ESLint dependency. The ESLint team is already [working on a solution to this](https://github.com/eslint/eslint/issues/3458) so this may become unnecessary in a couple of months.

