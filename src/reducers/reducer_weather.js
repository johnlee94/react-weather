import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_WEATHER:
    // do NOT manipualte the existing state, return a new state!
    // BAD: state.push(action.payload.data)
    return [ action.payload.data, ...state];
  }
  return state;
}
