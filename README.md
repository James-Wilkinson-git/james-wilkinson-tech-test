# Getting Started

This was a techincal test for a companies whos NDA is expired.

## Testing

I executed manual tests as my expertise in unit testing is an area I am still improving on. I however did write some automated tests for the dynamic rendering which you can run above with `npm test`

Clicking on rent should remove the drone from the station and put it into your rental tray.

While your drone is out you should see a countdown, this is set to reduce every second for demo purposes. When the timer runs out the drone is returned to the first available station. I check the list of stations for the UI to have been updated.

If you press return in the rental tray it will also remove from the rental tray, hide the rental tray, and then repopulate in the list.

Returning a drone puts it in the first available station, test this by renting drones from the 2nd or 3rd station and returning them and see them in the first station, and the same for the second station until the 1st and second station are full.

Once one drone is rented no other drones can be rented and the rent button should not appear.

Drones have an initial charge, if the charge is less than 10% it also can not be rented. Verified quads.json and UI to see which drone should not be able to be rented.

The application doesn't have persistent state, so refreshing the browser are any time will take you back to the beginning state.

I started work on battery charging but it is meerly visual, if the drone is at a station and not at 100% it is charging and the UI shows this with strips and animation, if the drone is at 100% the bar is solid green.

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
