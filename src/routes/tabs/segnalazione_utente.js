import React, {useState} from "react";
import Modal from "react-modal";
import BackButton from "../../components/backButton";

const SegnaliDaUtenti = () => {
    const [isDialogVisible, setIsDialogVisible] = useState(false);
    const [inputText, setInputText] = useState("");
    const [receivedMessage, setReceivedMessage] = useState("");

    const handleSubmit = () => {
        setReceivedMessage(inputText);
        setIsDialogVisible(false);
        setInputText("");
        setTimeout(() => {
            setReceivedMessage("");
        }, 2000);
    };

    const reportItems = [
        "Parcheggio Ostruito",
        "Evento Eccezionale",
        "Situazione di Emergenza",
    ];

    return (
        <div>
            <div className="header">
                <div className="arrowBack">
                    <BackButton/>
                    <h2>Segnalazioni Utente</h2>
                </div>
            </div>
            <div className={"buttonContainer"}>
                {reportItems.map((item, index) => (
                    <div key={index}>
                        <button
                            onClick={() => setIsDialogVisible(true)}
                        >
                            {item}
                        </button>
                        <div className={"buttonSeparator"}/>
                    </div>
                ))}
            </div>

            {receivedMessage ? (
                <div>{/* inserire la classe messagebox*/}
                    <p>Segnalazione ricevuta! Grazie per il tuo contributo!</p>
                </div>
            ) : null}

            <Modal
                isOpen={isDialogVisible}
                onRequestClose={() => setIsDialogVisible(false)}
                style={modalStyles}>
                <div style={{width: "100%", overflow: "hidden"}}>
                    <h2>Spiega la tua situazione</h2>
                    <textarea
                        placeholder="Scrivere qui"
                        value={inputText}
                        onChange={e => setInputText(e.target.value)}
                        className={"input"}
                    />
                    <div className={"dialogActions"}>
                        <button onClick={() => setIsDialogVisible(false)} className={"dialogButton"}>Chiudi</button>
                        <button onClick={handleSubmit} className={"dialogButton"}>Invia Segnalazione</button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default SegnaliDaUtenti;

const modalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        padding: '20px',
        borderRadius: '16px',
        border: '1px solid #ccc',
        backgroundColor: '#151515',
        color: '#ffffff',
        overflow: 'hidden',
    },
};
