import React, { useState } from "react";
import {useEffect} from "react"
import axios from 'axios';
// import Select from 'react-select';
// console.log(process.env.REACT_APP_YOUR_ACCESS_KEY);

function SearchBar({setInfo}) {

const [search,setSearch]=useState("");
const [quantity,setQuantity]=useState(0);

 useEffect(()=>{
    getImage();
},[]);

async function getImage(){
    try{
    let request= await axios.get('https://api.unsplash.com/search/photos',{
        params:{
            query:search || 'nature',
            per_page:quantity || 10
        
        },
       headers:{
        authorization: `Client-ID ${process.env.REACT_APP_YOUR_ACCESS_KEY}`
       }
    })
    // console.log(request.data.results[0].urls)
    setInfo(request.data.results);

  
    }
    catch(error){
        console.log(error)
    }
} 


    return (
        <div className="search">
        <input
        style={{background:"white"}}
            type="text"
            placeholder="Search Image..."
            onChange={(e)=>setSearch(e.target.value)}
            value={search}
        />
        <input
        type="number"
        style={{background:"white"}}
        placeholder="Quantity"
        onChange={(e)=>setQuantity(e.target.value)}
        />
        <button style={{background:"white"}} onClick={getImage}>Search</button>
       
        </div>
      
    )
};
export default SearchBar;