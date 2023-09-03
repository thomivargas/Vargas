import React from 'react'
import ReactDOM from 'react-dom/client'
import PersonajesProvider from './context/PersonajesContext'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Episodios from './pages/Episodios'
import './index.css'

const router = createBrowserRouter ([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/login',
    element: <Login/>,
  },
  {
    path: '/episodios',
    element: <Episodios/>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersonajesProvider>
      <RouterProvider router={router}/>
    </PersonajesProvider>
  </React.StrictMode>,
)
