import React from 'react';

export class MZButton extends React.Component {
    render() {
        let className = 'mz-button ' + this.props.className;
        return <button onClick={this.props.onClick} className={className}>{this.props.children}</button>
    }
}

MZButton.propTypes = {
    className: React.PropTypes.string,
    onClick: React.PropTypes.func
};

MZButton.defaultProps = {
    className: ''
};