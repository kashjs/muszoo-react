import React from 'react';
import {Examples} from './Examples';
import {MZNavbar, MZNavbarGroup, MZNavbarBrand, MZNavbarItem} from 'muszoo-react/Navbar';
import {MZSidebar} from 'muszoo-react/Sidebar';

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showSidebar: false
        };
    };

    handleClick() {
        this.setState({showSidebar: !this.state.showSidebar})
    };

    render() {
        var self = this;
        return <div>
            <div className="sideBar">
                <MZSidebar className="mz-fixed-left"
                           active={this.state.showSidebar}>
                    <MZNavbar className="mz-flex mz-dark mz-flex-align-stretch">
                        <MZNavbarGroup className="mz-flex-group-left"></MZNavbarGroup>
                        <MZNavbarGroup>
                            Sidebar Title
                        </MZNavbarGroup>
                        <MZNavbarGroup className="mz-flex-group-right">
                            <MZNavbarItem onClick={this.handleClick.bind(self)}><i className="fa fa-angle-left"></i></MZNavbarItem>
                        </MZNavbarGroup>
                    </MZNavbar>
                </MZSidebar>
            </div>
            <div>
                <MZNavbar className="mz-flex mz-dark mz-fixed-top mz-shadow mz-flex-align-stretch">
                    <MZNavbarGroup className="mz-flex-group-left">
                        <MZNavbarItem onClick={this.handleClick.bind(this)}><i className="fa fa-bars"></i></MZNavbarItem>
                    </MZNavbarGroup>
                    <MZNavbarGroup className="mz-flex-group-left">
                        <MZNavbarBrand>MusZoo React</MZNavbarBrand>
                    </MZNavbarGroup>
                    <MZNavbarGroup className="mz-flex-group-right">
                        <MZNavbarItem href="https://github.com/kashjs/muszoo-react">Source</MZNavbarItem>
                    </MZNavbarGroup>
                </MZNavbar>
                <Examples></Examples>
                <p><em>NOTE: This project is under development.</em></p>
            </div>
        </div>
    }
}