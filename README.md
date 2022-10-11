

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


## Technologies: 
REACT • HTML5 • SCSS • TS

## Libraries: 
React Router • Redux Toolkit • React Hook Form • MUI(only a list in the quiz)

## About the project: 
This is a single page application • The application is flex, I used @media in SCSS • Each page takes something different • 
 ### Header: 
 It is spread over several pages • The backgraund is video • It displays a greeting depending on the time of day
 ### Login and Register: 
 For validation I used the library React Hook Form • A subpage is created that would transfer the user in the event of successful registration (I would use the API and router for this - const navigate = useNavigate(); navigate("/registerSucces", {replace: true})) • You can switch between the registration and login page
 ### Album: 
 Displays data from data / album.tsx folder • "Map" is used to display the data

## Solutions in the project: 
On the main page, an image is displayed via the API from the NASA page • I used Redux to display the quiz and score points I use reusable containers and components

## Assets: 
Free photos from the internet • Icon from fontawesome.com • Font from fonts.google.com

### TO DO:
Tests • Game -memory • Making improvements