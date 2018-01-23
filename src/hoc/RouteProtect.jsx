import React, { Component } from 'react'

const RouteProtect = ChildComponent => {
  class RouteProtect extends Component {
    componentWillMount() {
      const username = this.props.state.get('username')
      !username && this.props.history.push('/')
    }
    render() {
      return <ChildComponent {...this.props} />
    }
  }
  return RouteProtect
}

export default RouteProtect
