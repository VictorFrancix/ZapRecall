import FlashCard from "./FlashCard"
export default function Deck({deck, UpdtNumCompleted, UpdtStatusIcons}){
    return (
        <div className="deck">
            {deck.map(({question,answer},numQuest) => <FlashCard numQuest = {numQuest + 1} 
            key = {numQuest + 1} 
            answer = {answer} 
            question = {question} 
            UpdtNumCompleted = {UpdtNumCompleted}
            UpdtStatusIcons = {UpdtStatusIcons}/>)}
            
        </div>
    )
}