# React Huc
React Huc is a container

## Install

```bash
$ npm install react-huc -S
```

## usage

```js
import Huc from 'react-huc'

<Huc initStore={{isShow: false}}>
  <Child1 />
  <Child2 />
</Huc>

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

<button onClick={()=> this.handleToggle()}></button>

<Huc initSrote={{isSHow: false}} ref="parent">
  <Child1 />
  <Child2 />
</Huc>
```
