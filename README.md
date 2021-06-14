# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To get started clone this repo onto your local machine, you will need node installed, this was done on node 14.15.5 we recommend using a node version manager if you have other conflicting node versions on your machine.

Once the project is cloned you can run `npm install` in the root directory. Then `npm start` to see the development build.

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

## Testing

I executed manual tests as my expertise in testing is lacking and I was running out of time. On load the there should be 3 stations populated with drones, and no duplicated.

Clicking on rent should remove the drone from the station and put it into your rental tray.

While your drone is out you should see a countdown, this is set to reduce every second for demo purposes. When the timer runs out the drone is returned to the first available station. I check the list of stations for the UI to have been updated.

If you press return in the rental tray it will also remove from the rental tray, hide the rental tray, and then repopulate in the list.

Once one drone is rented no other drones can be rented and the rent button should not appear.

Drones have an initial charge, if the charge is less than 10% it also can not be rented. Verified quads.json and UI to see which drone should not be able to be rented.

The application doesn't have persistent state, so refreshing the browser are any time will take you back to the beginning state.

I started work on battery charging but ran out of time so it is meerly visual, if the drone is at a station and not at 100% it is charging and the UI shows this with strips and animation, if the drone is at 100% the bar is solid green.

## Copyrights

Drone images sourced from:

### Ubisoft:

- https://jeannicolasracicot.artstation.com/
- https://www.artstation.com/punchline
- https://www.artstation.com/belgianboolean
- https://www.artstation.com/louismlebeau
- https://www.artstation.com/jakegriffith

### Others:

- https://www.artstation.com/adiart
- https://www.artstation.com/ivan_podz
- https://www.artstation.com/mechanizedmonsters
- https://www.artstation.com/maywal
- https://www.artstation.com/pavelp
- https://www.artstation.com/andrewhodgson
