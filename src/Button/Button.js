import React from 'react';

export class MZButton extends React.Component {
    render() {
        let className = 'mz-button ' + this.props.btnType;
        return <button className={className}>{this.props.children}</button>
    }
}

MZButton.propTypes = {
    btnType: React.PropTypes.string.isRequired
}