import { Route, Routes } from 'react-router-dom'
import './App.css'
import StartGame from './pages/StartGame'
import PlayGame from './pages/PlayGame'

function App() {

  return (
    <Routes>
      <Route path='/' element = {<StartGame />} />
      <Route path='/play' element = {<PlayGame />} />
      {/* <Route path='/' element = {<>Home</>} /> */}
    </Routes>
  )
  
}

export default App
