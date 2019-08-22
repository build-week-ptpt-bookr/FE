Proposal

- What problem does your app solve? - Marketplace for textbook reviews for students in one convenient place
- Be as specific as possible; how does your app solve the problem? - Conveniently organized for review. Items are grouped for convenience. It’s crowdsourced and designed for students and reviewed by students.
- What is the mission statement? - Help students get the proper textbook.
  Features

- What features are required for your minimum viable product? -
  MVP: As a user I can log in, and see a list of textbooks. Each book will have a 5 star rating I can browse from. As a user I can review each book.
  Login Page - After a user logs in, they'll be directed to the home page.
  Navigation - Navigation is present on all pages, Users should know what page is active by clicking on a nav link and activating their tab.
  Home Page - Contains a list of Books laid out in a grid format.
  Single Book Page - Loads information about the book, Author, Name, Publisher and a scrolling list of reviews. Add review and delete book buttons present.
  Single Book Add Review Page - Clicking add review brings up a form (could be modal, could be its own page) where a user can add their review of the book. Clicking submit adds the review to the books information.
  Delete Book - Modal confirming the action, on confirmation user is routed back to the home page and book is gone from the list of books.
  Data Modeling: Each book has a Title - String, Author - String, Publisher - String and Reviews- Array of Objects field. The reviews object shape should be Reviewer - String, Review - String.

- What features may you wish to put in a future release? - A package manager that allows students to send reviews in real time. Textbook recognition with camera support.
- What do the top 3 similar apps do for their users? - Ebay, Amazon, Chegg
  Frameworks - Libraries

- What 3rd party frameworks/libraries are you considering using? - None
- Do APIs require you to contact its maintainer to gain access?
- Are you required to pay to use the API?
- Have you considered using Apple Frameworks? (MapKit, Healthkit, ARKit?) - None
  For Data Scientists

* Describe the Established data source with at least rough data able to be provided on day 1.
* You can gather information about the data set you’ll be working with from the project description. Be sure to collaborate with your PM, and your Backend Architect to chat about the resources you have.
* Write a description for what the DS problem is (what uncertainty/prediction are we trying to do here? Sentiment analysis? Why is this a useful solution to a problem?)
* A target (e.g. JSON format or such) for output that DS students can deliver to web/other students for them to ingest and use in the app

Target Audience

- Who is your target audience? Be specific. - Students
- What feedback have you gotten from potential users? - None
- Have you validated the problem and your solution with your target audience? How? -No

Research

- Research thoroughly before writing a single line of code. Solidify the features of your app conceptually before implementation. Spend the weekend researching so you can hit the ground running on Monday.
  Prototype Key Feature(s)

- This is the “bread and butter” of the app, this is what makes your app yours. Calculate how long it takes to implement these features and triple the time estimated. That way you’ll have plenty of time to finish. It is preferred to drop features and spend more time working on your MVP features if needed. -

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
