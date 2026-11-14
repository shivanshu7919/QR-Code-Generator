import React, { useContext, useState , useEffect} from "react";
import QRContext from "./QRContext";

const QRContextProvider = ({ children }) => {

  const [temp, setTemp] = useState("");
  const [word, setWord] = useState("");
  const [size, setSize] = useState(250);
  const [bgColor, setBgColor] = useState("ffffff");
  const [logo,setLogo]=useState(null);
  const [logoPreview,setLogoPreview]=useState("");
  const [qrColor, setQrColor] = useState("#000000");
  const [dotStyle, setDotStyle] = useState("square");
  const [cornerSquareStyle, setCornerSquareStyle] = useState("square");
  const [cornerDotStyle, setCornerDotStyle] = useState("square");
  const [transparentBg, setTransparentBg] = useState(false);

  const value={
    temp,
    setTemp,
    word,
    setWord,
    size,
    setSize,
    bgColor,
    setBgColor,
    logo,
    setLogo,
    logoPreview,
    setLogoPreview,
    qrColor,
    setQrColor,
    dotStyle,
    setDotStyle,
    cornerSquareStyle,
    setCornerSquareStyle,
    cornerDotStyle,
    setCornerDotStyle,
    transparentBg, 
    setTransparentBg
  };

  
  

  return(
    <QRContext.Provider value={value}>
      {children}
    </QRContext.Provider>
  );
}

export default QRContextProvider;