import { useState } from 'react'
import './App.css'
import QrCodeGenerator from './QrCodeGenerator'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>QR code generator</h2>
      <QrCodeGenerator />
    </>
  )
}

export default App
