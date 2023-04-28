import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'

import { useEffect } from 'react'
import routes from '@/router'

import { history } from "@/_helpers";

import '@/locale'
import './App.css'
import MainLayout from '@/components/MainLayout'
import AlertMessages from './components/Partials/AlertMessages'
import 'react-toastify/dist/ReactToastify.css'
import ModalAwaiting from './components/modal/ModalAwaiting'
import ProfileWallet from './components/Partials/ProfileWallet'


const App = () => {

  useEffect(()=>{
    console.log("APP_VERSION: ",import.meta.env.VITE_APP_VERSION)
  },[])
  
  return (
    <div className="App">
      <Router >
        <Routes   >
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
        <ProfileWallet />
        <AlertMessages />
        <ModalAwaiting />

      </Router>
    </div>
  )
}

export default App
