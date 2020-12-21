### Instructions

This file gives you a functioning app. But, as you can tell, the App
isn't modular at all - there is only 1 component!

**Task**: Break down this app into components and make them work together to achieve
exactly the same result.

Remember that React components should be modular, composable (can be assembled in various
ways to achieve the desired result on the page), and reusable.

This exercise will help you to practice passing data into components, creating
Stateless Functional Components, adding state to components, updating state, and
creating Controlled Components.



This was the starter code
```js
class App extends React.Component {
  state = {
    value: '',
    items: [],
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  addItem = event => {
    event.preventDefault();
    this.setState(oldState => ({
      items: [...oldState.items, this.state.value],
    }));
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  inputIsEmpty = () => {
    return this.state.value === '';
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
        <form onSubmit={this.addItem}>
          <input
            type="text"
            placeholder="Enter New Item"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button disabled={this.inputIsEmpty()}>Add</button>
        </form>

        <button onClick={this.deleteLastItem} disabled={this.noItemsFound()}>
          Delete Last Item
        </button>

        <p className="items">Items</p>
        <ol className="item-list">
          {this.state.items.map((item, index) => <li key={index}>{item}</li>)}
        </ol>
      </div>
    );
  }
}
```

To determine what should be components we have to consider that
Components are reusable chunks that can be nested inside of each other, like
Russian nesting dolls. Oftentimes, the number of components an app should have is subjective, but it is ALWAYS the case each component NEEDS to follow the Single Responsibility Principle - that is, do only 1 thing.

I put the form into a component called ShoppingCart which is the block of code below. It ONLY does the work of user adding itens to the cart. In our app, this component can be reusable, be we did not. This is subjective to us. We did not kake this component a stateless functional component, because Reach had to manage the state of the form. This is Controlled Component
```js
<form onSubmit={this.addItem}>
    <input
    type="text"
    placeholder="Enter New Item"
    value={this.state.value}
    onChange={this.handleChange}
    />
    <button disabled={this.inputIsEmpty()}>Add</button>
</form>
```

The code below is the code for ListShoppingItems component. We used this component only once also we can reuse it because it is a component. Howvever, this component will be a stateless functional component because all it does is render to the UI and not keep track of a state
```js
<ol className="item-list">
    {this.state.items.map((item, index) => <li key={index}>{item}</li>)}
</ol>
```

The code below is the code for ShoppingItem component. This component is called by ListShoppingItem in a loop, so it is reused. Howvever, this component will be a stateless functional component because all it does is render to the UI and not keep track of a state
```js
<li key={index}>{item}</li>
```


We could make the button below a component too but we did not
```js
<button onClick={this.deleteLastItem} disabled={this.noItemsFound()}>
    Delete Last Item
</button>
```