import React from 'react';
import {TapAnimationContent} from '../TapAnimation/TapAnimation';

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
        return <div onClick={this.props.onClick} className={className}>
                <TapAnimationContent>
                    <a type="button" href={this.props.href}>{this.props.children}</a>
                </TapAnimationContent>
            </div>

    }
}

MZNavbarItem.propTypes = {
    className: React.PropTypes.string,
    href: React.PropTypes.string
};

MZNavbarItem.defaultProps = {
    className: ''
};