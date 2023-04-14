# Getting Started with Catmandu

It is __*really important*__ that you first create an `.env` file in de **root** of your project before running `npm start`. This app is heavily depending on the environment variables declared in this file.

The `.env` file should contain the following variables where your own api key and sub_id should be provided:

```
REACT_APP_API_ENDPOINT = https://api.thecatapi.com/v1
REACT_APP_API_KEY =[DEMO-API-KEY]
REACT_APP_SUB_ID = [MY-SUB-ID]
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## TODO

- Introduce SASS
- Implement font icons
- Implement bootstrap, tailwind or other CSS framework or Styled Components (https://styled-components.com/docs/api)
- component style definitions gebruiken??
- Implement matchRoutes with 404 handling (Miss)
- Using Data API for routing? (https://reactrouter.com/en/main/routers/picking-a-router, https://programmingarehard.com/2023/04/01/react-routers-data-utilities-are-awkward.html/)
- Investicate forms using data api with data routing (https://reactrouter.com/en/main/components/form)
- Defer filter inputs so we are not spamming the API (https://reactrouter.com/en/main/utils/defer)
- Error handling should be userfriendly
- Fix TS ignore TODO's
- Change flow of selector api call and hooks (investicate best practice)
- Extract headers config for API calls (DRY)
- Implement Client library from Cat Api (https://github.com/thatapicompany/thecatapi)
  