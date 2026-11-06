import React, { useContext, useEffect, useRef } from 'react'
import QRContext from '../../context/QRContext'

function QRPreview() {
  const {qrCode,logoPreview,size}=useContext(QRContext);

  const canvasRef=useRef(null);

  useEffect(()=>{
    if(!qrCode) return;
    const canvas=canvasRef.current;
    const ctx=canvas.getContext("2d");

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    const scale=3;
    canvas.width=size*scale;
    canvas.height=size*scale;
    ctx.scale(scale, scale);

    const qrImg=new Image();
    qrImg.crossOrigin="anonymous";
    qrImg.src=qrCode;

    qrImg.onload=()=>{
      ctx.clearRect(0,0,size,size);
      ctx.drawImage(qrImg,0,0,size,size);

      if(!logoPreview) return;

      const logoImg=new Image();
      logoImg.src=logoPreview;

      logoImg.onload=()=>{
        const logoSize = size * 0.15;

        const aspectRatio = logoImg.width / logoImg.height;

        let logoWidth = logoSize;
        let logoHeight = logoSize;

        if (aspectRatio > 1) {
          logoHeight = logoSize / aspectRatio;
        } else {
          logoWidth = logoSize * aspectRatio;
        }

        const x = (size - logoWidth) / 2;
        const y = (size - logoHeight) / 2;

        ctx.fillStyle="white";
        ctx.fillRect(x-5,y-5,logoWidth+10,logoHeight+10);

        ctx.drawImage(logoImg,x,y,logoWidth,logoHeight);
      };

      logoImg.onerror = () => {
        console.error("Logo image failed to load");
      };
    };

    qrImg.onerror=()=>{
      console.error("QR Image failed to load");
    };
  },[qrCode,logoPreview,size])


  const handleDownload = () => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    canvas.toBlob((blob) => {
      if (!blob) {
        console.error("Canvas image could not be created");
        return;
      }

      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "qr-code.png";

      document.body.appendChild(link);
      link.click();
      link.remove();

      setTimeout(() => URL.revokeObjectURL(url), 1000);

    }, "image/png");
  };

  return (
    <div className='qr-preview'>
      <canvas
        ref={canvasRef}
      >

      </canvas>
      <button
        className='border-2 bg-amber-100'
        onClick={handleDownload}
      >
        Download QR Code
      </button>
      
    </div>
  )
}

export default QRPreview