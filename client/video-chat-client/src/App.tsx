import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom';
import LobbyScreen from './screens/Lobby';
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LobbyScreen />}></Route>
      </Routes>
    </>
  )
}

export default App
