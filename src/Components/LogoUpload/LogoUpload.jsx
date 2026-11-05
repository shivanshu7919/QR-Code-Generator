import React, { useContext } from 'react'
import QRContext from '../../context/QRContext'


function LogoUpload() {
  const {setLogo,setLogoPreview}=useContext(QRContext);

  const handleLogo=(e)=>{
    const file=e.target.files[0];

    if(file){
      setLogo(file);
      setLogoPreview(URL.createObjectURL(file));
    }
  }

  return (
    <div>
      <input 
        type="file" 
        accept='image/*'
        onChange={e=>handleLogo(e)}
      />
    </div>
  )
}

export default LogoUpload
