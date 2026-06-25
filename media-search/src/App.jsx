import './App.css'
import Home from './pages/Home'
import Favorite from './pages/Favorites'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import { MediaProvider } from './contexts/MediaContext'

function App() {
  return (
    <MediaProvider>
      <main className="main-content">
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorite />} />
        </Routes>
      </main>
    </MediaProvider>
  )
}

export default App
