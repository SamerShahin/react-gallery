import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {createLayout} from 'pro-gallery-layouter';
import {
    items,
    masonryStyleParams,
    gridStyleParams,
    container,
    ITEM_FOOTER_HEIGHT,
    ITEM_HEADER_HEIGHT,
    GALLERY_LAYOUTS
} from "../../common/constants";
import Gallery from "../gallery";

class GalleryLayouterComponent extends Component {
    constructor(props) {
        super(props);
        let styleParams = this.getStyleParams(props.galleryLayout);
        this.state = {
            layoutParams: {
                items: this.changeItemsHeightMasonry(items, styleParams),
                styleParams,
                container
            }
        };
        this.getLayout = this.getLayout.bind(this);
        this.changeItemsHeightGrid = this.changeItemsHeightGrid.bind(this);
    }

    getStyleParams = function (layout) {
        return layout === GALLERY_LAYOUTS.GRID ? gridStyleParams : masonryStyleParams;
    };
    changeItemsHeightMasonry = function (items, styleParams) {
        /**
         * calculate the new height of the image after taking into consideration the additional height of the header and footer,
         * and that the width of the item after the resize is known and constant, i.e every 2 items have the same width
         * calculate as follow:
         * L : (L + item height) = new item height
         * X: item width
         * K: header and footer height
         * W: the width of the item after the resize
         * L = (X*K)/W
         */
        let w = Math.ceil((container.width - (styleParams.fixedColumns - 1) * styleParams.imageMargin) / styleParams.fixedColumns);
        items.forEach((item) => {
            let l = Math.ceil((item.width * (ITEM_FOOTER_HEIGHT + ITEM_HEADER_HEIGHT)) / w);
            item.height = item.height + l;
        });
        return items;
    };
    changeItemsHeightGrid = function (items) {

        return items;
    };

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










