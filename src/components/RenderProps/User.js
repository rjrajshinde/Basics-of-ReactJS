import React, { Component } from "react";

class User extends Component {
  render() {
    //here we simply pass the props like name='kingJoker'
    // return <div>{this.props.name}</div>;

    //here we pass the props with the function like name= {() => 'kingjoker'}
    return (
      <div>
        {this.props.name(true)}
        <br />
        {this.props.name(false)}
      </div>
    );
  }
}

export default User;
