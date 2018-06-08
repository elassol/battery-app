import Types from '../../Types';
const initialState = [];



export default (state = initialState, action) =>  {
  switch (action.type) {
    // case Types.UPDATE_SEARCH:
      // return filterResults(action.txt);
    case Types.SEARCH_BATTERY:
      return [];
    default: return state
  }
}
