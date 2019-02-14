import React from "react";
import PropTypes from 'prop-types';

const getImageStyle = item => ({
    position: 'absolute',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    top: item.offset.top,
    left: item.offset.left,
    width: item.width,
    height: item.height,
    backgroundImage: "url(" + item.dto.url + ")"
});

const Gallery = ({ layout }) => (
    <div style={{ height: layout.height }}>
        {layout.items.map(item => (
            <div style={getImageStyle(item)} alt={item.idx} key={"gItem-"+item.idx}>
                <div className="inner-container">
                    <div>
                        <button onClick={(e)=>{console.log("item clicked", item.idx)}}>potatoes</button>
                    </div>
                </div>
            </div>
        ))}
    </div>
);

Gallery.propTypesypes = {
    layout: PropTypes.object.isRequired
};

export default Gallery;