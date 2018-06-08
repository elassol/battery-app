// Best practice dictates specifying constants
// for the different types of actions in an application
export const SEARCH_BATTERY = 'SEARCH_BATTERY';

// This is an action creator
export const searchBattery = (query) => {
  // The returned object is an action
  return {
    // 'type' is a required field for an action, 
    // specifying the type of action being performed
    type: SEARCH_BATTERY,
    query
  }
}