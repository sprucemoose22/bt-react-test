# NEWS API FEED

## Overview
This is an application that will allow a user to search the News API, and receive up to 10 results in a feed. It has been designed in a mobile-first responsive manner.

&nbsp;
## Setup Guide
### Installation
#### Prerequisites
1. Node.js: https://nodejs.org/en/

#### Installation Steps
1. Clone the repository.
3. Run `npm install` in the root directory to install the required node modules.

### Launch Application
1. Run `npm start` to launch the application at `localhost:3000`.

### Build Application
1. Run `npm run build` to create a build of the app in a `build` folder.
2. The build can be served locally by running `serve -s build`. This will serve the build at `localhost:5000`.

&nbsp;
## Technology
This project uses:
- HTML
- SCSS
- JS
- React.js
- Node.js

Create React App was used as the base of this project:
https://reactjs.org/docs/create-a-new-react-app.html

&nbsp;
## Configurables
There are a number of configurable properties which can be set throughout the project:

### api.js
Property | Purpose
---------|---------
`API_KEY` | My personal API Key from NewsAPI. Get yours here: https://newsapi.org/
`resultsToDisplay` | Number of results to get from the News API
`articleCharacterLimit` | Maximum number of characters to be displayed in each article's content
`articleContentDelimiter` | String to display to indicate the end of the displayed article's content

### _variables.scss
These are global SCSS properties which are used throughout the project.


&nbsp;
## Lighthouse Scores
- Performance: 99
- Accessibility: 100
- Best Practices 100
- SEO: 100
- Progressive Web App: No


&nbsp;
## Improvements
### Application
- [Display image articles if they exist.](https://github.com/sprucemoose22/bt-react-test/issues/1)
- [Allow further filtering of searches.](https://github.com/sprucemoose22/bt-react-test/issues/2) NewsAPI offers a range of parameters which can further filter user's searches (see https://newsapi.org/docs/endpoints/everything). Filtering options could be added to the `NewsSearch` component.
- [Simple message to the user should their search provide no results.](https://github.com/sprucemoose22/bt-react-test/issues/3)

### Technology
- [TypeScript could be used in place of JavaScript](https://github.com/sprucemoose22/bt-react-test/issues/4). This brings a number of technical benefits ranging from:
    - Static types
    - Enhanced IDE support
    - Strict null checks
    - Further reading: https://stackoverflow.com/questions/12694530/what-is-typescript-and-why-would-i-use-it-in-place-of-javascript/35048303#35048303
- [Fetch API IE11 issues](https://github.com/sprucemoose22/bt-react-test/issues/5):
    - Fetch API isn't compatible with IE11 (see https://caniuse.com/?search=Fetch). There are two approaches we could use to handle this:
        - Implement an IE Polyfill (see https://github.com/github/fetch)
        - Move away from Fetch API and use Axios
- [Obfuscate API Key](https://github.com/sprucemoose22/bt-react-test/issues/6)
    - While it's less of an issue for a small project of this scale, In a real-life enterprise project the API Key should be visible in plain-text in a client-side file. See here for suggestions on how to more safely store this: https://www.freecodecamp.org/news/how-to-securely-store-api-keys-4ff3ea19ebda/