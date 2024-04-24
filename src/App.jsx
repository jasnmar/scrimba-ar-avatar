import { useState } from 'react'
import './App.css'
import Avatar from './components/Avatar/Avatar'


function App() {

  return (
    <>
      <Avatar src="./images/bob.jpg" alt="Bob Ziroll" />
      <br />
      <Avatar>BZ</Avatar>
      <br />
      <Avatar />
    </>
  )
}

export default App



