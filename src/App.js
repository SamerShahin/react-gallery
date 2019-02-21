import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import GalleryPage from './pages/gallery-page';
import FlexPage from './pages/flex-page'
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import {Menu} from 'semantic-ui-react'


class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                </header>
                <Router>
                    <Menu>
                        <Menu.Item >
                            <Link to={'/gallery'}>Gallery</Link>
                        </Menu.Item>

                        <Menu.Item>
                            <Link to={'/flex'}>Flex Page</Link>
                        </Menu.Item>
                    </Menu>
                    <Route path="/gallery" component={GalleryPage}/>
                    <Route path="/flex" component={FlexPage}/>
                </Router>
            </div>
        );
    }
}

export default App;
