import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
/* this is the css part of react bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';

import {RouterProvider} from 'react-router-dom'
import router from './routes/Routes.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}></RouterProvider>
  </React.StrictMode>,
)
