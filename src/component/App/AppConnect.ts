import { connect } from 'inferno-redux'

import App from './App'

const mapStateToProps = (state: any) => ({
  alcohol: state.alcohol,
})

export default connect(mapStateToProps)(App)
