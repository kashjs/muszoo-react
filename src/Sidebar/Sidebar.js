import React from 'react';
import PropTypes from 'prop-types';

export class MZSidebar extends React.Component {
    render() {
        let className = 'mz-sidebar ' + this.props.className;
        return <div className={className + ` ${this.props.active? 'active' : ''}`}>
            {this.props.children}
        </div>
    }
}

MZSidebar.propTypes = {
    className: PropTypes.string,
    active: PropTypes.bool
};

MZSidebar.defaultProps = {
    className: '',
    active: false
};