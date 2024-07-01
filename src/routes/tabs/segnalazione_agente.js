import React from "react";
import BackButton from "../../components/backButton";
import supabase from "../connessioneDB/supabase";

export default function SegnalazioneAgente() {

    const generateRandomNumber = () => {
        return Math.floor(Math.random() * (800000 - 100000 + 1)) + 100000;
    }

    const generateRandomFloat = () => {
        return Math.random() * (150 - 10) + 10;
    }

    const inviaSegnalazione = async () => {
        try {
            const { data, error } = await supabase
                .from('segnalazione_vigilanza')
                .insert([
                    {
                        stato: 'aperto',
                        id_area_parcheggio: generateRandomNumber(),
                        descrizione: '',
                        id_agente: generateRandomNumber(),
                        amount: generateRandomFloat()
                    },
                ]);

            if (error) {
                console.error("Errore durante l'inserimento della segnalazione:", error);
                alert("Errore durante l'invio della segnalazione.");
            } else {
                console.log("Segnalazione inviata con successo:", data);
                alert("Segnalazione inviata con successo.");
            }
        } catch (error) {
            console.error("Errore imprevisto:", error);
            alert("Errore imprevisto durante l'invio della segnalazione.");
        }
    }

    return (
        <div style={styles.container}>
            <div className="arrowBack">
                <BackButton />
                <h1>Segnalazione Vigilanza</h1>
            </div>
            <button style={styles.button} onClick={inviaSegnalazione}>
                Invia Segnalazione
            </button>
        </div>
    );
}

const styles = {
    container: {
        padding: '20px',
        textAlign: 'center',
    },
    button: {
        margin: '10px',
        padding: '10px',
        backgroundColor: '#007bff',
        border: 'none',
        borderRadius: '5px',
        color: '#fff',
        fontWeight: 'bold',
        cursor: 'pointer',
    }
}
