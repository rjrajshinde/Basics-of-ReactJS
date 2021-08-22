import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      error: true,
    };
  }

  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
  }

  render() {
    if (this.state.error) {
      return <h3>Something Went Wrong</h3>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
