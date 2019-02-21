import React from 'react';
import PropTypes from 'prop-types';

export default function AvatarIcon({url, radius, onClick, label}) {
    let style = {
        backgroundImage: "url(" + url + ")",
        width: 2 * radius + 'px',
        height: 2 * radius + 'px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '50%',
        display: "inline-block"
    };
    return (
        <div style={style} onClick={onClick}>
        </div>
    )
}
AvatarIcon.propTypes = {
    url: PropTypes.string.isRequired,
    radius: PropTypes.number.isRequired,
    onClick: PropTypes.func,
    label: PropTypes.string
};
