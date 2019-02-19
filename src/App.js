import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import GalleryLayouterComponent from './components/gallery-layouter-component';
import {GALLERY_LAYOUTS} from "./common/constants";

class App extends Component {
    constructor(props) {
        super(props);
        this.setGalleryLayout = this.setGalleryLayout.bind(this);
        this.state = {
            galleryLayout: GALLERY_LAYOUTS.MASONRY
        }
    }

    setGalleryLayout(event) {
        console.log("layout", event.target.value);
        this.setState({galleryLayout: event.target.value});
    }

    render() {
        return (
            <div className="App">

                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                </header>
                <div onChange={this.setGalleryLayout} className="controllers">
                    <input type="radio" name="gallery-layout" defaultChecked value={GALLERY_LAYOUTS.MASONRY}/><label>Masonry</label><br/>
                    <input type="radio" name="gallery-layout" value={GALLERY_LAYOUTS.GRID}/><label>Grid</label><br/>
                </div>
                <GalleryLayouterComponent galleryLayour={this.state.galleryLayout}/>
            </div>
        );
    }
}

export default App;
