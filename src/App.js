// import { useState } from 'react';
import { useRef,useEffect } from 'react';
import './App.css';
import ButtonProcess from './components/ButtonProcess';
import InputLink from './components/InputLink';
import RadioButton from './components/RadioButton';
function App() {
  // const [link,setLink]=useState("")
  const linkRef= useRef()

  // console.log(link)
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(linkRef)
  }
  return (
    <>
      <div className='screen'>
        <div className='container'>
          <div className='input-form'>
            <form onSubmit={handleSubmit}>
              <div className='user-input-container'>
                {/* <InputLink setLink={setLink}/> */}
                <InputLink refer={linkRef}/>
                <RadioButton/>
              </div>
              <div className='button-container'>
                <ButtonProcess/>
              </div>
            </form>
          </div>
          <div className='video-title'></div>
          <div className='download'></div>
        </div>
      </div>
    </>
  );
}

export default App;
