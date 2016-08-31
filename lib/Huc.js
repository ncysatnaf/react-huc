import React, {PropTypes} from 'react'

export default class Huc extends React.Component {

  static PropTypes = {
    initStore: PropTypes.object.isRequired,
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

  dispatch = (data) => {
    this.setState(data)
  }

  render() {
    const {children} = this.props
    const emitProps = Object.assign({}, this.state, {
      dispatch: this.dispatch
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
