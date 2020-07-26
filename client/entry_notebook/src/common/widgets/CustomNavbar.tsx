import React from 'react';
import BootstrapComponent from "../../core/BootstrapComponent"
import brand from "../../img/brand.jpg";
import "./customNavbar.css";
import {
    Navbar, Form,
    FormControl, Button, Image
} from 'react-bootstrap';
import { SideBar } from '../sidebar/sidebar.component';
class CustomNavbar extends BootstrapComponent { 

    render() { 
        return (
            <div className="navbar-wrapper">
                <SideBar></SideBar>
                <Navbar bg="light" expand="lg" className="navbar">
                    {/* <Navbar.Brand href="#home"><Image src={brand} alt="Note" className="rounded-circle brand"></Image></Navbar.Brand> */}
                    <Form inline className="mx-auto">
                        
                        <FormControl type="text" placeholder="Search" className="mr-sm-2 nav-search" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar>
            </div>
        );
    }
}

export default CustomNavbar;