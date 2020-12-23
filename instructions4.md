### Instructions

You're given a starter template with dummy data.

**Task**: Add interactivity to the app by refactoring the static code in this
template. The goal is to build a React app that shows 2 chat windows for the
two existing users - Amy and John. The messages they send to each other should
appear in both chat windows. On Amy's screen, her messages should appear in green and
John's messages should appear in blue. On John's screen, his messages should appear in
green and Amy's messages should appear in blue.

Remember to follow these steps from the [Thinking in React Guide](https://reactjs.org/docs/thinking-in-react.html) when you're building your
React applications:

#### Step 1. Break down the app into a hierarchy of components. Draw a box around each React component.

Our Component Hierarchy:

```
|- App
|-- DisplayChat
|--- ChatBox
|---- ListMessages
|----- MessageText
|---- AddMessage 

```

FYI: ideally you will want to have a component that shos image or text depending on the data of the mesage. In our demo we just expect only MessageText. We we have an image can create a component for MesageImage

#### Step 2. Determine the data in our app.

1. new message (shown inside AddMessage Component)

2.  new username (shown in ChatBox)

3.  messages (needed to show a list of messages inside ChatBox)

4. users (needed to show a list of users inside ChatBox and to determine
    whether a username is a sender or recipient. This data will be an array)



#### Step 3. Figure out the data that should be a part of our state:

a)  Is it passed in from a parent via props? If so, it probably isn’t state.

b)  Does it remain unchanged over time? If so, it probably isn’t state.

c)  Can you compute it based on any other state or props in your component?
    If so, it isn’t state.

1.  new message - this piece of data changes over time and cannot be computed
    based on any other state or props -> state.

2.  new username - Is it passed in from a parent component DisplayChat via props to ChatBox and remains inchanged over time-> not state.

3.  messages - this piece of data changes over time and cannot be computed
    based on any other state or props -> state.

4.  users - Inn our app, we can make this a state. This is optional. If it is passed in from a parent component Apps to DisplayChat via props then to ChatBox and remains unchanged over time-> not state.



#### Step 4. Identify where each piece of state lives.

a)  Identify every component that renders something based on that state.

b)  If multiple components need the same piece of state, put that piece of state into those components' parent-most component.

If you can’t find a component where it makes sense to own the state, create
a new component simply for holding the state and add it somewhere in the
hierarchy above the common owner component.

(1) messages:

a) ListMessages, MessageText and ChatBox Components.

b) The parent of both ChatWindow Components is the DisplayChat Component, so the
`messages` piece of state should live there.

(2) new message text:

a) AddMessage Component.

b) This is the only component that renders something based on this state, so
the `new message` piece of state can live inside of the AddMessage Component.

(3) users and username:

a) ListMessages, MessageText and ChatBox Components.

b) The parent of both ChatWindow Components is the DisplayChat Component, so the
`users` piece of state should live there.

So we ended up having
```
|- App
|-- DisplayChat (users(username), messages)
|--- ChatBox
|---- ListMessages
|----- MessageText
|---- AddMessage  (`new message`)

```
The ones that dont have a state to keep and requires data or callbacks functions to pass to them as props we can make then a stateless functional component which are chatbox, ListMessages and MessageText

#### Step 5. Add Inverse Data Flow.

State should be updated inside of the component where that state lives.
If we pass state down from component A to component B and then need to update
the state based on something that happened in component B, we can do so via
callbacks: Component A will not only pass state to Component B, but it will
also pass a callback function that will fire whenever the state should be updated.

Parent components can pass pieces of state as `props`, and they can also pass
callbacks as `props`. Callbacks are passed in order to allow child components
to pass data back to the parent. Remember that state cannot be modified outside
of the component where it is defined.

The DisplayChat Component stores the `messages` piece of state. Users can add new messages, however. And we want to be able to display those new messages. In order to do that, we will need to pass a callback from the App Component down to the AddMessage Component.

This is what our App Component looks like:

```js
<div className="container">
  {users.map(user => (
    <ChatBox
    key={user.username}
    messages={this.state.messages}
    senderUsername={user.username} 
    /*callback that will be passed down to ChatBox that finally passed it it AddMessage
    AddMessage will trigger this, and DisplayChat which is the parent ancestor can update he state that needs to be updated*/
    onHandleAddMessage={this.onHandleAddMessage}
    />
  ))}
</div>
```

How do we pass a callback from the App Component to the AddMessage Component if the AddMessage Component isn't inside of the App Component?

Trick question! The AddMessage Component _is_ inside of the App Component although we don't see it in the code above. The AddMessage Component is inside of the Cha component. That's why it is so important to plan out your application and draw your app hierarchy _before_ starting to code - you'll able to see which components are nested inside other components right away and be able to figure out which callbacks will be passed, which component(s) will be passing them, and which component(s) will be receiving them.

Here, we pass a callback from the DsiplayChat Component to the ChatBox Component, and the ChatBox Component will pass it to the AddMessage component. Things can get confusing when we're passing things through multiple layers, and it's helpful to use the React Chrome extension to see the state of `state` inside each component as well as use `console.log` statements in each component the callback passes through to make sure everything's executing as you'd intended.

