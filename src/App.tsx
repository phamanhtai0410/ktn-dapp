import { BrowserRouter, Routes, Route } from 'react-router-dom'
import routes from '@/router'
import '@/locale'
import './App.css'
import MainLayout from '@/components/MainLayout'

const App = () => {
  return (
    <div className="App">
    
        <BrowserRouter>
          <MainLayout>
            <Routes>
              {routes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<route.component />}
                />
              ))}
            </Routes>
            </MainLayout>
        </BrowserRouter>
      
    </div>
  )
}

export default App
