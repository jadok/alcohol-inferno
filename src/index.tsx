import { render } from 'inferno'
import 'inferno-devtools'
import { Provider } from 'inferno-redux'

import store from 'store/index'

import 'inferno-devtools'

// import Layout from './templates/layout'
import App from 'component/App/AppConnect'

const container = document.getElementById('app')

const views = (
  <Provider store={store} >
    <App />
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
