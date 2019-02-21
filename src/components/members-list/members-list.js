import React from 'react';
import PropTypes from 'prop-types';
import AvatarIcon from '../avatar-icon';
import Scrollbars from 'react-custom-scrollbars';

const ActionBox = () => {
    return <div className="action-box">
        <input type="checkbox"/>
    </div>
};

class MembersList extends React.Component {

    render() {
        let {members, rowHeight, height, width} = this.props;
        console.log(this.props);
        return (<div className="members-list" style={{height: height + 'px', width: width + 'px'}}>
            <Scrollbars
                autoHideTimeout={100}
                autoHideDuration={200}
                autoHeight
                autoHeightMin={0}
                autoHeightMax={height} className="members-list-scrollbar">
                <ul>
                    {members.map((member, idx) => (
                        <li className="centering-element" style={{height: rowHeight}} key={member.id}>
                            <section className="avatar-icon-container centering-element">
                                <AvatarIcon label={member.name} radius={13} url={member.url} key={idx}/>
                            </section>
                            <section className="name-container">
                                <label>{member.name}</label>
                            </section>
                            <section className="action-container">
                                <ActionBox/>
                            </section>
                        </li>
                    ))}
                </ul>
            </Scrollbars>
        </div>)
    }
}


MembersList.propTypes = {
    members: PropTypes.arrayOf(PropTypes.shape({
        url: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    })),
    action: PropTypes.oneOf(["add", "delete"]).isRequired,
    onClick: PropTypes.func.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    rowHeight: PropTypes.number
};

export default MembersList;
