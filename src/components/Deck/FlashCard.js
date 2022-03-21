import {useState} from "react";
export default function FlashCard({numQuest,answer, question}){
    function checkStatus(status){
        if(status === "closed"){
            return(<>
                <p>Pergunta {numQuest}</p>
                <img src="./images/play.svg" alt="" onClick={(e) => {
                    e.stopPropagation();
                    setStatuscard("question");
                }}/>
            </>)
        }
        else if(status === "question"){
            return(<>
                <p>{question}</p>
                    <img src="./images/turn.svg" alt="" onClick={(e) => {
                        e.stopPropagation();
                        setStatuscard("answer");
                    }}/>
            </>)
        }
        else if(status ==="answer"){
            return (
                <>
                    <p>{answer}</p>
                    <div className="buttons">
                        <button className ="not-button" onClick={(e) => {
                            e.stopPropagation()
                            setStatuscard("not-remember")
                        }}>
                            Não lembrei
                        </button>
                        <button className ="almost-button" onClick={(e) => {
                            e.stopPropagation()
                            setStatuscard("almost-not-remember")
                        }}>
                            Quase não lembrei
                        </button>
                        <button className ="zap-button" onClick={(e) => {
                            e.stopPropagation()
                            setStatuscard("zap")
                        }}>
                            Zap!
                        </button>
                    </div>
                </>
            )
        } 
        else if (status === "not-remember") {
            return (
                <>
                    <p>Pergunta {numQuest}</p>
                    <img src="./images/not.svg" alt="" />
                </>
            )
        }
        else if (status === "almost-not-remember") {
            return (
                <>
                    <p>Pergunta {numQuest}</p>
                    <img src="./images/almost.svg" alt=""/>
                </>
            )
        }
        else if (status === "zap") {
            return (
                <>
                    <p>Pergunta {numQuest}</p>
                    <img src="./images/zap.svg" alt=""/>
                </>
            )
        }
    }
    
    
    const [statuscard,setStatuscard] = useState("closed")
    return (
        <div className ={statuscard}>
            {checkStatus(statuscard)}
        </div>
    )
}