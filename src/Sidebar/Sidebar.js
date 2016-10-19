import React from 'react';

export class MZSidebar extends React.Component {
    render() {
        let className = 'mz-sidebar ' + this.props.className;
        return <div className={className + ` ${this.props.active? 'active' : ''}`}>
            {this.props.children}
        </div>
    }
}

MZSidebar.propTypes = {
    className: React.PropTypes.string,
    active: React.PropTypes.bool
};

MZSidebar.defaultProps = {
    className: '',
    active: false
};