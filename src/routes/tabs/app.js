import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ImpostazioniApp from "./impostazioni";
import React from "react";
import Homepage from "./homepage";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/impostazioni/*" element={<ImpostazioniApp/>}/>
            </Routes>
        </Router>
    );
};

export default App;