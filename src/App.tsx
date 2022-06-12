import { Provider } from 'react-redux'

import { store } from '../shared/redux/store'
import Home from './views/home'

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  )
}
