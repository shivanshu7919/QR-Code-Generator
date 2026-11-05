import React, { useContext } from 'react'
import QRContext from '../../context/QRContext'

function QRPreview() {
  const {qrCode}=useContext(QRContext);

  return (
    <div>
      <div className='output-box'>
        {
          qrCode &&
          <img src={qrCode} alt="Generated QR Code" />
        }
      </div>
    </div>
  )
}

export default QRPreview