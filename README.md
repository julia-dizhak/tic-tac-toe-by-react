# Tic tac toe game 
build by React

inspired from [Reactjs tutorial](https://reactjs.org/tutorial/tutorial.html)

## Setting up the project

```yarn add create-react-app```

```
yarn create-react-app app-name
rm -f src/*
```

```yarn start``` - starts the development server.

```yarn build``` - bundles the app into static files for production.

I suggest that you begin by typing:
```
cd app
yarn start
```

### Getting started
In particular, we have three components:
```
* Square
* Board
* Game
```
The Square component renders a single ```<button>```, the Board renders 9 squares, and the Game component renders a board with some placeholders that we’ll fill in later. None of the components are interactive at this point

### Lifting state up
When you want to aggregate data from multiple children or to have two child components communicate with each other, move the state upwards so that it lives in the parent component. The parent can then pass the state back down to the children via props, so that the child components are always in sync with each other and with the parent.