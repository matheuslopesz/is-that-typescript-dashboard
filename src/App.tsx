import Header from './components/Header'
import Sidenav from './components/SideNav'
import OverView from './pages/OverView'
import  Sale  from './pages/Sale'
import Sales from './pages/Sales'

import { DataContextProvider } from './contexts/DataContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

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
                <Route path='/vendas'  element={ <Sales/> } />
                <Route path='/venda/:id'  element={ <Sale/> } />
              </Routes>
            </main>
          </div>
        </DataContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
