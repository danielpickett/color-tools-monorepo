import React from 'react'
import './App.css'
import { contrast } from '@danielpickett/color-utils'

function App() {
  return (
    <div className="App">
      <p>{contrast([120, 200, 0], [120, 255, 0])}</p>
    </div>
  )
}

export default App
