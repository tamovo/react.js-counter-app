//import react and the component class of react module.
//using simple react snippets for shortcut
//typ the shortcut and press tab.
import React, { Component } from "react";

//extends from base component.
class Counter extends Component {
  //the state is displaying all the data that we need
  //
  //it only executed once when the counter is created
  state = {
    //value in counters (parent)
    value: this.props.counter.value
  };
  //to change css style.
  //reference it in  span styles
  styles = {
    fontSize: 50,
    fontWeight: "bold"
  };

  //to fix the handleIncrement() cannot access the current object.
  // constructor() {
  //  super();
  //function in javascript are object.
  //the bind method can set the value of this
  //the bind method will return a new instance of the handleIncrement function.
  //handleIncrement.bind(this) is always refer to the current object(Counter).
  //  this.handleIncrement = this.handleIncrement.bind(this);
  // }
  //or to fix cannot access current object
  //handleIncrement=()=>{}

  handleIncrement = product => {
    console.log(product);
    // this.props.value=0; is not allow, cannot change the props.
    this.setState({ value: this.state.value + 1 });
  };

  // doHandleIncrement = () => {
  //   this.handleIncrement({ id: 1 });
  // };

  render() {
    //props (properties) is a javascript object that includes all the attribute in counters,
    //which is value and selected in this case, not include key.
    //console.log("props", this.props);

    //another div is nescessary for putting both h1 and button to render.
    //If you don't want to have another div inside the div='root' use React.Fragment
    //for multi-cursor editing, click the word highlighted and press cmd+D for selected text.
    //this.state.count, this object of the state and the count value.

    //span tag can be used inside the p tag. it iis difference as the div but similiar funtion,
    //className should be used instead of class because it is an reserved keyword in javascript.

    return (
      <div>
        {/* present the attribute children which is h4 */}
        {/*<h4>{this.props.id}</h4>*/}
        {/* only update the span*/}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={product => this.handleIncrement(product)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  } //render ends

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    //to reference the value is this.state
    const { value } = this.state;

    //===	equal value and equal type
    //if count =0, the value = "Zero" else it has the count value.
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
