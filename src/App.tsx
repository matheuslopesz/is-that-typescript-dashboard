import './App.css'
import Header from './components/Header'
import Sidenav from './components/SideNav'
import OverView from './pages/OverView'
import { DataContextProvider } from './contexts/DataContext'
import Sales from './pages/Sales'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Sale } from './pages/Sale'

function App() {
  return (
    <>
      <BrowserRouter>
        <DataContextProvider>
          <div className='container'>
            <Sidenav />
            <main>
              <Header />
              <Routes>
                <Route path='/'  element={ <OverView/> } />
                <Route path='/'  element={ <Sales/> } />
              </Routes>
            </main>
          </div>
        </DataContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
