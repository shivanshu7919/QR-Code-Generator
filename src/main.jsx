import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import QRInput from './Components/QRInput/QRInput.jsx'
import QRContextProvider from './context/QRContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   {/* <App /> */}
  //   <QRInput/>
  // </StrictMode>,

  <QRContextProvider>
    <QRInput/>
  </QRContextProvider>
)
