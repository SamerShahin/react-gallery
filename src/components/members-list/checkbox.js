import React from "react";
import PropTypes from "prop-types";

class CheckBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isChecked: props.isChecked};
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({isChecked: e.target.checked});
        this.props.onChange(e.target.checked,this.props.id);
    }

    render() {
        let isChecked = this.state.isChecked;
        return (
            <div className="members-checkbox">
                <label className="container">
                    <input type="checkbox" onChange={this.onChange} checked={isChecked}/>
                    <span className="checkmark"/>
                </label>
            </div>
        )
    }
}

CheckBox.propTypes = {
    isChecked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
};

export default CheckBox;
