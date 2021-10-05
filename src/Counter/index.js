import React, {Component} from "react";
import Auxiliary from "../hoc/Auxiliary";
import Counter2 from "../Counter2/Counter2";
import { connect } from "react-redux";

class Counter extends Component {
  updateCounter(value) {
    // this.setState({
    //   counter: this.state.counter + 1
    // })
    this.setState({
      counter: this.state.counter + value
    })
  }

  render() {
    // return (
    //   <React.Fragment>
    //     <h2>Counter {this.state.counter}</h2>
    //     <button onClick={this.addCounter}>+</button>
    //     <button onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
    //   </React.Fragment>
    // )
    return (
      <Auxiliary>
        <h2>Counter {this.props.counter}</h2>
        <Counter2 clicked={this.props.clicked} />
        <button onClick={() => this.updateCounter(1)}>Добавить 1</button>
        <button onClick={() => this.updateCounter(-1)}>Вычесть 1</button>
      </Auxiliary>
    )
    // return [
    //     <h2 key={'1'}>Counter {this.state.counter}</h2>,
    //     <button key={'2'} onClick={this.addCounter}>+</button>,
    //     <button key={'3'} onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
    // ]
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

export default connect(mapStateToProps)(Counter)