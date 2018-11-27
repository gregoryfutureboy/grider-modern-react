import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends Component {
    state = {
      lat: null,
      long: null,
      errorMessage: null
    }


  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: 'Error retrieving your location' })
    )
  }

  renderContent() {
    if (!this.state.lat && this.state.errorMessage) {
      return (
        <div>Error: {this.state.errorMessage}</div>
      )
    } else if (this.state.lat && !this.state.errorMessage) {
      return (
        <SeasonDisplay lat={this.state.lat} />
      )
    } else {
      return (
        <div>Loading...</div>
      )
    }
  }

  render(){
    return(
      <div>
        {this.renderContent()}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));