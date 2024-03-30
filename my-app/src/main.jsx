import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserDataProvider from './Context/user.jsx'
import { Provider } from 'react-redux'
import {store} from "./app/store.jsx"
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
     <UserDataProvider>
     <App />
  </UserDataProvider>
  </Provider>
  
)
 