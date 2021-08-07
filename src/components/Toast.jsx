import React, { useState} from 'react';
import { Toast, Col, Row } from 'react-bootstrap';

function Toastt() {
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);

  return (
    <Row  style={{color:"white", backgroundColor:"black", fontSize:6}}>
      <Col >
        <Toast show={showA} onClose={toggleShowA}>
          <Toast.Body style={{color:"white", backgroundColor:"black", fontSize:6}}>
          <p>KYL Official ERC-20 Contract is 0x67B6D479c7bB412C54e03dCA8E1Bc6740ce6b99C</p>
          <Toast.Header></Toast.Header>
          </Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
}
export default Toastt;