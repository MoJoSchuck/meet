# Meet App

## Objective
To build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

## Features
- Filter Events by City.
- Show/Hide Event Details.
- Specify Number of Events.
- Use the App When Offline.
- Add an App Shortcut to the Home Screen.
- Display Charts Visualizing Event Details.

## User Stories
### Filter Events by City
1. As a [user], I should be able to [filter events by city], so that [I can find events in my area].

### Show/Hide Event Details
1. As a [user], I should be able to [show and hide event details], so that [I only see the information I need].

### Specify Number of Events
1. As a [user], I should be able to [specify the number of events displayed], so that [I can adjust the display to my needs].

### Use the App When Offline
1. As a [user], I should be able to [use the app without an internet connection], so that [I can still access the stored data when I am offline].

### Add an App Shortcut to the Home Screen
1. As a [user], I should be able to [add an app shortcut to the home screen], so that [I can quickly and easily launch the app].

### Display Charts Visualizing Event Details
1. As a [user], I should be able to [view charts visualizing event details], so that [I can get a better overview of the events].

## Scenarios
### Show/Hide Event Details
1. **Scenario 1:**
   - **Given** an event element is collapsed by default,
   - **When** the user clicks the "Details" button,
   - **Then** the event should show its details.

2. **Scenario 2:**
   - **Given** an event element is expanded,
   - **When** the user clicks the "Details" button,
   - **Then** the event details should be hidden.

### Specify Number of Events
1. **Scenario 1:**
   - **Given** the user has not specified the number of events to be displayed,
   - **When** the app loads,
   - **Then** 32 events should be displayed by default.

2. **Scenario 2:**
   - **Given** the user wants to change the number of events displayed,
   - **When** the user sets the number of events to a new value,
   - **Then** that many events should be displayed.

### Use the App When Offline
1. **Scenario 1:**
   - **Given** the user has no internet connection,
   - **When** the user opens the app,
   - **Then** the app should display cached data.

2. **Scenario 2:**
   - **Given** the user has no internet connection,
   - **When** the user tries to change the search settings (city, number of events),
   - **Then** the app should display an error message.

### Add an App Shortcut to the Home Screen
1. **Scenario 1:**
   - **Given** the user wants to add the app to the home screen,
   - **When** the user follows the "Add to Home Screen" prompt,
   - **Then** the app should appear as a shortcut on the home screen.

### Display Charts Visualizing Event Details
1. **Scenario 1:**
   - **Given** the app displays event details,
   - **When** the user opens the chart view,
   - **Then** a chart should display the number of upcoming events in each city.

## Technical Requirements
- React application
- Test-driven development (TDD) technique
- Google Calendar API with OAuth2 authentication flow
- Serverless functions (AWS Lambda preferred)
- Hosted on GitHub Pages
- Cross-browser compatibility
- Responsive design
- Lighthouse PWA checklist compliance
- Offline support with service workers
- Installable on desktop and mobile home screens
- Alert system using OOP approach
- Data visualization
- Test coverage rate >= 90%
- Performance monitoring tool

## How to Run the Project
1. Clone the repository: `git clone https://github.com/MoJoSchuck/meet.git`
2. Install dependencies: `npm install`
3. Run the development server: `npm start`
4. Build the project: `npm run build`
5. Deploy the project to GitHub Pages: `npm run deploy`

## Access the Live Application
The live application is available at [https://mojoschuck.github.io/meet/](https://mojoschuck.github.io/meet/)

## Monitoring and Maintenance
The application is monitored using [performance monitoring tool]. Please refer to the [tool's documentation] for more details on how to set up and view performance metrics.

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.
