import React from 'react';

export class MZNavbar extends React.Component {
    render() {
        let className = 'mz-navbar ' + this.props.navType;
        return <nav className={className}>{this.props.children}</nav>
    }
}

MZNavbar.propTypes = {
    navType: React.PropTypes.string
};

MZNavbar.defaultProps = {
    navType: ''
};