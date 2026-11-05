import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { useEffect } from 'react'
import QRInput from './Components/QRInput/QRInput.jsx'
import QRContextProvider from './context/QRContextProvider.jsx'
import QRPreview from './Components/QRRreview/QRPreview.jsx'
import DownloadBtn from './Components/DownloadBtn/DownloadBtn.jsx'
import QRSettings from './Components/QRSettings/QRSettings.jsx'
import LogoUpload from './Components/LogoUpload/LogoUpload.jsx'
import LogoPreview from './Components/LogoPreview/LogoPreview.jsx'



createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   {/* <App /> */}
  //   <QRInput/>
  // </StrictMode>,

  

  <QRContextProvider>
    <QRInput/>
    <QRSettings/>
    <QRPreview/>
    <DownloadBtn/>

    <LogoUpload/>
    <LogoPreview/>
  </QRContextProvider>
)
