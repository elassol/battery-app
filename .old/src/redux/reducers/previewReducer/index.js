
export default function(state = null, action) {
    switch (action.type) {
      case 'BATTERY_SELECTED':
        return action.payload
    } 
    // i dont care about the action because it is not inside my
    // list of actions I am interested int (case statements inside the switch)
    return state
  }