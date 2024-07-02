import React from 'react';
import Navbar from "../../components/navbar";
import { FaSquareParking } from "react-icons/fa6";


const Homepage = () => {
    return (
        <>
            <div className={"header"}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', justifyContent: 'center' }}>
                    <FaSquareParking size={100} style={{ color: '#3498db' }} />
                    <h1 className={"title"}>Parking Manager</h1>
                </div>
            </div>
            <Navbar />
            <div className={"maps"}>
            </div>
        </>
    )
}

export default Homepage;

const styles = {
    header: {
        textAlign: 'center',
        marginBottom: '20px',
        padding: '50px',
    },
    title: {
        margin: 0,
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100vh - 60px)',
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

