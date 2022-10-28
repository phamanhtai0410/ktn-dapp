import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import routes from '@/router'

import '@/locale'
import './App.css'
import MainLayout from '@/components/MainLayout'
import AlertMessages from './components/Partials/AlertMessages'
import 'react-toastify/dist/ReactToastify.css'


const App = () => {

  useEffect(()=>{
    console.log("APP_VERSION: ",import.meta.env.VITE_APP_VERSION)
  },[])
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Route>
        </Routes>
        <AlertMessages />
      </BrowserRouter>
    </div>
  )
}

export default App
