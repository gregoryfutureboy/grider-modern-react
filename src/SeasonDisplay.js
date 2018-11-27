
import React, { Component } from 'react'

class SeasonDisplay extends Component {
  
  getSeason() {
    const date = new Date();
    const month = date.getMonth();
    if(this.props.lat > 0){
      return month > 2 && date.getMonth < 9 ? 'summer' : 'winter';
    } else {
      return month > 2 && date.getMonth < 9 ? 'winter' : 'summer';
    }
  }

  render() {
    return (
      <div>
        {this.getSeason()}
      </div>
    )
  }
}

export default SeasonDisplay;