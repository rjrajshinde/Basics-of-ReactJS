import React from "react";

//Here we are reusing the code rather than duplicating the code we just take another component as a argument to this component with the help of this we can use same code for many components

//like here we are using the count state and incrementCount method for ClickCounter and HoverCounter

//how many component we are using in this higher Component gets a separate states so change in state of one counter didn't affect to another counter

//we can use any name for the component but if possible you can give the file name
const withCounter = (WrappedComponent, incrementNumber) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((prevState) => ({
        count: prevState.count + incrementNumber,
      }));
    };

    render() {
      return (
        //   here we pass the state and function as props to this component that we pass as an argument
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          //if you want to pass the props to the wrapped Component you have to use the spread operator
          //because when you pass the props to the component in the app.js file it goes to the Higher order component in this case it goes to the wrapped component not to the ClickCounter or HoverCounter
          //so that's why with the help of spread operator we are passing all the props to the wrapped component
          {...this.props}
        />
      );
    }
  }
  return NewComponent;
};

export default withCounter;
