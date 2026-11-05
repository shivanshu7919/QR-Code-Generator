import React, { useContext } from 'react'
import QRContext from '../../context/QRContext'

function DownloadBtn() {
  const {qrCode}=useContext(QRContext);

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
    <div>
      <button
        className='border-2 bg-amber-100'
        onClick={generateQR}
      >
        Download QR Code
      </button>
    </div>
  )
}

export default DownloadBtn