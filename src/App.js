import React, { useEffect, useState } from 'react';
import './App.css';
import { Nav, SplashScreen } from './Components'
import { Home, Search, Login, CreatePost } from './features'
import { Routes, Route } from 'react-router-dom'
import { Protected } from './Protected'
import { getToken } from './utils'

function App() {
  const [splashScreenToggle, setSplashScreenToggle] = useState(true)
  const [splashScreenDisplay, setSplashScreenDisplay] = useState(true)
  const loginStatus = getToken()

  // Splash screen display
  useEffect(() => {
    setTimeout(() => {
      setSplashScreenToggle(false)
      setTimeout(() => {
        setSplashScreenDisplay(false)
      }, 500)
    }, 2500)
  }, [])
  return (
    <div className="App">
      {!splashScreenDisplay && loginStatus?.isloggedIn && <Nav />}
      {splashScreenDisplay && <SplashScreen toggle={splashScreenToggle} />}
      {!splashScreenDisplay && <Routes>
        <Protected path="/" element={<Home />} />
        <Protected path="/search" element={<Search />} />
        <Protected path="/profile" />
        <Protected path="/create-post" element={<CreatePost />} />
        <Route path="/login" element={<Login />} />
      </Routes>}
    </div>
  );
}

export default App;
