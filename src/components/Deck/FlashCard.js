export default function FlashCard({numQuest}){
    return (
        <div className ="closed">
            <p>Pergunta {numQuest}</p>
            <img src="./images/play.svg" alt=""/>
        </div>
    )
}