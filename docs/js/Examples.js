import React from 'react';
import {MZButton} from 'muszoo-react/Button';
import {MZNavbar, MZNavbarGroup, MZNavbarBrand, MZNavbarItem} from 'muszoo-react/Navbar';
import {MZSidebar} from 'muszoo-react/Sidebar';

export class Examples extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showSidebarDark: false,
            showSidebarLight: false
        };
    };

    handleSidebarToggleDark() {
        this.setState({showSidebarDark: !this.state.showSidebarDark})
    };
    handleSidebarToggleLight() {
        this.setState({showSidebarLight: !this.state.showSidebarLight})
    };

    render() {
        var self = this;
        return <div>
            <h2>Buttons</h2>
            <p>regular</p>
            <MZButton>Default</MZButton>
            <MZButton className="mz-prime">Prime</MZButton>
            <MZButton className="mz-success">Success</MZButton>
            <MZButton className="mz-info">Info</MZButton>
            <MZButton className="mz-warning">Warning</MZButton>
            <MZButton className="mz-danger">Danger</MZButton>

            <p>transparent</p>
            <MZButton className="mz-transparent">Default</MZButton>
            <MZButton className="mz-prime mz-transparent">Prime</MZButton>
            <MZButton className="mz-success mz-transparent">Success</MZButton>
            <MZButton className="mz-info mz-transparent">Info</MZButton>
            <MZButton className="mz-warning mz-transparent">Warning</MZButton>
            <MZButton className="mz-danger mz-transparent">Danger</MZButton>


            <h2>Navbar</h2>
            <MZNavbar className="mz-flex mz-flex-align-stretch">
                <MZNavbarGroup className="mz-flex-group-left">
                    <MZNavbarBrand>MusZoo React</MZNavbarBrand>
                </MZNavbarGroup>
                <MZNavbarGroup className="mz-flex-fluid">
                    <MZNavbarItem href="#">Source</MZNavbarItem>
                    <MZNavbarItem href="#">Docs</MZNavbarItem>
                </MZNavbarGroup>
                <MZNavbarGroup className="mz-flex-group-right">
                    <MZNavbarItem href="#">
                        Signup
                    </MZNavbarItem>
                </MZNavbarGroup>
            </MZNavbar>
            <p>.mz-light</p>
            <MZNavbar className="mz-light mz-flex mz-flex-align-stretch">
                <MZNavbarGroup className="mz-flex-group-left">
                    <MZNavbarBrand>MusZoo React</MZNavbarBrand>
                </MZNavbarGroup>
                <MZNavbarGroup className="mz-flex-fluid">
                    <MZNavbarItem href="#">Source</MZNavbarItem>
                    <MZNavbarItem href="#">Docs</MZNavbarItem>
                </MZNavbarGroup>
                <MZNavbarGroup className="mz-flex-group-right">
                    <MZNavbarItem href="#">
                        Signup
                    </MZNavbarItem>
                </MZNavbarGroup>
            </MZNavbar>

            <h2>Sidenav</h2>

            <MZButton onClick={this.handleSidebarToggleDark.bind(self)}>Regular Sidenav - Toggle</MZButton>
            <MZSidebar className="mz-fixed-right"
                       active={this.state.showSidebarDark}>
                <MZNavbar className="mz-flex mz-flex-align-stretch">
                    <MZNavbarGroup className="mz-flex-group-left">
                        <MZNavbarItem onClick={this.handleSidebarToggleDark.bind(self)}><i className="fa fa-angle-right"></i></MZNavbarItem>
                    </MZNavbarGroup>
                    <MZNavbarGroup>
                        Sidebar Title
                    </MZNavbarGroup>
                    <MZNavbarGroup className="mz-flex-group-right"></MZNavbarGroup>
                </MZNavbar>
            </MZSidebar>

            <MZButton onClick={this.handleSidebarToggleLight.bind(self)}>Light Sidenav - Toggle</MZButton>
            <MZSidebar className="mz-fixed-right mz-light"
                       active={this.state.showSidebarLight}>
                <MZNavbar className="mz-flex mz-light mz-flex-align-stretch">
                    <MZNavbarGroup className="mz-flex-group-left">
                        <MZNavbarItem onClick={this.handleSidebarToggleLight.bind(self)}><i className="fa fa-angle-right"></i></MZNavbarItem>
                    </MZNavbarGroup>
                    <MZNavbarGroup>
                        Sidebar Title
                    </MZNavbarGroup>
                    <MZNavbarGroup className="mz-flex-group-right"></MZNavbarGroup>
                </MZNavbar>
            </MZSidebar>
        </div>
    }
}
