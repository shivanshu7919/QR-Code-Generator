import React, { useContext, useState , useEffect} from "react";
import QRContext from "./QRContext";

const QRContextProvider = ({ children }) => {

  const [temp, setTemp] = useState("");
  const [word, setWord] = useState("");
  const [size, setSize] = useState(200);
  const [bgColor, setBgColor] = useState("ffffff");
  const [qrCode, setQrCode] = useState("");
  const [logo,setLogo]=useState(null);
  const [logoPreview,setLogoPreview]=useState("");

  const value={
    temp,
    setTemp,
    word,
    setWord,
    size,
    setSize,
    bgColor,
    setBgColor,
    qrCode,
    setQrCode,
    logo,
    setLogo,
    logoPreview,
    setLogoPreview
  };

  useEffect(()=>{
      if(word){
        console.log(size);
        setQrCode(
          `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(word)}&size=${size}x${size}&bgcolor=${bgColor}`
        );
      }
    },[word,size,bgColor]);
  

  return(
    <QRContext.Provider value={value}>
      {children}
    </QRContext.Provider>
  );
}

export default QRContextProvider;