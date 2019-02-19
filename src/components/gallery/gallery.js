import React from "react";
import PropTypes from 'prop-types';
import {ITEM_HEADER_HEIGHT, ITEM_FOOTER_HEIGHT} from "../../common/constants";

const getContainerStyle = item => ({
    position: 'absolute',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    top: item.offset.top,
    left: item.offset.left,
    width: item.width,
    height: item.height
});

const getImageStyle = item => ({
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: item.width,
    height: Math.max(item.height - (ITEM_HEADER_HEIGHT + ITEM_FOOTER_HEIGHT), 0),
    backgroundImage: "url(" + item.dto.url + ")",

});
const Gallery = ({layout}) => (
    <div style={{height: layout.height, position: "relative"}}>
        {layout.items.map(item => (
            <div style={getContainerStyle(item)} alt={item.idx} key={"gItem-" + item.idx}>
                <div className="item-header" style={{height: ITEM_HEADER_HEIGHT + "px", width: "100%"}}>
                    item header
                </div>
                <div className={"item-image"} style={getImageStyle(item)}>
                </div>
                <div className="item-footer" style={{height: ITEM_FOOTER_HEIGHT + "px", width: "100%"}}>
                    item footer
                </div>
            </div>
        ))}
    </div>
);

Gallery.propTypesypes = {
    layout: PropTypes.object.isRequired
};

export default Gallery;
