import React, { Component } from 'react';
import Footer from './containers/footer/footer';
import Tile from "./components/tile/tile";
import logo from './logo.svg';
import './main.scss';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Tile
                    tileImgSrc=''
                    tileText='tile text test'
                />
                <h1 className="main-heading">Test test</h1>
                <img className="main-logo" src={logo} alt="logo" />
                <Footer />
            </div>
        );
    }
}

export default App;
