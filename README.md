# React Router App with Haus Listings

This is a sample React application that demonstrates routing using the `react-router-dom` library. The application provides a simple interface to navigate between different sections, such as the homepage, about page, help section, and a list of houses.

## Technologies Used

- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [react-router-dom](https://reactrouter.com/web/guides/quick-start): A routing library for React applications.

## Project Structure

The project is organized into different components and pages.

### `src/index.js`

This is the entry point of the application. It renders the `App` component and provides the main routing functionality using the `RouterProvider`.

### `src/App.js`

The `App` component sets up the routing for the application using the `createBrowserRouter` and `createRoutesFromElements` functions from `react-router-dom`. It defines routes for different sections of the app, such as the homepage, about page, help section, and the list of houses.

## Link,Navlink,RouteProvider,Outlet,Nested Route,Custom Error Page,Haus Listing,Loaders,Route Parameters,Loader with Parameter,Error Element,Form and Action,useActionData,Navigate, useSearchParams,useLocation,Breadcrumbs

### `src/pages`

This directory contains the various pages of the application.

- `Home.js`: The homepage of the application.
- `About.js`: The about page that displays information about the application.
- `Hfa.js`: A section with frequently asked questions and answers.
- `Kontakt.js`: The contact page.
- `NotFound.js`: The 404 page displayed when no route matches.
- `hauses` directory: Contains components related to the list of houses.
  - `Hauses.js`: Displays a list of houses fetched from the server.
  - `HausDetailed.js`: Displays detailed information about a specific house.
  - `HausFehler.js`: Displays an error message if there's an issue loading house data.

### `src/layouts`

This directory contains layout components used in the application.

- `RootLayout.js`: The layout for the root level of the application, including the navigation menu.
- `HelpLayout.js`: The layout for the help section, including navigation links and content.
- `HausLayout.js`: The layout for the house section, including navigation links and content.

### `src/components`

This directory contains shared components.

- `Breadcrumb.js`: Displays breadcrumb navigation based on the current route.

## Fetching House Data

The application fetches a list of houses from a JSON server. The data is fetched using the `hausesLoader` function from `src/pages/hauses/Hauses.js`. The fetched data is then displayed in the `Hauses` component.

## Getting Started

1. Clone the repository.
2. Install dependencies: Run `npm install` or `yarn install`.
3. Start the development server: Run `npm start` or `yarn start`.

## Note

This is a simplified example to demonstrate routing in a React application. It uses placeholder data for houses and might not cover all edge cases. Feel free to extend and customize the application as needed for your use case.


## Screenshots

![Screenshot 1](/src/images/homepage.png)
![Screenshot 2](/src/images/hfapage.png)
![Screenshot 3](/src/images/kontaktpage.png)
![Screenshot 4](/src/images/hausespage.png)
![Screenshot 5](/src/images/hausdetailedpage.png)
![Screenshot 6](/src/images/aboutpage.png)

