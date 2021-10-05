const redux = require('redux')

const initialState = {
  counter: 0
}

//Reducer

const reducer = (state = initialState, action) => {
  if (action.type === 'Add') {
    return {
      counter: state.counter + 1
    }
  } 
  
  if (action.type === 'Sub') {
    return {
      counter: state.counter - 1
    }
  }

  if (action.type === 'Add_number') {
    return {
      counter: state.counter + action.value
    }
  }
  return state
}

//Store

const store = redux.createStore(reducer)

store.subscribe(() => {
  console.log('Subscribe', store.getState())
})

//Actions

const addCounter = {
  type: 'Add'
}

store.dispatch(addCounter)

store.dispatch({type: 'Sub'})

store.dispatch({type: 'Add_number', value: 10})