// import React,{useState,useEffect} from "react";


const Dropdown =(props)=>{
    const {qualities,title} = props.quality
    const option=props.option
    const setOption=props.setOption 

    // const [option,setOption]=useState("")
    // console.log(qualities)

    // const [selectedOption,setSelectedOption]=useState("")

    const optionItem=[]
    
    for(let key in qualities){
        optionItem.push(
            <option key={key} value={key}>
                {qualities[key]}
            </option>
        )
    }
    const handleOption=(e)=>{
        setOption(e.target.value)
        console.log(option)
    }

    // useEffect(()=>{
    //     setSelectedOption(option)
    // },[option])

    // const handleDownload=()=>{
    //     // console.log(option)
    //     console.log(selectedOption)
    //     console.log("download")
    // }
    return(
        <>
            <h1>{title}</h1>
            <select className={qualities===undefined?"hidden":""} value={option} onChange={handleOption} >
                <option value="">Choose an Option</option>
                {optionItem===[]?<option>--No Data--</option>:optionItem}
            </select>
            {/* <button className="bg-rose-200 text-black  font-bold" onClick={handleDownload}>Download</button> */}
        </>
    )
}

export default Dropdown