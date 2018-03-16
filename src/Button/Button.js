import React from 'react';
import PropTypes from 'prop-types';
import {TapAnimationContent} from '../TapAnimation/TapAnimation';

export class MZButton extends React.Component {
    render() {
        let className = 'mz-button ' + this.props.className;
        return <button onClick={this.props.onClick} className={className} disabled={this.props.disabled}>
            <TapAnimationContent>
                {this.props.children}
            </TapAnimationContent>
        </button>
    }
}

MZButton.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func
};

MZButton.defaultProps = {
    className: ''
};