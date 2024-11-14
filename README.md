# 💳 CaixaBank Frontend React Challenge - CaixaBankNow App 🏦
Category ➡️ Software

Subcategory ➡️ React Frontend

Difficulty ➡️ Hard

Expected max solution time ➡️ 2 hours. **It is essential to complete your solution within this timeframe**, as it is a critical performance indicator used by the hiring company to evaluate your work. The timer will begin when you click the start button and will stop upon your submission.

---

## 🌐 Background

Welcome to the CaixaBankNow React Challenge!

You are part of CaixaBank Tech, the company within the CaixaBank group dedicated to providing technology to all the group's business areas. In your case, you work 
specifically in the financial services area. Your team, composed of five people, includes an architect, two frontend developers, a backend developer, and yourself. Currently, you are working on the CaixaBankNow website and app. CaixaBankNow is the application of the CaixaBank bank that allows users to manage their accounts, make transactions, and contract various services, among many other functionalities.

In this exciting project, you will transform a simple web application into a dynamic and engaging financial platform. Imagine creating a seamless user experience where users can effortlessly navigate through login pages, manage their finances, and perform transactions with ease.

Your mission is to enhance the core components of this application, focusing on user authentication, account overview, and transaction capabilities. This challenge offers a great opportunity to bring your creativity and problem-solving skills to life as you build an intuitive and user-friendly interface.


## 📂 Repository Structure

A repository tree is provided below and should not be modified. Everything you need to develop the challenge is already included.

```bash
caixabank-frontend-js-react-caixabanknow/
├── babel.config.js
├── client-management-app.zip
├── jest.config.js
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.js
    ├── App.test.js
    ├── assets
    │   ├── caixabank-icon-blue.png
    │   └── caixabank-icon.png
    ├── components
    │   ├── AccountDetails.js
    │   ├── AccountMovements.js
    │   ├── AddAccountDialog.js
    │   ├── AddCardForm.js
    │   ├── BrokerDetails.js
    │   ├── BrokerList.js
    │   ├── CardList.js
    │   ├── DepositList.js
    │   ├── Navbar.js
    │   ├── TransferDetails.js
    │   └── TransferForm.js
    ├── contexts
    │   └── GlobalState.js
    ├── hooks
    │   ├── useAccountData.js
    │   └── useFetch.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── pages
    │   ├── Accounts.js
    │   ├── Brokers.js
    │   ├── Cards.js
    │   ├── Dashboard.js
    │   ├── Deposits.js
    │   ├── Movements.js
    │   └── Transfers.js
    ├── reportWebVitals.js
    ├── routes.js
    ├── setupTests.js
    ├── styles
    │   ├── Buttons.css
    │   └── Transfers.css
    ├── test
    │   └── AccountDetails.test.js
    └── theme.js
```
**It is necessary to modify only the files proposed in the tasks.**

## 🎯 Tasks

The tasks are the following:

- **Task 1**: Complete the [Accounts Page](src/pages/Accounts.js)

- **Task 2**: Create a custom hook to retrieve data from a given API in [useFecth.js](/src/hooks/useFetch.js) and complete the [BrokerList Component](/src/components/BrokerList.js)

- **Task 3**: Complete the [Cards Page](src/pages/Cards.js)

- **Task 4**: Create a [test file](src/test/AccountDetails.test.js) for the [AccountDetails Component](/src/components/AccountDetails.js)

⚠️ **Attention: Tasks 5 and 6 are not automatically corrected and will be reviewed manually by the CaixaBank technical team. Before making the last push, make sure that you have not changed any of the functions of the tasks that do use automatic correction.**

- **Task 5**: Global App Tour Guide

- **Task 6**: Optimization task


## 📑 Detailed information about tasks

### Task 1

The following file `Accounts.js` contains a series of incomplete functions that need to be implemented. Below is a description of the pending `TODOs`:

1. **Handle opening the options menu (`handleMenuOpen`)**:
    - Implement the function to open the options menu associated with a specific account when clicking on the corresponding button.

2. **Handle closing the options menu (`handleMenuClose`)**:
    - Implement the function to close the options menu.

3. **Handle opening the add account dialog (`handleDialogOpen`)**:
    - Implement the function to open the dialog where users can add a new account.

4. **Handle closing the add account dialog (`handleDialogClose`)**:
    - Implement the function to close the add account dialog.

5. **Add a new account (`handleAddAccount`)**:
    - Implement the function to add a new account using the form data entered by the user.

6. **Handle deleting a selected account (`handleDeleteAccount`)**:
    - Implement the function to delete the account selected by the user.

7. **Handle opening the delete dialog (`handleDeleteDialogOpen`)**:
    - Implement the function to open a confirmation dialog to ask the user if they really want to delete the selected account.

8. **Handle closing the delete dialog (`handleDeleteDialogClose`)**:
    - Implement the function to close the delete account confirmation dialog.

9. **Handle closing the snackbar (`handleSnackbarClose`)**:
    - Implement the function to close the snackbar notification that appears after an action is performed.

10. **Validate the add account form (`validateForm`)**:
    - Implement the function to validate the data entered in the form when adding a new account. Ensure fields like description, type, and currency are properly filled and display errors if necessary.

### Task 2

You need to create a custom hook that retrieves data from a given URL and handles the complete lifecycle of an HTTP request. This means managing the request status (loading, success, error) and returning the appropriate state values to be used in your React components.

The hook should be able to work seamlessly when the URL changes, updating the data and properly handling any new requests. Here are the key aspects and behaviors your hook needs to implement:

1. **State Management for Request Lifecycle**:

    The hook should maintain three distinct states:

    - Data: Represents the data returned from the API.
    - Loading: Indicates whether the request is currently in progress.
    - Error: Stores any error messages if the request fails.

    These states will allow a component using your hook to show different UI states, such as loading spinners, error messages, or the final rendered data.

2. **URL Dependency**:

    The hook must re-fetch data whenever the url parameter changes. This means your hook should be "reactive" to changes in the URL and update the internal state accordingly.

    For example, if the URL changes from https://api.example.com/data?id=1 to https://api.example.com/data?id=2, the hook should automatically re-fetch and update the state with the new data.

3. **Handling HTTP Requests with Proper Error Management**:

    The hook should:

    - Make an HTTP request using the given url.
    - Handle scenarios where the server responds with an error (e.g., a 404 or 500 status).
    - Store and return the error message in a structured way so that a component using the hook can easily display it.

    The important part is that the hook should provide meaningful feedback about the request status.

4. **Avoiding Unnecessary Re-renders or Infinite Loops**:

    The hook should only trigger a re-fetch when the url changes, not when other unrelated states in the component change. This means ensuring that unnecessary re-renders or API calls are avoided.

5. **Returning a Clean Object with the State Values**:

    The hook should return an object that has the following structure:

    - data: Holds the fetched data (or null if no data is available).
    - loading: A boolean flag that indicates whether the request is still in progress.
    - error: Contains any error messages if the request fails. The error message must be: `Network response was not ok`.

6. **Asynchronous Handling**:

    Since HTTP requests are inherently asynchronous, ensure that your hook properly handles asynchronous operations. You must consider cases like:

    - Making sure to clear the loading state once the request is complete.
    - Correctly managing the state if the component using the hook unmounts before the request completes.
    - Handling race conditions when multiple requests are made simultaneously.

**End Result**:

When a React component uses your hook, it should be able to easily extract the data, loading, and error states to display different UI elements based on the hook's response.

In the second part of this task you will have to complete the `BrokerList component` using the previously created function. Here are the key aspects and behaviors your hook needs to implement:

1. **Implement the `useFetch` hook in the component**:
    - Utilize the `useFetch` hook to fetch the list of brokers from `https://faas-lon1-917a94a7.doserverless.co/api/v1/web/fn-a089d91a-d109-4f83-b366-fa7151812c8d/default/BrokerList`.

2. **Handle the loading state by showing a spinner**:
    - If the data is still being fetched (`loading` is `true`), display a spinner using the `CircularProgress` component and `data-testid="loading-spinner"`.

3. **Handle the error state by showing an error message**:
    - If there is an error while fetching the data (`error` is `true`), display an error message using the `Typography` component, including the error message itself. It should be displayed as follows: `Error: error message`. Use `data-testid="error-message"`.

4. **Handle broker selection**:
    - Implement the `handleSelectBroker` function to trigger the `onSelectBroker` callback with the selected broker’s ID. This will allow other parts of the application to know which broker has been selected.

5. **Map brokers from `data` to list items**:
    - Iterate over the list of brokers in `data` and display each broker's name and country inside a `ListItem` component.
    - Each broker should have a `ListItem` with a `ListItemText` displaying the broker’s `nombre` (name) and `pais` (country).
    - Add a `VisibilityIcon` button to the end of each list item to indicate that more details can be viewed for each broker.
    - Use `data-testid="broker-item"`

6. **Ensure accessibility and testability**:
    - Use appropriate `data-testid` attributes on the key elements such as the spinner, error message, and each broker list item to facilitate testing.

### Task 3

The following file `Cards.js` contains several incomplete tasks that need to be implemented. Below is a description of the pending `TODOs`:

1. **Import the necessary hooks and components**:
    - Import the `useStore` hook from Nanostores to access the global state.
    - Import the `CardList` component that will display the list of cards.
    - Import the `AddCardForm` component for adding new cards.
    - Import the CaixaBank icon to display it in the header.
    - Import `accountsStore` from the global state to access the stored cards.

2. **Access global state using `useStore`**:
    - Use the `useStore` hook to access the global state from `accountsStore`.
    - Destructure the state to get the `cards` data from the store.

3. **Display the CaixaBank icon**:
    - Make sure the CaixaBank icon is displayed in the header section of the page, next to the "Cards" title.

4. **Implement the `AddCardForm` component**:
    - Render the `AddCardForm` component in the header section.
    - Pass the necessary props to the `AddCardForm` to allow the user to add new cards to the global state.
    - Ensure that the form is properly displayed and can be toggled open and closed using the `open` state.

5. **Implement the `CardList` component**:
    - Render the `CardList` component inside the `Grid` container.
    - Pass the list of `cards` as a prop to `CardList` to display the cards in the UI.
    - Ensure that `CardList` can properly render each card and allow actions such as deletion.

6. **Implement the logic to delete a card**:
    - Ensure that there is logic in place to delete a card from the global state when the user requests it.
    - Pass a function as a prop to `CardList` that allows for the deletion of cards from `accountsStore`.

7. **Handle the dialog open and close state for `AddCardForm`**:
    - Use the `open` state to manage the visibility of the `AddCardForm` dialog.
    - Ensure that the `open` state can toggle the form open or closed when necessary.

8. **Style the page appropriately**:
    - Ensure the layout and styling follow the given design by using Material-UI’s `Box`, `Grid`, and `Typography` components.
    - Style the CaixaBank icon and the "Cards" header text as needed to match the rest of the application's design.
    
Using Nanostores in this implementation provides a lightweight, efficient solution for global state management, allowing components to reactively access and update shared data. By leveraging accountsStore, we can store and manage the list of cards centrally, while the useStore hook ensures that any updates to this state are immediately reflected across the UI without needing complex prop drilling. This approach simplifies state management, keeping components clean and responsive to changes.

### Task 4

#### File Requirements:

- **File Name**: `AccountDetails.test.js`
- **Path**: `src/test/AccountDetails.test.js`

#### Minimum Functionalities to Cover:

1. **Render Account Details Correctly**:
    - The test should verify that the `AccountDetails` component correctly renders the details of the account based on the provided `accountId`.
    - Mock data should be used for the account, and the test should check if details like the account name, balance, and number are displayed properly.

2. **Display "Account not found" for Invalid Account ID**:
    - The test should verify that when an invalid or non-existent `accountId` is passed, the `AccountDetails` component displays the message "Account not found".
    - Ensure that the component handles edge cases gracefully and shows the correct error message.

#### Test Tools:

- Mock the necessary global state or props passed to the `AccountDetails` component.

### Task 5

Create a global App Tour Guide using React’s **Context API** to provide a guided walkthrough for different sections of the application. The tour should be able to start, progress through multiple steps, and end globally, allowing various components to respond based on the active tour state.

Requirements:

1. **Create and configure a Tour Context**:

    - Implement a global context to handle the state of the tour, including whether it’s active and the current step.
    - Define methods to start, progress through, and end the tour.

2. **Create a Provider Component**:

    - Implement a context provider that wraps the application and manages the state for the entire tour guide.

3. **Provide Access to the Tour State and Methods**:

    - Allow any component within the application to access and modify the tour state through the context.

4. **Build Components that React to Tour State**:

    - Implement components that respond to the tour state by highlighting, disabling, or conditionally rendering based on the active step of the tour.

5. **Implement Tour Navigation Logic**:

    - Include functionality to navigate through steps, such as going to the next step, previous step, and finishing the tour.

6. **Prevent Interference with Existing Tests**:

    - Ensure that the App Tour Guide does not automatically activate during testing and provide a mechanism to disable it for test scenarios.
    - Remember to set the Tour to **False** before pushing the platform to avoid interference with component autocorrection.

#### Suggested Implementation Structure

To maintain a clean structure, create a dedicated TourGuide folder or file that contains:

- **Tour Context**: Handles the tour state and methods.
- **Provider Component**: Manages the global tour state and wraps the main application component.
- **Reacting Components**: Components that respond to the tour’s current step, adjusting their behavior or styling.
- **Navigation Logic**: Functions to control the tour’s navigation, such as moving forward, backward, or ending the tour.

Consider using the tour in the following pre-existing components:

- [**Dashboard**](/src/pages/Dashboard.js)
- [**TransferForm**](/src/components/TransferForm.js)

### Task 6

The main goal of this task is to optimize the performance of a React application that handles a large set of data. The current implementation is designed to be inefficient, leading to noticeable slowdowns during interactions, filtering, and rendering of components. Your challenge is to identify performance bottlenecks and optimize the application to reduce the time and resources consumed during rendering. This will include analyzing the rendering process, minimizing unnecessary re-renders, and improving the efficiency of data handling and component updates.

Additionally, use the React Profiler to measure and log render times, allowing you to clearly demonstrate the impact of your optimizations. The final result should be a visibly more responsive application with faster interactions and improved user experience, as well as a detailed record of render times to show the before and after results of your improvements.

Goals:

1. **Enhance the rendering speed of the application, especially when dealing with large data sets**.
2. **Minimize unnecessary re-renders and improve component efficiency**.
3. **Accurately measure and report render times using React Profiler**.

The optimized application should feel significantly faster, and you should be able to provide clear evidence of these improvements through logged render times and detailed explanations of the changes made.

You can find a folder inside /src [client-management-app](/src/client-management-app/).

Inside you can find everything you need to run the inefficient component and make all the changes you want.

**Remember to uncomment the necessary in [routes.js](/src/routes.js) to be able to test this component.**

**Inside this folder you can create a README detailing the changes you have made to optimise the application and why you have done it that way.**


## 💫 Guides

**A node version equal to or higher than 18 is required.**

Install project dependencies using npm:

```bash
# You should be in the root directory
npm install
```

Execute the project:

This will launch the application in your default web browser. If it does not open automatically, you can access the application at http://localhost:3000.

```bash
npm start
```

Execute your test file:

```bash
npm test
```

You can check [package.json](./package.json) to see which command is used in ``npm test``.

## 📤 Submission

1. Solve the proposed tasks.
2. Continuously push the changes you have made.
3. Wait for the results.
4. Click submit challenge when you have reached your maximum score.

## 📊 Evaluation

The final score will be given according to whether or not the objectives have been met. 

In this case, the challenge will be evaluated on 1600 points (1200 task + 400 code quality) which are distributed as follows:

- **Task 1**: 300 points
- **Task 2**: 300 points
- **Task 3**: 300 points
- **Task 4**: 300 points
- **Code quality**: 400 points

## ❓ FAQs / Additional Information

In this case, as it is a more complex challenge, no tests are provided. But all the guidance needed to complete it is provided both within the README in tasks and within the code itself.
Only the files proposed in the objectives should be modified. You are not allowed to modify anything other than the proposed files.

**Q1: What happens if I modify files that are not in scope?**

A1: The correction will fail because those changes will not be taken into account.

**Q2: Can I add resources that are not in package.json?**

A2: No, everything needed to complete the challenge is included.
