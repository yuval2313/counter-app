import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.counter.value !== this.props.counter.value) {
      //AJAX call and get data from the server
    }
  }

  componentWillUnmount() {
    console.log(`Counter #${this.props.counter.id} - Unmounted`);
  }

  render() {
    console.log("Counter - Rendered");
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            + {/* INCREMENT */}
          </button>
          <button
            className="btn btn-secondary btn-sm m-2"
            onClick={() => this.props.onDecrement(this.props.counter)}
            disabled={this.disableDecrementButton()}
          >
            - {/* DECREMENT */}
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm"
          >
            X {/* DELETE */}
          </button>
        </div>
      </div>
    );
  }

  disableDecrementButton() {
    const { value } = this.props.counter;
    return value === 0 ? true : false;
  }

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes +=
      this.props.counter.value === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
