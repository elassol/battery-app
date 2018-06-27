import data from '../../../data/data.json';
import Types from '../../Types';

const filterResults = (term) => {
  console.log("this is the reducer")
  return {
    filteredItems: data.name ((battery) => battery.name === term)
  };

};

export default function (state = data.batteries, action) {
  switch (action.type) {
    case Types.UPDATE_SEARCH:
      return filterResults(action.txt);
    default: return state
  }
}


