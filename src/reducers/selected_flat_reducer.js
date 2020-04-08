import { SELECT_FLATS } from '../actions';

const selectedFlatReducer = (state, action) => {
  if (state === undefined) {
    return null;
  }

  if (action.type === SELECT_FLATS) {
    return action.payload;
  } else {
    return state;
  }
  // USUAL WAY OF HANDLING ACTION
  // switch(action.type) {
  //   case 'SET_FLATS':
  //     return action.payload;
  //   default:
  //     return state;
  // }
}

export default selectedFlatReducer;
