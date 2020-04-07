// import flats from '../data/flats';

export function setFlats() {
  // TODO: Api call! for now, simulate a DB
  const promise = fetch('https://raw.githubusercontent.com/lewagon/flatsboilerplate/master/flats.json')
    .then(response => response.json());

  return {
    type: 'SET_FLATS',
    payload: promise
  };
}

export function selectFlat(flat) {
  return {
    type: 'SELECT_FLAT',
    payload: flat
  }
}
