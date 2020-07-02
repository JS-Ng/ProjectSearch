import React from "react";
import CustomNavbar from "../common/widgets/CustomNavbar";
import BootstrapComponent from "../core/BootstrapComponent";
import "./page404.css";
import {Row, Col } from "react-bootstrap";
import BgContainer from '../common/background/BgContainer.component';
class NotFoundPage extends BootstrapComponent {
   

    render() { 
        return (
            <>
                <CustomNavbar/>
                <BgContainer>
                    <Row className="row-404">
                        <div className="col-md-12">
                            <div className="error-template">
                                <h1 className="">404 NOT FOUND</h1>
                            </div>
                            <div className="error-details">
                                Sorry, an error has occured, Requested page not found!
                            </div> 
                        </div>
                    </Row>
                    <Row className="row-404">
                        <Col className="custom-col">
                            <div className="col-md-12 view overlay zoom">
                                <div className="error-template mask flex-center">
                                    <h2>
                                    Back to your profile</h2>
                                    
                                    <div className="error-actions">
                                        <a href="#" className="btn btn-primary btn-lg"><span className="glyphicon glyphicon-home"></span>
                                            Profile </a>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col className="custom-col">
                            <div className="col-md-12">
                                <div className="error-template">
                                    <h2>
                                    Try draw a new card</h2>
                                    <div className="error-actions">
                                        <a href="#" className="btn btn-primary btn-lg"><span className="glyphicon glyphicon-home"></span>
                                            Draw Card </a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </BgContainer>
            </>
        );
    }
}

export default NotFoundPage;