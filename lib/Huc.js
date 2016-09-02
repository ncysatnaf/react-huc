import React, {PropTypes} from 'react'

export default class Huc extends React.Component {

  static PropTypes = {
    initStore: PropTypes.object.isRequired,
    withReducer: PropTypes.func
  }

  constructor(props) {
    super(props)
  }

  componentWillMount(){
    this.initStore()
  }

  initStore = (key) => {
    const {initStore} = this.props
    this.state = initStore
  }

  dispatch = (action) => {
    this.setState(this.handleAction(action))
  }

  handleAction = (action) => {
    const {withReducer} = this.props
    if(typeof withReducer !== 'function'){
      throw new Error(`withReduce must be a function , can not be a ${typeof withReduce}`)
    }

    return withReducer(this.state, action)
  }

  render() {
    const {children} = this.props
    const emitProps = Object.assign({}, this.state, {
      dispatch: this.dispatch,
      parent: this
    })

    return (
      <div>
        {React.Children.map(children, child => {
          return React.cloneElement(child, emitProps)
        })}
      </div>
    )
  }
}
