
import { useState } from 'react';
import './App.css';
import ImageDisplay from './component/ImageDisplay';
import SearchBar from './component/SearchBar';


function App() {
  const[info,setInfo]=useState("");
  return (
    <div className="App">
  
     <SearchBar setInfo={setInfo}/>
     <ImageDisplay info={info}/>
    </div>
  );
}

export default App;
