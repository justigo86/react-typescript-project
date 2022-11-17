# Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
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
### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.
You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
## Learn More
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
To learn React, check out the [React documentation](https://reactjs.org/).


Project link: https://www.youtube.com/watch?v=FJDVKeh7RJI
### Steps to complete project
npx create-react-app
delete unwanted files
adjust App.tsx function to arrow function with type
add CSS for App, heading, @media(max-width: 800px)
new folder - Components
new file - components/InputField - rafce
  create form with input and 'Go' button
new file - components/styles.css
  add styles for .input, .inputBox, .inputSubmit
new file - src/model.ts
  add Todo interface
add todos array useState to App.jsx
add handleAdd(e) function to App.jsx
  include e.preventDefault() to prevent page refresh on button click
  include it as a property to <InputField> and within InputField.tsx interface Props
add inputRef (useRef()) in InputField - add to input
add onSubmit to InputField form
create TodoList component with interface Props
  include in App.tsx
create SingleTodo component with interface Props and React icons
  include in TodoList.tsx
  add handle Edit, Delete, Done functions to SingleTodo icons
update styles.css for all components (up to this point)
...
install drag and drop package
  npm i react-beautiful-dnd
  npm i @types/react-beautiful-dnd
add drag capabilities in App.tsx
  wrap return in DragDropContext element
add drag capabilities to TodoList
  wrap container contents with Droppable element
