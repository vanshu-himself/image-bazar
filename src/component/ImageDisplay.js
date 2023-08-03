import React from "react";
const ImageDisplay=({info})=>{
    // {console.log(info)}

    return(
       <div>{
        info &&
      
     info.map((value,index)=>{
        // console.log(value.urls.small);
        return(
        <img key={index}
        src={value.urls.small} alt={value.alt_description}/>
        )
        
     })
    }</div>

    )
}
export default ImageDisplay;