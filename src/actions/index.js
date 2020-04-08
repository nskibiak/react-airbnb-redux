// import flats from '../data/flats';

// export function setFlats() {
//   const promise = fetch('https://raw.githubusercontent.com/lewagon/flatsboilerplate/master/flats.json')
//     .then(response => response.json());

//   return {
//     type: 'SET_FLATS',
//     payload: flats
//   };
// }

export const SET_FLATS = 'SET_FLATS';
export const SELECT_FLATS = 'SELECT_FLATS';

export function setFlats() {
  const promise = fetch('https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json')
    .then(response => response.json());

  return {
    type: SET_FLATS,
    payload: promise
  };
}

export function selectFlat(flat) {
  return {
    type: SELECT_FLATS,
    payload: flat
  }
}
