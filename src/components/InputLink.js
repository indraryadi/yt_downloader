import React from "react";

const InputLink =(props)=>{
    // console.log(porps)

    const inputHandler = (e)=>{
        props.setLink(e.target.value)
    }


    return(
        <>
            <input className="link-input" type="text" placeholder="insert the url" onChange={inputHandler}/>
        </>
    )
}

export default InputLink