import React, { Component } from 'react'
import { Row, Col, Button } from 'react-bootstrap';
export class Dao extends Component {
    render() {
        return (
            <div style={{paddingBottom: 40}}>
                <Row>
                    <h5 style={{paddingBottom:20, textAlign:"center", color:"white", fontSize:'30px'}}>DAO</h5>
                </Row>
                <Row>
                    <p style={{paddingBottom:30,margin:20, textAlign:"center", color:"white", fontSize:'15px'}}>Kylin DAO is aiming to provide tools to facilitate technology development, voting and governance.</p>
                </Row>
                <Row style={{padding:30, textAlign:"justify", color:"white",marginLeft:90, backgroundColor:"#c70c59", marginRight:90, borderRadius:'10px', boxShadow:'12px 12px #200002'}}>
                    <Row style={{backgroundColor:"#c70c59", }}>
                    <h6 style={{backgroundColor:"#c70c59", fontSize:'15px', padding:15}}>KYL Stakeholders will assume a central role in suggesting and determining the priorities of Kylin Network through the Governance Committee, 
                    whilst the Board will act as guarantor that the Kylin Network principles of privacy with accountability and the
                     Public Deed of the Kylin Network Project are adhered to.</h6>
                </Row>
                <Row style={{backgroundColor:"#c70c59"}}>
                    <Col style={{backgroundColor:"#c70c59"}} ></Col><Col style={{backgroundColor:"#c70c59"}}></Col><Col style={{backgroundColor:"#c70c59"}}></Col>
                    <Col style={{backgroundColor:"#c70c59"}} ><Button style={{backgroundColor:"#c70c59", color:"white"}}><a href="https://snapshot.org/#/kyl.eth">DAO</a></Button></Col>
                </Row>
                </Row>
            </div>
        )
    }
}
export default Dao;
