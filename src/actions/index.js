import flats from '../data/flats';

export function setFlats() {
  // TODO: Api call! for now, simulate a DB
  return fetch('https://raw.githubusercontent.com/lewagon/flatsboilerplate/master/flats.json')
    .then(response => response.json())
    .then((data) => {
      return {
        type: 'SET_FLATS',
        payload: data
      };
    });
}

export function selectFlat(flat) {
  return {
    type: 'SELECT_FLAT',
    payload: flat
  }
}
