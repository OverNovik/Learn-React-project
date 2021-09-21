import React from 'react'
import classes from './Car.css'
import withClass from '../../hoc/withClass'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'

class Car extends React.Component {

  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }

  componentDidMount() {
    if (this.props.index === 1) {
      this.inputRef.current.focus()
    }
  }

  render() {
    const inputClasses = [classes.input]

  if (this.props.name !== '') {
    inputClasses.push(classes.green)
  } else {
    inputClasses.push(classes.red)
  }

  if (this.props.name.length > 4) {
    inputClasses.push(classes.bold)
  }

  return (
    <div onClick={() => this.props.history.push('/cars/' + this.props.name.toLowerCase())}>
      <h3>Сar name: {this.props.name}</h3>
      <p>Year: <strong>{this.props.year}</strong></p>
      <input
        ref={this.inputRef}
        type="text"
        onChange={this.props.onChangeName}
        value={this.props.name}
        className={inputClasses.join(' ')}
      />
      <button onClick={this.props.onDelete}>Delete</button>
    </div>
  )
  }
}

Car.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number,
  index: PropTypes.number,
  onChangeName: PropTypes.func,
  onDelete: PropTypes.func
}

export default withRouter(withClass(Car, classes.Car));
