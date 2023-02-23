import {useState} from 'react'
import './App.css';
import ButtonProcess from './components/ButtonProcess';
import InputLink from './components/InputLink';
import RadioButton from './components/RadioButton';
function App() {

  const [link,setLink]= useState("")
  const [downloadType,setDownloadType]=useState("mp3")
  console.log("re-render")
  console.log(link)

  const handleSubmit=(e)=>{
    e.preventDefault()
    
    console.log(`${link} ${downloadType}`)
  }

  return (
    <>
      <div className='screen'>
        <div className='container'>
          <div className='input-form'>
            <form onSubmit={handleSubmit}>
              <div className='user-input-container'>
                <InputLink name="link" setLink={setLink}/> 
                <RadioButton name="download_type" setVideoType={setDownloadType} downloadType={downloadType}/>
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
