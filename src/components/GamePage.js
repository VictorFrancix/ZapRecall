import Deck from "./Deck/Deck";
import Header from "./Header";
import Footer from "./Footer"
import { useState } from "react"

export default function GamePage(){
    const [numCompleted, setNumCompleted] = useState(0)
    const [statusIcons, setStatusIcon] = useState([])
    const deck = [
        { question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript"},
        { question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces"},
        { question: "Componentes devem iniciar com __", answer: "Letra maiúscula"}, 
        { question: "Podemos colocar __ dentro do JSX", answer: "Expressões"}, 
        { question: "O ReactDOM nos ajuda __ ", answer: "Interagindo com a DOM para colocar componentes React na mesma"},
        { question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências"},
        { question: "Usamos props para __", answer: "Passar diferentes informações para componentes"},
        { question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
    ]
    return (
        <>
            <Header/>
            <Deck deck = {deck} UpdtNumCompleted={numCompletedUpdated => setNumCompleted(numCompletedUpdated + numCompleted)} UpdtStatusIcons = {StatusIconsUpdt => setStatusIcon([...statusIcons, StatusIconsUpdt])} />
            <Footer numQuest={deck.length} numCompleted ={numCompleted} statusIcons = {statusIcons}/>
        </>
    )
    
    
}