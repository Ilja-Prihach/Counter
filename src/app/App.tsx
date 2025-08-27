import React from 'react';

import './App.css';
import {Counter} from "../components/Counter";
import {Set} from "../components/Set";


const App = () => {
    return (
        <div className="App">
            <Set/>
            <Counter />
        </div>
    );
};

export default App;

