/* tslint:disable */
import { /* applyMiddleware, */ compose, createStore } from 'redux'
import DevTools from 'middleware/devtools'

import reducer from 'reducer/index'

let enhancer:any = null
let store:any = null

if (process.env.NODE_ENV === 'production') {
  enhancer = compose()
  store = createStore(reducer, enhancer)
}
else {
  enhancer = compose(
    DevTools
  )
  store = createStore(reducer, enhancer)
}


export default store