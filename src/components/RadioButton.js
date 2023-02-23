import React from "react";

const RadioButton = ()=>{
    return(
        <>
            <div className="radio-button">
                <div>
                    <input type="radio" value="a"/>
                    <label>a</label>
                </div>
                <div>
                    <input type="radio" value="b"/>
                    <label>b</label>
                </div>
            </div>
        </>
    )
}

export default RadioButton