# Car Listing Project

This is a project developed with **React**, utilizing **React Router** and **Redux** for state management. The project features a car listing page where users can click on a car card to navigate to a details page displaying more information about the selected vehicle.

## Technologies Used

- **React**: The main library for building the user interface.
- **React Router**: Used for managing navigation between pages.
- **Redux**: Used for storing and managing the global state of the application.
- **Styled-components**: Utilized for styling the application in a modular and reusable way.
- **React Testing Library**: Used for writing unit tests for components.

## Features

- Car listing page displaying a list of cars.
- Ability to click on a car card and be redirected to a details page with more information about the car.
- **Filters**: You can filter the car listings by:
  - Make
  - Model
  - Maximum bidding price
  - Favourites
- **Sorting**: You can sort the car listings by:
  - Make
  - Starting bid
  - Mileage
  - Auction date
- **Pagination**: You can adjust the number of cars displayed per page.

## Running the Project Locally

To run the project locally, follow these steps:

1. Clone the repository.
2. Install the dependencies:
   ```bash
   npm install
3. To start the application locally, run:
    ```bash
    npm start
    
## Running Tests

To run the unit tests, use the following command:
   
    ```bash
    npm test

## Building the Project

To build the project for production, run:
    ```bash
    npm run build

This command will also run the tests before finish building the project.
