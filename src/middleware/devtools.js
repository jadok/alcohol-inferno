// createDevTools takes a monitor and produces a DevTools component
/* eslint-disable */
const DevTools = process.env.NODE_ENV !== 'production' && (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
/* eslint-enable */

export default DevTools
