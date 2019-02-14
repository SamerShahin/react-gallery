import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {createLayout} from 'pro-gallery-layouter';
import {items, styleParams, container} from "../../common/constants";
import Gallery from "../gallery";

class GalleryLayouterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            layoutParams: {
                items,
                styleParams,
                container
            }
        };
        this.getLayout = this.getLayout.bind(this);
    }

    getLayout() {
        return createLayout(this.state.layoutParams);
    }

    render() {
        return (
            <div>
                <Gallery layout={this.getLayout()}/>
            </div>
        );
    }
}

GalleryLayouterComponent.propTypes = {
    myProp: PropTypes.object
};

export default GalleryLayouterComponent;










