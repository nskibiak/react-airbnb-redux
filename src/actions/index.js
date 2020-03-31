import flats from '../flats';

export function setFlats() {
  // TODO: Api call! for now, simulate a DB

  return {
    type: 'SET_FLATS',
    payload: flats
  }
}
