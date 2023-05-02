import { BrowserRouter as Router , Routes, Route, useLocation } from 'react-router-dom'

import { useEffect, useState, useTransition } from 'react'
import routes from '@/router'


// import { history } from "@/_helpers";

import '@/locale'
import './App.css'
import MainLayout from '@/components/MainLayout'
import AlertMessages from './components/Partials/AlertMessages'
import 'react-toastify/dist/ReactToastify.css'
import ModalAwaiting from './components/modal/ModalAwaiting'
import ProfileWallet from './components/Partials/ProfileWallet'

import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {

  useEffect(()=>{
    console.log("APP_VERSION: ",import.meta.env.VITE_APP_VERSION)
  },[])

  useEffect(() => {
    AOS.init({
      startEvent: 'DOMContentLoaded',
      debounceDelay: 100, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 200, // the delay on throttle used while scrolling the page (advanced)
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      once: true,
      mirror: true,
      anchorPlacement: 'top-bottom', 
  });
    
  }, []);
  
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
