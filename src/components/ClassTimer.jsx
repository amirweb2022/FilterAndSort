import React, { Component } from "react";
class ClassTimer extends Component {
  state = {
    count: 0,
  };
  componentDidMount() {
    this.myTimer = setInterval(() => {
      console.log("hi amir");
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    console.log("CWM");
    clearInterval(this.myTimer);
  }
  render() {
    return <div>Class interVal</div>;
  }
}

export default ClassTimer;