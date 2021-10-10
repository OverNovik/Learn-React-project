import { ADD2 } from "../actions/actionTypes"

const initialState = {
  counter3: 300
}

export default function counter3(state = initialState, action) {

  switch(action.type) {
    case ADD2:
      return {
        counter3: state.counter3 + action.payload
      }
    default:
      return state
  }
}