import React, { Component } from 'react'
import { Row, Col, Button } from 'react-bootstrap';
export class Oracle extends Component {
    render() {
        return (
            <div>
                <div style={{textAlign: "center", color:"white",}}>
                <h3>Data<span className="diffcolor"> Oracle</span></h3>
            </div>
                <div style={{padding: 80,backgroundColor:'#c70c59',margin:30, borderRadius:20, color:"white",}}>
                <Row style={{backgroundColor:"#c70c59"}}>
                    <Col style={{backgroundColor:"#c70c59"}} >
                    <Row style={{backgroundColor:"#c70c59"}} >
                        <p style={{marginRight:'100px',backgroundColor:'#c70c59',fontSize:20, marginBottom:30, fontFamily:"cursive"}}>
                            Kylin Oracle is an advanced decentralized data feeding protocol powered by Polkadot/Substrate
                            offering multiple, real-time data sources with the complementarity and synergy to off-chain workers.
                        </p>
                    </Row>
                </Col>
                <Col  style={{backgroundColor:"#c70c59"}}>
                    <Row style={{marginLeft:90,width:'180px', marginBottom:30 ,}}><Button style={{backgroundColor:"black"}} ><a href="https://polkadot.network/technology/">Discover Polkadot</a></Button></Row>
                    <Row style={{marginLeft:90,width:'180px', marginBottom:20}}><Button  style={{backgroundColor:"black"}}><a href="https://www.parity.io/substrate/">Discover Substrate</a></Button></Row>
                </Col>
                </Row>
            </div>
            </div>
        )
    }
}
export default Oracle;
