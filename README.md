# Project Instructions

This project takes user URL and supplies the sentiment of the input using meaningcloud Natural Language Processing (NLP) API. Outputs reveal subjectivity and confidence in answer. 

## Getting started
Install the necessary packages:

Check package.json dependencies for a full list

### Step 1: Enter text/URL

To interact with the webpage, enter your desired url into the form field. The form results will give you the sentiment of the input.

### Step 2: Scripts

   "test": "jest",
    "start": "node src/server/index.js",
    "build-prod": "webpack --config webpack.prod.js",
    "build-dev": "webpack serve --config webpack.dev.js --open "

-test: Runs jest unit tests against JS functions found in the client folder
-start: Starts server that listens on localhost:8081
-build-prod: Builds the project in production mode. This includes express server and service workers that keep the website active in the event of the server going offline
-build-dev: Builds the project in development mode. This dev server is setup to only server static files through dist

