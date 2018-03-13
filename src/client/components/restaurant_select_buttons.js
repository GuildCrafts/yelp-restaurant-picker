import React, { Component } from 'react'

export default class RestaurantSelectButtons extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onRestaurantAccept}>Accept!</button>
        <button onClick={this.props.onRestaurantReject}>Reject!</button>
      </div>
    )
  }
}
