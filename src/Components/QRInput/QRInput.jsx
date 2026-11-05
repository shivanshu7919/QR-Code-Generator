import React,{useContext} from 'react'
import qrContext from '../../context/qrContext';

function QRInput() {
  const {setTemp}=useContext(qrContext);

  return (
    <div>
      <input
        type="text"
        placeholder='Enter the url'
        onChange={(e) => setTemp(e.target.value)}
      />
    </div>
  )
}

export default QRInput