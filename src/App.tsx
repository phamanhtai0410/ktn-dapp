import { BrowserRouter, Routes, Route } from 'react-router-dom'
import routes from '@/router'
import '@/locale'
import './App.css'
import MainLayout from '@/components/MainLayout'

const App = () => {
  return (
    <div className="App">
    
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainLayout />} >
                {routes.map((route) => (
                    <Route
                      key={route.path}
                      path={route.path}
                      element={<route.component />}
                    />
                  ))}
              </Route>
            </Routes>
        </BrowserRouter>
      
    </div>
  )
}

export default App
