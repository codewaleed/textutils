import React, {useState} from "react";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode=()=>{
    if(mode === 'dark'){
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = "grey";
    }
  }

  return (
    <BrowserRouter>
    <Navbar name="Waleed" toggleMode={toggleMode} mode={mode}/>
    <Routes>
      
      <Route path="/" element={<Textarea mode={mode}/>}/>
      <Route path="About" element={<About />}/>
    
    </Routes>
    </BrowserRouter>
  );
}

export default App;
