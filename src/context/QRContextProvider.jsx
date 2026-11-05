import React, { useContext, useState , useEffect} from "react";
import QRContext from "./QRContext";

const QRContextProvider = ({ children }) => {

  const [temp, setTemp] = useState("");
  const [word, setWord] = useState("");
  const [size, setSize] = useState(250);
  const [bgColor, setBgColor] = useState("ffffff");
  const [qrCode, setQrCode] = useState("");

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
    setQrCode
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