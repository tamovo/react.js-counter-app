import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleReset = () => {
    //use the map to reset each counter value to 0 and return it
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: counters });
  };
  //each counter has its own state.
  //parameter for which we should delete.
  handleDelete = counterId => {
    //the filter method to get all the counter exclude the one with the given id
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
    //if the key and value are the same,
    //you can do this.setState({counters});
  };

  render() {
    //key is used internally by react, we cannot access it
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>

        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            counter={counter}
            j
          />
        ))}
      </div>
    );
  }
}

export default Counters;
