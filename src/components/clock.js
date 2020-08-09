import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.getTime();
    }, 1000);
  }

  getTime() {
    this.setState({
      date: new Date(),
    });
  }

  getURL() {
    return `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/${this.props.method}`;
  }

  render() {
    return (
      <div>
        <h3>
          <span>{this.state.date[this.props.method]()}</span> as of{" "}
          <a href={this.getURL()} target="_blank">
            {this.props.method}()
          </a>
          method
        </h3>
      </div>
    );
  }
}

export default Clock;
