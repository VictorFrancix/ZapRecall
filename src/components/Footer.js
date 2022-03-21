export default function Footer({numQuest,numCompleted, statusIcons}){
    return (
        <footer className={zapFinished ? "zap-end" : ""}>
            {zapFinished
                ? zapAmount >= goal
                    ? <>
                        <div className="title">
                            <img src="./imgs/parabens.png" />
                            <p>PARABÉNS!</p>
                        </div>
                        <p className="final-text">Você não esqueceu de nenhum flashcard!</p>
                    </>
                    : <>
                        <div className="title">
                            <img src="./imgs/sad.png" />
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