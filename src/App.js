import { useRef } from 'react';
import './App.css';
import ButtonProcess from './components/ButtonProcess';
import InputLink from './components/InputLink';
import RadioButton from './components/RadioButton';
function App() {
  const linkRef= useRef()
  const optionRef= useRef('mp3')

  console.log("re-render")

  const handleSubmit=(e)=>{
    e.preventDefault()
    const data = new FormData(e.target)
    console.log(Object.fromEntries(data.entries()))
  }

  return (
    <>
      <div className='screen'>
        <div className='container'>
          <div className='input-form'>
            <form onSubmit={handleSubmit}>
              <div className='user-input-container'>
                <InputLink name="link" refer={linkRef}/>
                <RadioButton name="video_type" refer={optionRef} />
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
