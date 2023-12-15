import './App.css'
import Header from './components/Header'
import Sidenav from './components/SideNav'
import OverView from './pages/OverView'

function App() {
  return (
    <>
      <Sidenav />
      <main>
        <Header />
        <OverView />
      </main>
    </>
  )
}

export default App
