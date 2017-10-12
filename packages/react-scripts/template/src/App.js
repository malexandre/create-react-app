import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">Welcome to Malexandres's React Config</h1>
                    </header>
                    <p className="App-intro">React-router and React-toolbox are available!</p>
                    <Route
                        exact
                        path="/"
                        render={() => (
                            <div>
                                <p>This is the route "/"!</p>
                                <p>
                                    <Link to="/about">Change route to "/about"</Link>
                                </p>
                            </div>
                        )}
                    />
                    <Route
                        path="/about"
                        render={() => (
                            <div>
                                <p>This is the route "/about"!</p>
                                <p>
                                    <Link to="/">Change route to "/"</Link>
                                </p>
                            </div>
                        )}
                    />
                </div>
            </Router>
        );
    }
}

export default App;
