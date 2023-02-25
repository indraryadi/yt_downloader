import React from "react";

const RadioButton = (props)=>{

    const onChangeHandler = (e)=>{
        props.setDownloadType(e.target.value)
    }
    return(
        <>
            <div className="radio-button">
                <div>
                    <input type="radio" value="mp3" name="video_type" onChange={onChangeHandler} checked={props.downloadType==="mp3"}/>
                    <label className="radio-button-label">mp3</label>
                </div>
                <div>
                    <input type="radio" value="mp4" name="video_type" onChange={onChangeHandler} checked={props.downloadType === "mp4"}/>
                    <label className="radio-button-label">mp4</label>
                </div>
            </div>
        </>
    )
}

export default RadioButton