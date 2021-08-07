import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';
export class Investors extends Component {
    render() {
        return (
            <div>
                <div style={{paddingBottom:'80px'}}>
                <div>
                    <h5 style={{paddingBottom:30, textAlign:"center", color:"white", fontSize:'30px'}}>Strategic Investors</h5>
                </div>
                <Row><Col></Col>
                    <Col><img style={{height: 64, width: 99}} src = "https://kylin.network/investors_strate.62f9a573.png"></img></Col>
                    <Col><img style={{height: 54, width: 119}} src="https://kylin.network/investors_sig.9d8ae858.png"></img></Col>
                    <Col><img style={{height: 54, width: 99}} src="https://kylin.network/investors_pnyx.6e425730.png"></img></Col>
                    <Col><img style={{height: 44, width: 139}} src="https://kylin.network/investors_moon.5e03eb00.png"></img></Col>
                    <Col><img style={{height: 44, width: 119}} src="https://kylin.network/investors_au21.4d41a9e7.png"></img></Col>
                    <Col></Col>
                    </Row><br></br>
                <Row><Col></Col>
                    <Col><img style={{height: 54, width: 79}} src="https://kylin.network/investors_cms.5cd277a1.png"></img></Col>
                    <Col><img style={{height: 44, width: 99}} src="https://kylin.network/investors_zmt.9e5d72a1.png"></img></Col>
                    <Col><img style={{height: 44, width: 119}} src="https://kylin.network/investors_rare.0ccbda3e.png"></img></Col>
                    <Col><img style={{height: 44, width: 119}} src="https://kylin.network/investors_tenzor.537ed22c.png"></img></Col>
                    <Col><img style={{height: 44, width: 179}} src="https://kylin.network/investors_brilliance.fea0722c.png"></img></Col>
                    <Col></Col>
                </Row><br></br>
            </div>
            </div>
        )
    }
}

export default Investors;
