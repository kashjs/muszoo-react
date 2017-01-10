import React from 'react';
import {TapAnimationContent} from '../TapAnimation/TapAnimation';
import Radium from 'radium';
var styles = require('./Button-styles');

export class MZButton extends React.Component {
    render() {
        let className = 'mz-button ' + this.props.className;
        return <button style={[
                styles.root,
                this.props.mzDefault && styles.kind.default,
                this.props.mzPrimary && styles.kind.primary,
                this.props.mzSuccess && styles.kind.success,
                this.props.mzInfo && styles.kind.info,
                this.props.mzWarning && styles.kind.warning,
                this.props.mzDanger && styles.kind.danger,
                this.props.mzFlat && styles.kind.flat,
            ]} onClick={this.props.onClick} className={className} disabled={this.props.disabled}>
            <TapAnimationContent>
                {this.props.children}
            </TapAnimationContent>
        </button>
    }
}
MZButton = Radium(MZButton);

MZButton.propTypes = {
    className: React.PropTypes.string,
    onClick: React.PropTypes.func
};

MZButton.defaultProps = {
    className: ''
};