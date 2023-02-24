import {useState} from 'react'
import axios from 'axios';
import './App.css';
import ButtonProcess from './components/ButtonProcess';
import InputLink from './components/InputLink';
import RadioButton from './components/RadioButton';
function App() {

  const [link,setLink]= useState("")
  const [downloadType,setDownloadType]=useState("mp3")
  const [quality,setQuality]=useState({})
  // console.log("re-render")
  // console.log(link)

  const baseUrl="http://localhost:5000/api/"
  const instanceApi=axios.create({
    "baseURL":baseUrl
  })



  const handleSubmit= async (e)=>{
    e.preventDefault()
    const header={
      "Content-Type": "multipart/form-data"
    }
    const data=new FormData()
    data.append('url',link)
    data.append('download_type',downloadType)
    console.log(data)
    try {
      const response = await instanceApi.post('getQuality',data,{header})

      setQuality(response.data)
    } catch (error) {
      console.log(error)
    }    
    // console.log(`${link} ${downloadType}`)
    console.log(quality)
  }

  return (
    <>
      <div className='screen'>
        <div className='container'>
          <div className='input-form'>
            <form onSubmit={handleSubmit}>
              <div className='user-input-container'>
<<<<<<< HEAD
                <InputLink name="url" setLink={setLink}/> 
=======
                <InputLink name="link" setLink={setLink}/> 
>>>>>>> ced5bb8a9d78a7c268c69fbceb82ffae6f60321c
                <RadioButton name="download_type" setDownloadType={setDownloadType} downloadType={downloadType}/>
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
