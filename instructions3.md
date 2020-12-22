### Instructions

For this exercise, imagine that you're building a section of a simple video game
website where we should be able to add users and display users, along with the
number of games he/she has played.

**Task**: Create a React app that lets us add a user's first name, last name, and
username. When the user is added, the number of games that he/she has played is
defaulted to 0. Each username has to be unique, so we cannot add multiple users
with the same username. When someone clicks "Add" but the username already
exists, the app should not allow for a duplicate user to be added and should
show an error message instead.

The app should also display a list of users, specifically their usernames
and the number of games they've played (which is defaulted to 0). If someone
tries to add a user when one of the fields is empty, the "Add" button should
be disabled.

We should also have a button that lets us toggle between showing and hiding
the number of games the users have played. For example, the button can start
out as "Hide the Number of Games Played" and the app can display "username1
played 0 games." Clicking that button should change the button text to
"Show the Number of Games Played" and the displayed username and score can be
changed to "username1 played \* games."

State management is at the heart of React. It allows us to have a single source
of truth for our entire application. That means that we don't need to make sure
that our data is synched across multiple components; React does it for us. It
happens via unidirectional data flow: parent components pass properties to
child components as props.

Remember that state cannot be modified outside of the component in which it is
declared. If a child component needs to pass some data back up to the parent (e.g. a
form that conveys the new user information to the component that holds that the
users piece of state), we'll need to pass callbacks from the component that holds
state all the way down to the required component. By calling those callbacks, child
components are able to pass data to back up to their parents, which are able to
modify their state. Props can go through multiple components to get to the
component they ultimately need to reach.

This practice exercise will help you cement your understanding of where to put
state, how to update and access state, when to use stateless functional
components, and how to use controlled components.

We recommend following the [Thinking in React Guide](https://reactjs.org/docs/thinking-in-react.html when you're building your
React applications.

#### Step 1. Break down the app into a hierarchy of components. Draw a box around each React component.

Our Component Hierarchy:

```
|- App
|-- Game
|--- CreateUser
|--- HideGameScore
|--- UserList
|---- Useritem
```

#### Step 2. Determine the data in our app.

1.  new first name (shown inside the CreateUser Component)

2.  new last name (shown inside the CreateUser Component)

3.  new username (shown inside the CreateUser Component)

4.  users (needed to show a list of users inside UserList and to determine
    whether we're trying to add a username that already exists. This data wil be an array)

5.  userExists (needed to be able to show the error message when we're trying
    to add a username that already exists. If we'd put the conditional of checking
    whether the username already exists inside the render method instead, the
    message would appear every time the render method runs. (Remember that the
    render method runs every time the component's state or the props passed to the
    component are changed.) In our app, we just need to show the message when the
    "Add" button is clicked, so it makes sense to have this piece of state
    inside of the AddUser Component. This data will be a booleen that represents the nature of a toggle button well

6.  showGamesPlayed (needed to be able to toggle between showing the number of
    games the users played and hiding that information. This data will be a booleen that represents the nature of a toggle button well)

7.  username (shown in the UserList)

8.  number of games played (which defaults to 0)

#### Step 3. Figure out the data that should be a part of our state:

a) Is it passed in from a parent via props? If so, it probably isn’t state.

b) Does it remain unchanged over time? If so, it probably isn’t state.

c) Can you compute it based on any other state or props in your component?
If so, it isn’t state.

1.  new first name - this piece of data changes over time and cannot be computed
    based on any other state or props -> state.

2.  new last name - this piece of data changes over time and cannot be computed
    based on any other state or props -> state.

3.  new username - this piece of data changes over time and cannot be computed
    based on any other state or props -> state.

4.  users - this piece of data changes over time and cannot be computed
    based on any other state or props -> state.

5.  userExists - this piece of data changes based on new input. It is
    technically possible to compute this data based on other state and
    props. However, if we put that code into the render method, we'll be seeing the
    error message every time the username is changed, not when the "Add" button
    is clicked.

6.  showGamesPlayed - this piece of data changes over time and cannot be computed
    based on any other state or props -> state.

7.  username - can be computed from the `users` piece of state in Game component -> not state.

8.  number of games played - can be computed from the `users` piece of state in Game component ->
    not state.

#### Step 4. Identify where each piece of state lives.

a) Identify every component that renders something based on that state.

b) If multiple components need the same piece of state, put that piece
of state into those components' parent-most component.

If you can’t find a component where it makes sense to own the state, create
a new component simply for holding the state and add it somewhere in the
hierarchy above the common owner component.

(1) users:

a) The ListUsers renders the `users` piece of state. The CreateUser Component renders
the error message based on whether the users already include the new user's
username.

b) In order for both of these components to access the `users` piece of
state, we need to lift state up to their parent-most component - the Game
Component. Remember a component can only to alter its own internal state. So this state cannot be modified outsideof the component where it is defined,

(2) new first name:

a) This piece of state should live in the CreateUser Component because we need to
have a single source of truth in React. This component will fully control
what's rendered on the screen when we type something and what happens to the
input. Remember a component can only to alter its own internal state. So this state cannot be modified outsideof the component where it is defined,

(3) new last name:

a) This piece of state should live in the CreateUser Component because we need to
have a single source of truth in React. This component will fully control
what's rendered on the screen when we type something and what happens to the
input. Remember a component can only to alter its own internal state. So this state cannot be modified outsideof the component where it is defined,

(4) new username:

a) This piece of state should live in the CreateUser Component because we need to
have a single source of truth in React. This component will fully control
what's rendered on the screen when we type something and what happens to the
input. Remember a component can only to alter its own internal state. So this state cannot be modified outsideof the component where it is defined,

(5) userExists:

a) This piece of state should live in the CreateUser Component because that's the
component that will need to use and alter this booleen variable to show an error message if this username already exists. Remember a component can only to alter its own internal state. So this state cannot be modified outsideof the component where it is defined,

(6) showGamesPlayed:

a) The components that need this piece of state are the HideGameScore Component, ListUsers Component and
the UserItem Component. The HideGameScore Component needs it because this component is responsible for changing the wording on the toggle button from "Show the Number of Games Played" to "Hide the Number of Games Played." The ListUsers component is responsible for rendering the UserItem Component, which needs access to this piece of state to know whether to show the number of game of games played or hide that by printing a `*` symbol instead.

b) Since Game is the parent-most element for the HideGameScore Component, UserItem Component and ListUsers Component, we can store this piece of state there. Remember a component can only to alter its own internal state. So this state cannot be modified outsideof the component where it is defined,

So we ended up having
```
|- App
|-- Game (manage state for showGamesPlayed and users data)
|--- CreateUser (manage state for firstName, LastName, userName and userExists)
|--- HideGameScore
|--- UserList
|---- Useritem
```

So we ended having 2 Class Component, and 3 Stateless Functional Component
Functional component can do logic and render based on the state passed as props from the parent component that calls them


#### Step 5. Add Inverse Data Flow.

State should be updated inside of the component where that state lives.
If we pass state down from component A to component B and then need to update
the state based on something that happened in component B, we can do so via
callbacks: Component A will not only pass state to Component B, but it will
also pass a callback function that will fire whenever the state should be updated.
Eg: we have this happen between Game Component and CreateUser Component

Parent components can pass pieces of state as props, and they can also pass
callbacks as props. Callbacks are passed in order to allow child components
to pass data back to the parent. Remember that state cannot be modified outside
of the component where it is defined, so our CreateUser Component cannot just add
a new user to our list of users that's stored in the state inside of the Game
Component.

To be able to get new users, the Game Component passes a callback to the CreateUser Component as the `addUser` prop. When a new user is added, the CreateUser Component runs the callback function, enabling the new user to be passed to the Game Component.


