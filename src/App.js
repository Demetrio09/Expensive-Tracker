import React, { Component } from "react";

class MyComponent extends Component {
  constructor() {
    super();

    this.state = {
      name: "Demetrio",
      count: 0,
    };
  }

  clickEvent() {
    alert(this.state.name);
  }

  handleCount() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  componentDidMount() {
    console.log(`—componentDidMount—-`);
  }

  componentDidUpdate() {
    console.log(`—-component did update—-`);
  }

  componentWillUnmount() {
    console.log(`—-component will unmount—-`);
  }

  render() {
    console.log(`-- render method --`);
    return (
      <div>
        <Header>{this.state.name}</Header>
        <button onClick={() => this.clickEvent()}>Click me!</button>
        <button onClick={() => this.handleCount()}>
          Click me to see the magic!
        </button>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
}

function Header(props) {
  return <header>This is my name: {props.children}</header>;
}

export default MyComponent;
