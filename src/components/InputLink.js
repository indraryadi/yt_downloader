import React from "react";

const InputLink =(props)=>{
    // console.log(porps)

    // const inputHandler = (e)=>{
    //     porps.setLink(e.target.value)
    // }


    return(
        <>
            {/* <input className="link-input" type="text" placeholder="insert the url" onChange={inputHandler}/> */}
            <input className="link-input" type="text" placeholder="insert the url" ref={props.refer}/>
        </>
    )
}

export default InputLink