import React, { Component } from 'react'

class Great extends Component {
  render() {
    return (
      <div>
        <h1>Welcome To Class Components{this.props.name}with id{this.props.id}</h1>
      </div>
    )
  }
}

export default Great