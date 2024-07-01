import React, {useState, useEffect} from "react";
import BackButton from "../../components/backButton";

const Notifiche = () => {
    const [lista, lista_set] = useState([]);

    useEffect(() => {
        if (Notification.permission === 'default') {
            Notification.requestPermission().then(permission => {
                if (permission !== 'granted') {
                    console.log('Permesso disabilitato');
                }
            });
        }
    }, []);

    const handlePress = (newTitolo, newDescrizione) => {
        const now = new Date();
        const formattedDate = new Intl.DateTimeFormat('it-IT', {
            dateStyle: 'full',
            timeStyle: 'short'
        }).format(now);

        const newNotificaObj = {
            id: Date.now().toString(),
            titolo: newTitolo,
            descrizione: newDescrizione,
            data: formattedDate,
        };

        lista_set(prevLista => [...prevLista, newNotificaObj]);
        sendNotification(newTitolo, newDescrizione);
    };

    const sendNotification = (title, body) => {
        if (Notification.permission === 'granted') {
            new Notification(title, { body });
        }
    };

    const Item = ({notifica}) => (
        <div className="item">
            <h3 className="title">{notifica.titolo}</h3>
            <p className="dateTime">{notifica.data}</p>
            <p className="description">{notifica.descrizione}</p>
            <button onClick={() => lista_set(lista.filter(item => item.id !== notifica.id))}>
                Elimina
            </button>
        </div>
    );

    return (
        <div>
            <div className="header">
                <div className="arrowBack">
                    <BackButton/>
                    <h2>Notifiche</h2>
                </div>
            </div>
            <div className="buttonContainer">
                <button
                    onClick={() => handlePress('Non accessibilità causa evento comunitario', 'Non accessibilità a causa di un evento comunitario in zona')}>
                    Non accessibilità causa evento comunitario
                </button>
                <div className="buttonSeparator"/>
                <button
                    onClick={() => handlePress('Non accessibilità causa lavori in corso', 'Non accessibilità a causa di lavori di manutenzione in corso')}>
                    Non accessibilità causa lavori in corso
                </button>
                <div className="buttonSeparator"/>
                <button
                    onClick={() => handlePress('Divieto di sosta speciale', 'Divieto di sosta speciale presente temporaneamente in zona')}>
                    Divieto di sosta speciale
                </button>
                <div className="buttonSeparator"/>
                <button
                    onClick={() => handlePress('Rimozione forzata vettura', 'Avviso di rimozione forzata della vettura')}>
                    Rimozione forzata vettura
                </button>
                <div className="buttonSeparator"/>
                <button
                    onClick={() => handlePress('Manutenzione sistema', 'Avviso di futura manutenzione del sistema')}>
                    Manutenzione sistema
                </button>
            </div>
            <div className="gridItem">
                {lista.map(notifica => (
                    <Item key={notifica.id} notifica={notifica}/>
                ))}
            </div>
        </div>
    );
};

export default Notifiche;
