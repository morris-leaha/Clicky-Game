import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";

class Dogs extends Component {
    // Class components should always call the base constructor with props (https://reactjs.org/docs/state-and-lifecycle.html)
    // The 'super' keyword is used to access and call functions on an object's parent
    // Have to bind to make sure functions have access to component attributes
    constructor(props) {
        super(props);
        this.scoreCheck = this.scoreCheck.bind(this);
        this.shuffleImages = this.shuffleImages.bind(this);
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Dogs;