import flats from '../data/flats';

export function setFlats() {
  // TODO: Api call! for now, simulate a DB

  return {
    type: 'SET_FLATS',
    payload: flats
  }
}

export function selectFlat(flat) {
  // TODO: Api call! for now, simulate a DB

  return {
    type: 'SELECT_FLAT',
    payload: flat
  }
}
