import React, { useContext, useState } from "react";
import qrContext from "./qrContext";

const qrContextProvider = ({ children }) => {

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

  <qrContext.Provider value={value}>
    {children}
  </qrContext.Provider>
}

export default qrContextProvider;