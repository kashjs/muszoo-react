import React from 'react';
import {MZButton} from 'muszoo-react/Button';
import {MZNavbar} from 'muszoo-react/Navbar';

export class Examples extends React.Component {
    render() {
        return <div>
            <h3>Buttons</h3>
            <MZButton>Default</MZButton>
            <MZButton btnType="prime">Prime</MZButton>
            <MZButton btnType="success">Success</MZButton>
            <MZButton btnType="warning">Warning</MZButton>
            <MZButton btnType="danger">Danger</MZButton>
            <h3>Navbar</h3>
            <MZNavbar>Welcome to Muszoo React</MZNavbar>
        </div>
    }
}
