import { useState } from 'react'
import './App.css'
import Web from './Web' 
import Git from './Git'
import OOP from './OOP'
import OS from './OS'
import Strawberry from './Strawberry'
import Blockchain from './Blockchain'
import SEM from './SEM'


function App() {

  return (
    <>
      <h2 style={{color : "yellow"}}>My remaining FMI journey</h2>
      <OOP/>
      <OS/>
      <SEM/>
      <Web/>
      <Git/>
      <Blockchain/>
      <Strawberry/>

    </>
  )
}

export default App
