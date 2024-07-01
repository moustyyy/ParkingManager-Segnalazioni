import React from "react";
import {Route, Routes, NavLink} from "react-router-dom";
import SegnalazioneAgente from "./segnalazione_agente";
import Notifiche from "./notifiche";
import SegnaliDaUtente from "./segnalazione_utente";
import Navbar from "../../components/navbar";


const Impostazioni = () => {
    return (
        <>
            <Navbar/>
            <div style={styles.header}>
                <h1 style={styles.title}>Impostazioni</h1>
            </div>
            <div style={styles.container}>
                <div style={styles.buttonContainer}>
                    <NavLink to="./segnali-da-utente" style={styles.link}>
                        <button style={styles.button}>Segnalazioni Utente</button>
                    </NavLink>
                    <NavLink to="./cronologia-notifiche" style={styles.link}>
                        <button style={styles.button}>Notifiche Del Sistema</button>
                    </NavLink>
                    <NavLink to="./segnali-per-vigilanza" style={styles.link}>
                        <button style={styles.button}>Segnalazioni Per Vigilanza</button>
                    </NavLink>
                </div>
            </div>
        </>
    );
};

const styles = {
    header: {
        textAlign: 'center',
        marginBottom: '20px',
    },
    title: {
        margin: 0,
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100vh - 500px)',
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
    },
    link: {
        textDecoration: 'none',
    },
};

const ImpostazioniApp = () => {
    return (
        <Routes>
            <Route path="/" element={<Impostazioni/>}/>
            <Route path="/segnali-da-utente" element={<SegnaliDaUtente/>}/>
            <Route path="/cronologia-notifiche" element={<Notifiche/>}/>
            <Route path="/segnali-per-vigilanza" element={<SegnalazioneAgente/>}/>
        </Routes>
    );
};

export default ImpostazioniApp;
