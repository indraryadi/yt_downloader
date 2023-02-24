import {useState} from 'react'
import axios from 'axios';
import './App.css';
import ButtonProcess from './components/ButtonProcess';
import InputLink from './components/InputLink';
import RadioButton from './components/RadioButton';
import Dropdown from './components/Dropdown';
function App() {

  const [link,setLink]= useState("")
  const [downloadType,setDownloadType]=useState("mp3")
  const [quality,setQuality]=useState({})
  const [option,setOption]=useState("")
  console.log(quality)
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

  const handleDownload=async (e)=>{
    // need url and option
    console.log(option)
    console.log(link)
    e.preventDefault()
    const header={
      "Content-Type":"multipart/form-data"
    }
    const data=new FormData()
    data.append('url',link)
    data.append('qualities',option)

    try {
      const response=await instanceApi.post('downloadVideo',data,{header}) 
      console.log(response.data)
    } catch (error) {
      console.log(error) 
    }
  }

  return (
    <>
      <div className='screen'>
        <div className='container'>
          <div className='input-form'>
            <form onSubmit={handleSubmit}>
              <div className='user-input-container'>
                <InputLink name="url" setLink={setLink}/> 
                <RadioButton name="download_type" setDownloadType={setDownloadType} downloadType={downloadType}/>
              </div>
              <div className='button-container'>
                <ButtonProcess/>
              </div>
            </form>
          </div>
          <div className='video-title'>
            <Dropdown quality={quality} option={option} setOption={setOption}/>
            {/* <Dropdown quality={quality}/> */}
          </div>
          <div className='download'>
            <button className='bg-orange-300 text-white' onClick={handleDownload}>Download</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
