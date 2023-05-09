# ❌ ⭕️ Tic Tac Toe

This is a web game for two players on one device, taking turns. You will have to use component state to keep track of whose turn it is and which squares have been marked by each player. This project will challenge your knowledge of React but should also be an exercise in creating good user experiences.

When creating a project it is important to think about organization of your code. It is best practice to separate and compartmentalize all the actions in your code. The square UI will be in its own component. App.js controls of all the data in state, renders the other components, and performs the game logic.

### 📚 User Stories
- opponents will have a choice between ⚔️ or 🛡

- As a user, I can see a three by three grid game board on the page.
  - branch: grid
  - on App.js, pass state variable `squares` as props to Square component
  - on Square.js, iterate across the values of the squares array (using .map() to return the same length array) and return the values encapsulated by the custom css class attribute `square` to create 9 squares
    - wrapped a custom css attribute `grid` around the mapped array to create a 3x3 grid
    - use the index of the array as the unique key property to clear the warning in the console
  
- As a user, I can click on a square to mark it.
  - branch: sword
  - using console.table() to see the index and value within the array
  - functional props on App.js
    - create a function that take in the index of the selected box `playerChoice` and return ⚔️ 
    - Pseudocode:
    - input: index of the selected box
    - output: ⚔️ on the selected box
    - function name: handleClick
    - reference selected index of the squares array to reassign value to emoji 
    - use spread operator in the setter function `setSquares` to copy the current values and to update changes in the array
  - on Square.js, perform function call with onClick on each box. Use anonymous arrow function to prevent the function from being immediately invoke.
    - update styling to increase font size and center the values on the grid


- As a user, my partner can click on a square after me and see their mark.
  - branch: toggle
  - react state to store true/false condition to toggle on emojis: firstOpp
  - modify function to with conditionals to return ⚔️ for the first opponent when `firstOpp` is true or 🛡 for the second opponent when `firstOpp` is false


- As a user, I can't click on a square that has already been marked.
  - branch: no-click
  - modify function using logical operator that states the value has to be null to allow functionality to occur

- As a user, when either my partner or I win the game (three squares in a row: horizontally, vertically, or diagonally) I can see a notice telling me which player won.
  - create a function that will take in the squares array and check for winning lines then return a string stating which player won.
  - function name: winner
  - reference for winning combination: https://react.dev/learn/tutorial-tic-tac-toe
  - input: squares array
  - output: string stating which emoji won
    - create an array that contains combinations of the three indexes that will need the same value to establish a winner
    - use for loop to iterate across each index and then evaluate whether or not the first value of the line is null
      - destructure each value from the applicable index that is being accessed
      - if the first value is an emoji, then evaluate whether or not that both the first value is strictly equal to the second value and that the second value is strictly equal to the third value
        - if the conditions are true, then return a string stating that the first value is the winner
  - function call will be stored in a variable `status` that will be used for conditional rendering to allow string to be displayed on the user interface
  - create a component to display winning message: Message


- As a user, I can't continue playing the game after the game has been won.
  - branch: no-play
  - modify the winner function to share multiple values in an array
  - reference: https://www.javascripttutorial.net/javascript-return-multiple-values/
  - return winning statement and false value with the winning combination
  - default return will be no winners and true value
  - pass status as props to Square
  - create conditional rendering on onClick attribute to prevent clicking boxes when status has false value


- As a user, if there are no more squares available, I can see a notice telling me that the game has ended.
- create a variable `full` to store filtering the squares array for a null value
- pass `full` as prop to Message component
- create conditional rendering to display that the battle has ended when the length of the array is less than 1

- As a user, I can click on a restart button that will clear the game board.

### 🏔 Stretch Goals

- As a user, I can see a pleasant stylings on the application.
- As a user, I can see a notification that informs me whether it is currently my partner or my turn.
- As a user, I can choose my marker from a predetermined list (X, O, a color, an emoji, etc...).

### 👩‍💻 Developer Stretch Goals

- As a developer, I have a well commented application.
- As a developer, I have well written README file with instructions on how to access my repository.
- As a developer, my variables are all named semantically.
- As a developer, I have refactored and efficient code.
- As a developer, I have my application [deployed as a live website](https://render.com/docs/deploy-create-react-app).

### 🛠 Resources

- [Tic Tac Toe](https://en.wikipedia.org/wiki/Tic-tac-toe)
- [Tic Tac Toe win condition in React](https://forum.freecodecamp.org/t/need-help-understanding-react-tic-tac-toe-winner-function/137840)
