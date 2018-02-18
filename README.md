# Marvel Universe React

A UI application built in React to view information provided by the Marvel API in a user-friendly way.  End users may register for an account and save their favorite characters, comics, etc. to their profile for easy access at a later time. 

## Getting Started

The following instructions will get the React application running on your local machine.

### Installing

Clone the repo:

`git clone https://github.com/matt-taggart/marvel_universe_react.git`

Install node modules:

`yarn install`

Start up webpack dev server:

`yarn start`

Run production build:

`yarn run build`

## Running Tests

This project uses Jest and Enzyme for unit testing purposes.  To run the entire test suite, you can use the command `yarn test`. If you prefer to use the "watch" functionality of Jest, you can do this by running `yarn watch`.

## Built With

* React - Javascript library for building UI's.
* Redux - State container for Javascript apps.
* Jest - Zero-configuration testing library.
* Enzyme - Javascript testing utililities for React.
* Recompose - React utility for higher order components.
* Redux-Saga - An alternative side effect model for Redux apps.

## Features

* Register for an account and authenticate users on login.
* If logged in, user can save characters, comics, creators, etc. to their profile for later use.
* Search functionality provided to easily fetch data from the Marvel API.
* Infinite scrolling to load additional results from server.
* Pagination by letter for more convenient browsing.
