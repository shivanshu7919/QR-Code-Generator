import React,{useContext} from 'react'
import QRContext from '../../context/QRContext'

function QRSettings() {
  const {transparentBg, setTransparentBg, bgColor,setBgColor,size,setSize,qrColor,setQrColor,dotStyle,setDotStyle,cornerSquareStyle,
  setCornerSquareStyle,
  cornerDotStyle,
  setCornerDotStyle}=useContext(QRContext);

  return (
    <div className='size-bgColor'>

      <div className="flex items-center gap-3">
        <label htmlFor="qrColor">QR Code Color:</label>

        <input
          type="color"
          id="qrColor"
          value={qrColor}
          onChange={(e) => setQrColor(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="dotStyle">QR Dot Style:</label>

        <select
          id="dotStyle"
          value={dotStyle}
          onChange={(e) => setDotStyle(e.target.value)}
          className="border rounded-lg p-2"
        >
          <option value="square">Square</option>
          <option value="dots">Dots</option>
          <option value="rounded">Rounded</option>
          <option value="classy">Classy</option>
          <option value="classy-rounded">Classy Rounded</option>
          <option value="extra-rounded">Extra Rounded</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="cornerSquareStyle">Corner Square Style:</label>

        <select
          id="cornerSquareStyle"
          value={cornerSquareStyle}
          onChange={(e) => setCornerSquareStyle(e.target.value)}
          className="border rounded-lg p-2"
        >
          <option value="square">Square</option>
          <option value="dot">Dot</option>
          <option value="extra-rounded">Extra Rounded</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="cornerDotStyle">Corner Inner Dot Style:</label>

        <select
          id="cornerDotStyle"
          value={cornerDotStyle}
          onChange={(e) => setCornerDotStyle(e.target.value)}
          className="border rounded-lg p-2"
        >
          <option value="square">Square</option>
          <option value="dot">Dot</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="bgColor">Background Color:</label>

        <input
          type="color"
          id="bgColor"
          value={`#${bgColor.replace("#", "")}`}
          disabled={transparentBg}
          onChange={(e) => setBgColor(e.target.value)}
        />
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="transparentBg"
          checked={transparentBg}
          onChange={(e) => setTransparentBg(e.target.checked)}
        />

        <label htmlFor="transparentBg">Transparent Background</label>
      </div>

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