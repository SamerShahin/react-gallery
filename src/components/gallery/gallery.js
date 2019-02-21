import React from "react";
import PropTypes from 'prop-types';
import {ITEM_HEADER_HEIGHT, ITEM_FOOTER_HEIGHT, GALLERY_LAYOUTS} from "../../common/constants";

const getContainerStyle = (item, galleryLayout,columnsCount) => {
    let height, top;
    let K = ITEM_HEADER_HEIGHT + ITEM_FOOTER_HEIGHT;
    switch (galleryLayout) {
        case GALLERY_LAYOUTS.GRID:
            top = item.offset.top + K * (Math.floor(item.idx / columnsCount));
            height = item.height + K;
            break;
        case GALLERY_LAYOUTS.MASONRY:
        case GALLERY_LAYOUTS.GRID_BOX:
        default:
            height = item.height;
            top = item.offset.top;
            break;

    }
    return {
        position: 'absolute',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        left: item.offset.left,
        width: item.width,
        top,
        height
    }
};

const getImageStyle = (item, galleryLayout) => {
    let height;
    let K = ITEM_HEADER_HEIGHT + ITEM_FOOTER_HEIGHT;

    switch (galleryLayout) {
        case GALLERY_LAYOUTS.MASONRY:
        case GALLERY_LAYOUTS.GRID_BOX:
            height = Math.max(item.height - K, 0);
            break;
        case GALLERY_LAYOUTS.GRID:
        default:
            height = item.height;
            break;
    }

    return {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: item.width,
        backgroundImage: "url(" + item.dto.url + ")",
        height

    }
};
const Gallery = ({layout, galleryLayout}) => {
    let columnsCount = layout.columns.length;
    return (
        <div style={{height: layout.height, position: "relative"}}>
            {layout.items.map((item) => (
                <div style={getContainerStyle(item, galleryLayout,columnsCount)} alt={item.idx} key={"gItem-" + item.idx}>
                    <div className="item-header centering-element"
                         style={{height: ITEM_HEADER_HEIGHT + "px", width: "100%"}}>
                        <label> item header</label>
                    </div>
                    <div className={"item-image"} style={getImageStyle(item, galleryLayout)}>
                    </div>
                    <div className="item-footer centering-element"
                         style={{height: ITEM_FOOTER_HEIGHT + "px", width: "100%"}}>
                        <label> item footer</label>
                    </div>
                </div>
            ))}
        </div>
    )
};

Gallery.propTypes = {
    layout: PropTypes.object.isRequired,
    galleryLayout: PropTypes.oneOf([GALLERY_LAYOUTS.MASONRY, GALLERY_LAYOUTS.GRID, GALLERY_LAYOUTS.GRID_BOX]).isRequired

};

export default Gallery;
