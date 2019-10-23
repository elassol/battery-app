function selectBattery(battery) {
    return {
      type: 'BATTERY_SELECTED',
      payload: battery
    }
  }
  export default selectBattery;