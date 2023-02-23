import React from "react";

const RadioButton = (props)=>{
    return(
        <>
            <div className="radio-button">
                <div>
                    <input type="radio" value="mp3" name={props.name} ref={props.refer} defaultChecked/>
                    {/* <input type="radio" value="mp3" name="video_type" onChange={props.onOptionChange} checked={props.checked==="mp3"}/> */}
                    <label>mp3</label>
                </div>
                <div>
                    <input type="radio" value="mp4" name={props.name} ref={props.refer}/>
                    {/* <input type="radio" value="mp4" name="video_type" onChange={props.onOptionChange} checked={props.checked === "mp4"}/> */}
                    <label>mp4</label>
                </div>
            </div>
        </>
    )
}

export default RadioButton