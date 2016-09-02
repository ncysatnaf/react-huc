# React Huc
React Huc is a container

## Install

```bash
$ npm install react-huc -S
```

## usage

### Huc
```js
import Huc from 'react-huc'

<Huc initStore={{isShow: false}}>
  <Child1 />
  <Child2 />
</Huc>

//Change huc state from child
//Child1
render() {
  const {isShow} = this.props
  return (
    <div>{isShow}</div>
  )
}
//Chil2
render(){
  const {isShow, dispatch} = this.props
  return (
    <div>
    <button onClick={()=> dispatch({isShow: !isShow})}>toggle</button>
    </div>
  )
}
```

```js
import Huc from 'react-huc'

handleToggle = () => {
  const parent = this.refs.parent
  parent.dispatch({isShow: !parent.state.isShow})
}
//change state from other component
<button onClick={()=> this.handleToggle()}></button>

<Huc initStore={{isSHow: false}} ref="parent">
  <Child1 />
  <Child2 />
</Huc>
```

Use reducer similar as redux

```js
import Huc from 'react-huc'

const withReducer = (state, action) => {
  switch(action.type) {
    case 'TOGGLE_MODAL':
      return Object.assign({},state,{isShow: !state.isShow})
    default:
      return state
  }
}

<Huc initStore={{isShow: false}} witReducer={withReducer}>
  <Child1 />
</Huc>

//Change huc state from child
//Child1
render() {
  const {isShow, dispatch} = this.props
  return (
    <div onClick={()=> dispatch({type: 'TOGGLE_MODAL'})}>{isShow}</div>
  )
}
```

```js
import Huc from 'react-huc'

const withReducer = (state, action) => {
  switch(action.type) {
    case 'TOGGLE_MODAL':
      return Object.assign({},state,{isShow: !state.isShow})
    default:
      return state
  }
}

handleToggle = () => {
  const parent = this.refs.parent
  parent.dispatch({type: 'TOGGLE_MODAL'})
}
//change state from other component
<button onClick={()=> this.handleToggle()}></button>

<Huc initStore={{isSHow: false}} withReducer={withReducer} ref="parent">
  <Child1 />
</Huc>
```

### Provider
```js
//app.js
improt React, {Component, PropTypes} from 'react'

setStateWithRef = (ref, data) => {
  this.refs[ref].setState(data)
}

<Provider context={{app: this}}>
<Child />
<Count ref="count" initState={{count: 0}}/>
</Provider>

//children component
class Child extends Component {
  static contextTypes = {
    app: PropTypes.object.isRequired
  }
  constructor(props){
    super(props)
  }
  handleAdd = () => {
    const {app, app:{refs:{navigation}}} = this.context
    app.setStateWithRef('navigation', {count: count.state.count + 1})
  }

  render(){
    return (
      <div onClick={()=> this.handleAdd()}> + </div>
    )
  }
}

class Count extends Component {
  constructor(props){
    super(props)
  }
  componentWillMount = () => {
    if(this.props.initState){
      this.state = initState
    }
  }

  render(){
    return (
      <div>{this.props.count}</div>
    )
  }
}

```
