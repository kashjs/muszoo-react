import React from 'react';

export class TapAnimationContent extends React.Component {
    render() {
        return <span>
            <span className="mz-tap-animation-text">{this.props.children}</span>
            <span className="mz-tap-animation"></span>
        </span>
    }
}