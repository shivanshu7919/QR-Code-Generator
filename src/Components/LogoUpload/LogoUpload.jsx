import React, { useContext } from 'react'
import QRContext from '../../context/QRContext'


function LogoUpload() {
  const {logo,setLogo,setLogoPreview}=useContext(QRContext);

  const handleLogo=(e)=>{
    const file=e.target.files[0];

    if(file){
      setLogo(file);
      setLogoPreview(URL.createObjectURL(file));
    }
  }

  const removeLogo=()=>{
    if(logo){
      setLogo(null);
      setLogoPreview("");
    }
  }

  return (
    <div>
      <input 
        type="file" 
        className='border-2 rounded-2xl'
        accept='image/*'
        onChange={e=>handleLogo(e)}
      />

      <div className='remove-logo'>
        <button
          className='border-2 bg-amber-100'
          onClick={removeLogo}
        >
          Remove Logo
        </button>
      </div>
    </div>
  )
}

export default LogoUpload
