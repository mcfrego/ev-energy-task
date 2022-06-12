# Test results

## Features implemented

- List with data fetched from OCM API
- Clickable list items to confirm action
- EV Energy post request for selected item
- Current session details on homescreen
- Current session remove action

## Tech used

- Redux logic changed to Redux Toolkit and RTK Query:
  - Redux Toolkit slices for managing the store
  - RTK Query for fetching and caching data from data OCM server
  - RTK Query for POST request to EV Energy server

## Remaining stuff / Brainstorming

- Individual view for getting a more detailed item description
- Map for getting visual OCM location
- Get OCM sites based on your real location
- Get OCM sites based on map pin
- ETA for OCM site destinations
- OCM sites favorites
- OCM sites filtering (example: nearest, connection types, network)

## Steps to start

- yarn install
- yarn ios / yarn android
