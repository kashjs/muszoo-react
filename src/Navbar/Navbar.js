import React from 'react';

export class MZNavbar extends React.Component {
    render() {
        let className = 'mz-navbar ' + this.props.className;
        return <nav className={className}>{this.props.children}</nav>
    }
}

MZNavbar.propTypes = {
    className: React.PropTypes.string
};

MZNavbar.defaultProps = {
    className: ''
};


export class MZNavbarGroup extends React.Component {
    render() {
        let className = 'mz-navbar-group ' + this.props.className;
        return <div className={className}>{this.props.children}</div>
    }
}

MZNavbarGroup.propTypes = {
    className: React.PropTypes.string
};

MZNavbarGroup.defaultProps = {
    className: ''
};


export class MZNavbarBrand extends React.Component {
    render() {
        let className = 'mz-navbar-brand ' + this.props.className;
        return <div className={className}>{this.props.children}</div>
    }
}

MZNavbarBrand.propTypes = {
    className: React.PropTypes.string
};

MZNavbarBrand.defaultProps = {
    className: ''
};

export class MZNavbarItem extends React.Component {
    render() {
        let className = 'mz-navbar-item ' + this.props.className;
        return <a className={className} href={this.props.href}>{this.props.children}</a>
    }
}

MZNavbarItem.propTypes = {
    className: React.PropTypes.string,
    href: React.PropTypes.string
};

MZNavbarItem.defaultProps = {
    className: ''
};