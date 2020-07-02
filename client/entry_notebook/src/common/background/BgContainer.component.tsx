import React from "react";
import { Container } from 'react-bootstrap';
import "./notebook.background.css";
import BootstrapComponent from "../../core/BootstrapComponent"
export default class BgContainer extends BootstrapComponent { 
    render() { 
        return (
            <Container className="global-background">
                
                {this.props.children}
            </Container>

        );
    }
}