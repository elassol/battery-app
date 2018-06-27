import Types from '../../Types';
import {SEARCH_BATTERY} from '../../actions';
const initialState = [];



export default (state = initialState, action) =>  {
  switch (action.type) {
    // case Types.UPDATE_SEARCH:
      // return filterResults(action.txt);
    case Types.SEARCH_BATTERY: {
      const{query} = action
      console.log("search reducer ======")
      return [];
    }

    default: return state
  }
}


