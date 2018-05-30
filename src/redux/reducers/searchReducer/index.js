import Types from '../../Types';
const initialState = '';

export default (state = initialState, action) =>  {
  switch (action.type) {
    case Types.UPDATE_SEARCH: {
        return action.txt;
    }
      break;
    default: return state
  }
}
