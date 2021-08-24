import React, {useEffect} from "react";
import './App.css';
import {useSettingsStore} from './store'
import Orang from './components/Orang'
import Input from './components/Input'


function App() {
  // pick up state toogleDarkMode yang mana isi state nya adalah fungsi
  const toogleDarkMode = useSettingsStore((state) => state.toggleDarkMode)

  // pick up state dark
  const dark = useSettingsStore((state) => state.dark)

  useEffect (()=>{
    if(dark){
      document.querySelector('body').classList.add('dark')
    } else {
      document.querySelector('body').classList.remove('dark')
    }
  }, [dark]);

  return (
    <div className="App">
        <button onClick={toogleDarkMode}>Toggle Dark Mode</button>
        {/* <Input/> */}
       <p>People</p>
       <Orang/>
       <Input/>
    </div>
  );
}

export default App;


// Langkah menggunakan zustand
//1. npm install zustand
//2. buat store.js di folder src


