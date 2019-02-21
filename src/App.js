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
        this.setState({galleryLayout: event.target.value});
    }

    render() {
        let {galleryLayout} = this.state;
        return (
            <div className="App">

                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                </header>
                <div onChange={this.setGalleryLayout} className="controllers">
                    <input type="radio" name="gallery-layout"
                           value={GALLERY_LAYOUTS.MASONRY} defaultChecked/><label>Masonry</label><br/>
                    <input type="radio" name="gallery-layout" value={GALLERY_LAYOUTS.GRID}/><label>Grid</label><br/>
                    <input type="radio" name="gallery-layout" value={GALLERY_LAYOUTS.GRID_BOX}/><label>Grid Box</label><br/>
                </div>
                {/*a dumb way to force complete re-render once the layout change*/}
                {galleryLayout === GALLERY_LAYOUTS.MASONRY && <GalleryLayouterComponent galleryLayout={galleryLayout}/>}
                {galleryLayout === GALLERY_LAYOUTS.GRID && <GalleryLayouterComponent galleryLayout={galleryLayout}/>}
                {galleryLayout === GALLERY_LAYOUTS.GRID_BOX && <GalleryLayouterComponent galleryLayout={galleryLayout}/>}
            </div>
        );
    }
}

export default App;
