const selectedFlatReducer = (state, action) => {
  if (state === undefined) {
    return null;
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
