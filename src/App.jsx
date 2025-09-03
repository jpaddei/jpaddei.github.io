import './index.css'
import { Background } from './components/Background'
import { Home } from './components/sections/Home'
import { Navbar } from './components/Navbar'

function App() {
  return (
    <div>
      <div className='relative min-h-screen'>
        <Background />
        <div className='relative z-10'>
          <Navbar />
          <Home />
        </div>
      </div>
      
    </div>
  )
}

export default App
