// =============================================
// TEMPLATE FOR SIMPLIFIED BOOTSTRAP GRID SYSTEM
// (ADAPTED FROM NW BOOTCAMP CLASS ACTIVITIES)
// =============================================

import React, { Component } from 'react';
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

class PageNotFound extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>404 Page Not Found</h1>
                            <h1>
                                <span role="img" aria-label="Face With Rolling Eyes Emoji">
                                    🙄
                                </span>
                            </h1>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default PageNotFound;
