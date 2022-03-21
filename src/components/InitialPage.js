export default function InitialPage({setStart}){
    return(
        <section class = "initial-page">
            <img src="images/raio.png" alt =""/>
            <h1 className = "title">ZapRecall</h1>
            <button onClick = {() => setStart(true)}>Iniciar Recall!</button>
        </section>
    )
}