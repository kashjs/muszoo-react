import React from 'react';

export class MZButton extends React.Component {
    render() {
        let className = 'mz-button ' + this.props.className;
        return <button className={className}>{this.props.children}</button>
    }
}

MZButton.propTypes = {
    className: React.PropTypes.string
};

MZButton.defaultProps = {
    className: ''
};