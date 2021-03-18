# Static Web App Created using React.js

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Main information

A demo of this repo can be found here: 

This site is hosted as a static website on Azure Blob Storage - https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-static-website

This repo can be cloned and adapted to fit the needs of the user. 
The site is designed with three main paths:

- '/' - Homepage 
- '/Invite/somecode' - This is the main page and can only be entered by entering the pasword 'password1'
- /AnyOtherUrl - Any other url will naviagate you to the not found page.

The site takes a URL param /invite/:code -> in a real world application, you would use this to identify the wedding guest to some kind of back-end storage. In my case, I used Azure Functions with Azure table storage but purposely left this out of the repo for re-usability. See here for more information on how you can do the same here: https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-storage-table-output?tabs=csharp

Please read the comments carefully in the code as they explain the render conditions and where you would need to insert the API calls.
### Good luck!

----- 

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

