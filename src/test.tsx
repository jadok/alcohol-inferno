import Inferno from 'inferno'

const texting = 'Hello world'

const MyComponent = ({ message }) => (
  <span>{message}</span>
)

Inferno.render(
  <MyComponent message={texting} />,
  document.getElementById('app')
)
