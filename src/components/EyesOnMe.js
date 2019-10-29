import React, { Component } from 'react'

export default class EyesOnMe extends Component {
  blurHandle = () => {
    console.log('Hey! Eyes on me!')
  }

  focusHandle = () => {
    console.log('Good!')
  }

  render() {
    return (
      <button
        onBlur={this.blurHandle}
        onFocus={this.focusHandle}
      >Yoooo</button >
    )
  }
}
