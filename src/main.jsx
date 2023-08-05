import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import {store, persistor} from './redux/store/index.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store} persistor={persistor}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Provider>
)
