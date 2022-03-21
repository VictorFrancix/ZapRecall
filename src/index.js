import reactDOM from "react-dom";
import {useState} from "react";
import GamePage from "./components/GamePage"
import InitialPage from "./components/InitialPage";
import "./css/reset.css";
import "./css/style.css";

function App(){
    const [start, setStart] = useState(false)
    return (
            <>
                {start ? <GamePage/> : <InitialPage setStart = {setStart}/> }
            </>
    )
}

reactDOM.render(<App/>, document.querySelector(".root"))