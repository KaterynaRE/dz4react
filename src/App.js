import './App.css';
import React from "react";
import UserInfo from "./UserInfo";
import AnimalInfo from "./myAnimal";

function App() {
    return (
        <div className="App">

            <div className="dz1"><UserInfo/></div>
            <div className='line'></div>
            <div className="dz2"><AnimalInfo/></div>
        </div>
    );
}

export default App;
