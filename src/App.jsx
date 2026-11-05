import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [temp,setTemp]=useState("");
  const [word,setWord]=useState("");
  const [size,setSize]=useState(250);
  const [bgColor,setBgColor]=useState("ffffff");
  const [qrCode,setQrCode]=useState("");

  

  useEffect(()=>{
    if(word){
      console.log(size);
      setQrCode(
        `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(word)}&size=${size}x${size}&bgcolor=${bgColor}`
      );
    }
  },[word,size,bgColor]);

  const handleClick=()=>{
    setWord(temp);
  }

  const generateQR= async()=>{
    const response=await fetch(qrCode);
    const blob=await response.blob()
    
    const url=URL.createObjectURL(blob);

    const link=document.createElement("a");

    link.href=url;
    link.download='qr-code.png';

    link.click();

    URL.revokeObjectURL(url);
  }

  return (
    <>
      <div className='QR'>
        <h1 className='flex justify-center'>QR Code Generator</h1>
        <div className='input-box'>
          <input 
            type="text" 
            placeholder='Enter the url'
            onChange={(e)=> setTemp(e.target.value)}
            
          />
          <button className='border-2 bg-orange-600'
            onClick={handleClick}
          >
            Generate
          </button>
        </div>

        <div className='size-bgColor'>
          <h5>Background Color:</h5>
          <input 
            type="color" 
            onChange={(e)=>setBgColor(e.target.value.substring(1))}
          />
          <input 
            type="range" 
            min={200}
            max={400}
            value={size}
            onChange={(e)=>{setSize(Number(e.target.value))}}
          />
          <label>Dimension:{size}</label>
        </div>

        <div className='output-box'>
          {
            qrCode &&
            <img src={qrCode} alt="Generated QR Code" />
          }
        </div>

        <div>
          <button 
            className='border-2 bg-amber-100'
            onClick={generateQR}
          >
            Download QR Code
          </button>
        </div>
      </div>
    </>
  )
}

export default App
