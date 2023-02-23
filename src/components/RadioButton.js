import React from "react";

const RadioButton = (props)=>{

    const onChangeHandler = (e)=>{
        props.setVideoType(e.target.value)
    }
    return(
        <>
            <div className="radio-button">
                <div>
                    <input type="radio" value="mp3" name="video_type" onChange={onChangeHandler} checked={props.videoType==="mp3"}/>
                    <label>mp3</label>
                </div>
                <div>
                    <input type="radio" value="mp4" name="video_type" onChange={onChangeHandler} checked={props.videoType === "mp4"}/>
                    <label>mp4</label>
                </div>
            </div>
        </>
    )
}

export default RadioButton