import React,{useContext} from 'react'
import QRContext from '../../context/QRContext.jsx';

function QRInput() {
  const {temp,setTemp,setWord}=useContext(QRContext);

  const handleClick=()=>{
    setWord(temp);
  }

  return (
    <div>
      <input
        type="text"
        placeholder='Enter the url'
        onChange={(e) => setTemp(e.target.value)}
      />

      <button className='border-2 bg-orange-600'
        onClick={handleClick}
      >
        Generate
      </button>
    </div>
  )
}

export default QRInput