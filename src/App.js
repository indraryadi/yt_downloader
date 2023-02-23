import {useState} from 'react'
import './App.css';
import ButtonProcess from './components/ButtonProcess';
import InputLink from './components/InputLink';
import RadioButton from './components/RadioButton';
function App() {

  const [link,setLink]= useState("")
  const [videoType,setVideoType]=useState("mp3")
  console.log("re-render")
  console.log(link)

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(`${link} ${videoType}`)
  }

  return (
    <>
      <div className='screen'>
        <div className='container'>
          <div className='input-form'>
            <form onSubmit={handleSubmit}>
              <div className='user-input-container'>
                <InputLink name="link" setLink={setLink}/> 
                <RadioButton name="video_type" setVideoType={setVideoType} videoType={videoType}/>
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
