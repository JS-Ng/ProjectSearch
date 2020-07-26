import React from "react";
import CustomNavbar from "../common/widgets/CustomNavbar";
import BootstrapComponent from "../core/BootstrapComponent";
import "./homePage.css";
import { Row, Col } from "react-bootstrap";
import CardZone from '../common/cardzone/cardzone.component';
import BgContainer from '../common/background/BgContainer.component';
import {SideBar}from '../common/sidebar/sidebar.component';

class HomePage extends BootstrapComponent {
    render() { 
        return (
            <>
                <CustomNavbar />
                <BgContainer>
                    <CardZone></CardZone>
                </BgContainer>
                
            </>
        );
    }
}

export default HomePage;