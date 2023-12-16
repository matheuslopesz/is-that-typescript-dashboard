import './App.css'
import Header from './components/Header'
import Sidenav from './components/SideNav'
import OverView from './pages/OverView'
import { DataContextProvider } from './contexts/DataContext'

function App() {
  return (
    <>
      <DataContextProvider>
        <Sidenav />
        <main>
          <Header />
          <OverView />
        </main>
      </DataContextProvider>
    </>
  )
}

export default App
