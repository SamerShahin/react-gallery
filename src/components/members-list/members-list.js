import React from 'react';
import PropTypes from 'prop-types';
import AvatarIcon from '../avatar-icon';
import Scrollbars from 'react-custom-scrollbars';
import CheckBox from "./checkbox";

const ActionBox = ({id}) => {
    return <CheckBox isChecked onChange={(val, id) => {
        console.log(val, id)
    }} id={id}/>
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
                        <li style={{height: rowHeight}} key={member.id}>
                            <div  className="centering-element">
                                <section className="avatar-icon-container centering-element">
                                    <AvatarIcon label={member.name} radius={13} url={member.url} key={idx}/>
                                </section>
                                <section className="name-container">
                                    <label>{member.name}</label>
                                </section>
                                <section className="action-container">
                                    <ActionBox id={member.id}/>
                                </section>
                            </div>
                            <hr className="thin-divider"/>
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
