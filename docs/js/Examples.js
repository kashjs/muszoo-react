import React from 'react';
import {MZButton} from 'muszoo-react/Button';

export class Examples extends React.Component {
    render() {
        return <div>
            <h1>Buttons</h1>
            <MZButton>Default</MZButton>
            <MZButton btnType="prime">Prime</MZButton>
            <MZButton btnType="success">Success</MZButton>
            <MZButton btnType="warning">Warning</MZButton>
            <MZButton btnType="danger">Danger</MZButton>
        </div>
    }
}
