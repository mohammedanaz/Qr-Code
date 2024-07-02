import React, { useState } from 'react'
import QRCode from 'react-qr-code'

export default function QrCodeGenerator() {
    const [url, setUrl] = useState('')
    const [isVisible, setIsVisible] = useState(false)
    const [size,setSize] = useState(256)

    function handleKeyPress(e){
        if(e.key === 'Enter'){
            handleOnClick();
        }
    }
    
    function handleChange(e){
        setIsVisible(false)
        setUrl(e.target.value)
    }

    function handleSize(e){
        setIsVisible(false)
        setSize((e.target.value>50 && e.target.value<500)? e.target.value : 256)
    }

    function handleOnClick(){
        if(!url){
            return
        }
        setIsVisible(true)
    }
  return (
    <div>
        <input 
        type="text"
        placeholder='Enter URL'
        onKeyDown={handleKeyPress}
        onChange={handleChange} />
        <br />
        <input type="number"  placeholder='Qr code size' 
        onChange={handleSize}
        onKeyDown={handleKeyPress} 
        />
        <br /><br />
        <button onClick={handleOnClick}>
            Generate QR code
        </button>
        <br /><br />
        <div>
            {isVisible && <QRCode value={url} size={size} />}
        </div>
        
    </div>
  )
}
