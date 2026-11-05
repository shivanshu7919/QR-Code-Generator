import React,{useContext} from 'react'
import QRContext from '../../context/QRContext'

function QRSettings() {
  const {setBgColor,size,setSize}=useContext(QRContext);

  return (
    <div className='size-bgColor'>
      <h5>Background Color:</h5>
      <input
        type="color"
        onChange={(e) => setBgColor(e.target.value.substring(1))}
      />
      <input
        type="range"
        min={200}
        max={400}
        value={size}
        onChange={(e) => { setSize(Number(e.target.value)) }}
      />
      <label>Dimension:{size}</label>
    </div>
  )
}

export default QRSettings