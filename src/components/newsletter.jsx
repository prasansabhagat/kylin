import React, { Component } from 'react'
import { Form,
    Button, Row, Col } from 'react-bootstrap';
export class Newsletter extends Component {
    render() {
        return (
            <div>
                <Form style={{paddingBottom:'70px'}}>
                    <Row>
                    <Col></Col>
                    <Col >
                    <Form.Group controlId="formBasicEmail">
                    <Form.Control style={{textAlign:"center", width:'240px',color:"black",borderRadius:15, backgroundColor:"#f9f9f"}} type="email" placeholder="Join our Newsletter" />
                    </Form.Group></Col>
                    <Col> <Button style={{backgroundColor:"#c70c59",borderRadius:15}} type="submit">Subscribe</Button></Col>
                    <Col></Col>
                    </Row>
                </Form><br></br>
            </div>
        )
    }
}

export default Newsletter;
