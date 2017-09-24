import { render } from 'inferno'
import 'inferno-devtools'
import { Provider } from 'inferno-redux'
import { createStore } from 'redux'

// import Layout from './templates/layout'
import Person from './component/Person/Person.ts'

import reducer from './reducer/index'

const container = document.getElementById('app')

const store = createStore(reducer)

const views = (
  <Provider store={store} >
    <Person />
  </Provider>
)

render(
  views,
  container
)

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service.worker.js', { scope: '/' }).then((reg) => {
    // registration worked
    console.log(`Registration succeeded. Scope is ${reg.scope}`)
  }).catch((error) => {
    // registration failed
    console.log(`Registration failed with ${error}`)
  });
}
