import {useState} from 'react'
import axios from 'axios';
import ButtonProcess from './components/ButtonProcess';
import InputLink from './components/InputLink';
import RadioButton from './components/RadioButton';
import Dropdown from './components/Dropdown';
function App() {

  const [link,setLink]= useState("")
  const [downloadType,setDownloadType]=useState("mp3")
  const [quality,setQuality]=useState({})
  const [option,setOption]=useState("")
  const [loading,setLoading]=useState(false)
  const [done,setDone]=useState(false)

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
    setDone(false)
  }

  const handleDownload=async (e)=>{
    // need url and option
    setLoading(true)
    console.log(option)
    console.log(link)
    console.log(downloadType)
    e.preventDefault()
    const header={
      "Content-Type":"multipart/form-data"
    }
    const data=new FormData()
    data.append('url',link)
    data.append('qualities',option)
    data.append('download_type',downloadType)

    try {
      const response=await instanceApi.post('downloadVideo',data,{header}) 
      console.log(response.data)
      setLoading(false)
      setDone(true)
    } catch (error) {
      console.log(error) 
    }
  }

  return (
    <>
      <div className='screen'>
        <div >
          <h1 className='app-title'>YoDown</h1>
          <h3 className='app-desc'>Youtube Downloader</h3>
        </div>
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
          <div className='video-container'>
            <Dropdown quality={quality} option={option} setOption={setOption}/>
          </div>
          <div className='download-container'>
           {option===""?<p></p>:<button className='download-button' onClick={handleDownload}>Download</button>} 
            
            {loading?<p>Loading</p>:<p></p>}
            {done?<p className='download-finish'>Done</p>:<p></p>}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
