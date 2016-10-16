import React from 'react';

export class MZNavbar extends React.Component {
    render() {
        let className = 'mz-navbar ' + this.props.type;
        return <nav className={className}>{this.props.children}</nav>
    }
}

MZNavbar.propTypes = {
    type: React.PropTypes.string
};

MZNavbar.defaultProps = {
    type: ''
};


export class MZNavbarGroup extends React.Component {
    render() {
        let className = 'mz-navbar-group ' + this.props.type;
        return <div className={className}>{this.props.children}</div>
    }
}

MZNavbarGroup.propTypes = {
    type: React.PropTypes.string
};

MZNavbarGroup.defaultProps = {
    type: ''
};


export class MZNavbarBrand extends React.Component {
    render() {
        let className = 'mz-navbar-brand ' + this.props.type;
        return <div className={className}>{this.props.children}</div>
    }
}

MZNavbarBrand.propTypes = {
    type: React.PropTypes.string
};

MZNavbarBrand.defaultProps = {
    type: ''
};

export class MZNavbarItem extends React.Component {
    render() {
        let className = 'mz-navbar-item ' + this.props.type;
        return <a className={className} href={this.props.href}>{this.props.children}</a>
    }
}

MZNavbarItem.propTypes = {
    type: React.PropTypes.string,
    href: React.PropTypes.string
};

MZNavbarItem.defaultProps = {
    type: ''
};