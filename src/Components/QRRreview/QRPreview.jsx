
import React, { useContext, useEffect, useRef } from 'react';
import QRContext from '../../context/QRContext';
import QRCodeStyling from 'qr-code-styling';

function QRPreview() {

  const qrContainerRef = useRef(null);
  const qrCodeRef = useRef(null);

  const { word, size, bgColor, logoPreview,qrColor,dotStyle,cornerSquareStyle,
  cornerDotStyle,transparentBg } = useContext(QRContext);

  useEffect(() => {

    const container = qrContainerRef.current;

    if (!container) return;

    if (!word) {
      container.innerHTML = "";
      qrCodeRef.current = null;
      return;
    }

    const options = {
      width: size,
      height: size,
      type: "svg",

      data: word,

      qrOptions: {
        errorCorrectionLevel: "H"
      },

      dotsOptions: {
        color: qrColor,
        type: dotStyle
      },

      backgroundOptions: {
        color: transparentBg
          ? "rgba(0,0,0,0)"
          : bgColor.startsWith("#")
            ? bgColor
            : `#${bgColor}`
      },
      cornersSquareOptions: {
        color: qrColor,
        type: cornerSquareStyle
      },

      cornersDotOptions: {
        color: qrColor,
        type: cornerDotStyle
      },

      ...(logoPreview && {
        image: logoPreview,

        imageOptions: {
          hideBackgroundDots: true,
          imageSize: 0.18,
          margin: 5,
          saveAsBlob: true
        }
      })
    };

    const qrCode = new QRCodeStyling(options);

    container.innerHTML = "";
    qrCode.append(container);

    qrCodeRef.current = qrCode;

  }, [word, size, bgColor, logoPreview,qrColor,dotStyle, cornerSquareStyle,cornerDotStyle,transparentBg]);


  // Download PNG
  const handleDownload = () => {

    if (!qrCodeRef.current) return;

    qrCodeRef.current.download({
      name: "my-qr-code",
      extension: "png"
    });

  };


  // Download SVG
  const handleDownloadSVG = () => {

    if (!qrCodeRef.current) return;

    qrCodeRef.current.download({
      name: "my-qr-code",
      extension: "svg"
    });

  };


  return (
    <div className="qr-preview">

      <div ref={qrContainerRef}></div>

      <button
        className="border-2 bg-amber-100"
        onClick={handleDownload}
      >
        Download PNG
      </button>

      <button
        className="border-2 bg-amber-100"
        onClick={handleDownloadSVG}
      >
        Download SVG
      </button>

    </div>
  );
}

export default QRPreview;
