import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Main from "./neko-1-main/main-1-ui/Main";

// add context
const App: React.FC = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Main/>
            </BrowserRouter>
        </div>
    );
};

export default App;
