import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Giftcard from './dashboard/Giftcard';

function App() {
    return (
        <>
            <Router>
                <Route exact path="/" component={Giftcard}></Route>
            </Router>
        </>
    );
}

export default App;