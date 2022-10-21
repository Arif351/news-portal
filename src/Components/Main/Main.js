import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import LeftsideNav from '../Shared/LeftsideNav/LeftsideNav';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import Footer from '../Shared/Footer/Footer';

const Main = () => {

    return (
        <div>
            <Container>
                <Row>
                    <Col lg="3">
                        <LeftsideNav>

                        </LeftsideNav>
                    </Col>
                    <Col lg="6">
                        <Outlet></Outlet>
                    </Col>
                    <Col lg="3">
                        <RightSideNav>

                        </RightSideNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;