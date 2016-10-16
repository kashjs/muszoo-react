import React from 'react';

export class MZButton extends React.Component {
    render() {
        let className = 'mz-button ' + this.props.type;
        return <button className={className}>{this.props.children}</button>
    }
}

MZButton.propTypes = {
    type: React.PropTypes.string
};

MZButton.defaultProps = {
    type: ''
};