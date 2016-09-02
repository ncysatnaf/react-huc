import React, { Component, PropTypes, Children } from 'react'

export default class Provider extends Component {

  constructor(props, context) {
    super(props, context)
    this.ContextType = {}
    this.Context = {}
  }

  getChildContext = () => {
    Provider.childContextTypes = this.ContextType
    return this.Context
  }

  componentWillMount = () => {
    const {context, children}  = this.props
    Object.keys(context).map(o=> {
      if(typeof context[o] === 'object'){
        this.Context[o] = context[o]
        this.ContextType[o] = PropTypes.object
      }
    })
  }

  render() {
    const { children } = this.props
    return (
      <div>
        {children}
      </div>
    )
  }
}
