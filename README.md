# React Huc
React Huc is a container

## Install

```bash
$ npm install react-huc -S
```

## usage

Base usage
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

<Huc initSrote={{isSHow: false}} ref="parent">
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
