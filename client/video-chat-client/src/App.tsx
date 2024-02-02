import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom';
import LobbyScreen from './screens/Lobby';
import './App.css'
import RoomPage from './screens/Room';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LobbyScreen />} />
        <Route path='/room/:roomId' element={<RoomPage />}/>
      </Routes>
    </>
  )
}

export default App
