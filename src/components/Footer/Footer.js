import StatusIcons from "./StatusIcon"

export default function Footer({numQuest,numCompleted, statusIcons}){
    return (
        <footer>
            { numQuest === numCompleted
                ? statusIcons.indexOf("./images/not.svg") === -1
                    ? <>
                        <div className="title">
                            <img src="./images/party.png" alt = ""/>
                            <p>PARABÉNS!</p>
                        </div>
                        <p className="final-text">Você não esqueceu de nenhum flashcard!</p>
                    </>
                    : <>
                        <div className="title">
                            <img src="./images/sad.png" alt = ""/>
                            <p>PUTZ!</p>
                        </div>
                        <p className="final-text">Ainda faltaram alguns...
                            Mas não desanime!</p>
                    </>
                : <p>{numCompleted}/{numQuest} CONCLUÍDOS</p>
            }
            <div className="status-icon">
                {statusIcons.length !== 0 ? statusIcons.map((statusIcon, i) => {
                    return (
                        <StatusIcons
                            statusIcon={statusIcon}
                            key={i}
                        />
                    )
                }) : ""}
            </div>
        </footer>
    )
}