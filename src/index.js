import reactDOM from "react-dom";
// import {useState} from "react";
import Header from "./components/Header";
import "./css/reset.css";
import "./css/style.css";

function App(){
    return (
        <Header/>
    )
}

reactDOM.render(<App/>, document.querySelector(".root"))