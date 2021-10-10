import React, {Component} from "react";
import Auxiliary from "../hoc/Auxiliary";
import Counter2 from "../Counter2/Counter2";
import { connect } from "react-redux";
import Counter3 from "../Counter3/Counter3";
import { add, addAsync, addNumber, sub } from "../redux/actions/actions";

class Counter extends Component {
  // updateCounter(value) {
  //   // this.setState({
  //   //   counter: this.state.counter + 1
  //   // })
  //   // this.setState({
  //   //   counter: this.state.counter + value
  //   // })
  // }

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
        <button onClick={this.props.onAdd}>Добавить 1</button>
        <button onClick={this.props.onSub}>Вычесть 1</button>
        <button onClick={() => this.props.onAddNumber(15)}>Добавить 15</button>
        <button onClick={() => this.props.onAddNumber(-17)}>Вычесть 17</button>
        <button onClick={() => this.props.onAsyncAdd(100)}>Асинхронно добавить 100</button>
        <Counter3 />
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
    counter: state.counter1.counter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => dispatch(add()),
    onSub: () => dispatch(sub()),
    onAddNumber: number => dispatch(addNumber(number)),
    onAsyncAdd: number => dispatch(addAsync(number))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)