import React from 'react';
import {TapAnimationContent} from '../TapAnimation/TapAnimation';

export class MZButton extends React.Component {
    render() {
        let className = 'mz-button ' + this.props.className;
        return <button onClick={this.props.onClick} className={className}>
            <TapAnimationContent>
                {this.props.children}
            </TapAnimationContent>
        </button>
    }
}

MZButton.propTypes = {
    className: React.PropTypes.string,
    onClick: React.PropTypes.func
};

MZButton.defaultProps = {
    className: ''
};