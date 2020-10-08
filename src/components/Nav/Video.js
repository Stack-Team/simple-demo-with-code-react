import React from "react";

const Video = (props) => {
    return (
        <div>
            <button onClick={props.setToggle}>Toggle</button>
        </div>
    )
}

export default Video;