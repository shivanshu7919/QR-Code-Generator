import React, { useContext } from 'react'
import QRContext from '../../context/QRContext'

function LogoPreview() {
  const {logoPreview}=useContext(QRContext);

  return (
    <div className='logoPreview'>
      Logo Preview
      {
        logoPreview && (
          <img src={logoPreview} alt="Logo Preview" />
        )
      }
    </div>
  )
}

export default LogoPreview