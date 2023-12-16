import './App.css'
import Header from './components/Header'
import Sidenav from './components/SideNav'
import OverView from './pages/OverView'
import { DataContextProvider } from './contexts/DataContext'

function App() {
  return (
    <>
      <DataContextProvider>
        <div className='container'>
          <Sidenav />
          <main>
            <Header />
            <OverView />
          </main>
        </div>
      </DataContextProvider>
    </>
  )
}

export default App
