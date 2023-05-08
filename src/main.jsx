import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
/* this is the css part of react bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';

import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx';
import AuthProvider from './provides/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
