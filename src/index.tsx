import { render } from 'inferno'
import 'inferno-devtools'

// import Layout from './templates/layout'

const container = document.getElementById('app')

const views = (
  <h1>toto</h1>
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
