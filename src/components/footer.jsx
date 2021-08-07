import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
export default class footer extends Component {
    render() {
        return (
            <div>
                <Container style={{boxShadow: "0px 0px 0px 0px #9E9E9E", width:'100%',padding:50}}>
                <span>
                    <Row>
                        <Col ><img style={{height: 74, width: 99}} src="https://kylin.network/logoWhite.1cfda3b9.svg"></img></Col>
                        <Col ><img style={{height: 44,marginTop:20, width: 99}} src="https://kylin.network/foundation.c79c05e6.png"></img></Col>
                    </Row><br></br>
                    <Row style={{marginLeft:"auto"}}>Copyright: 2021 The Kylin Project. All Rights Reserved</Row><br></br>
                    <Row>
                        <Col ><a  href="https://t.me/KylinOfficial"><img src="https://kylin.network/link_t.62268fc8.svg"></img></a></Col>
                        <Col xs><img src="https://kylin.network/link_m.3100f294.svg" alt="telegram"></img></Col>
                        <Col xs><img href="https://kylinnetwork.medium.com/" src="https://kylin.network/link_f.ae02af51.svg"></img></Col>
                        <Col xs><img src="https://kylin.network/link_weixin.b5d892d9.svg"></img></Col>
                        <Col xs><img src="https://kylin.network/link_discord.c1ea5866.svg"></img></Col>
                        <Col xs><img src="https://kylin.network/link_github.a71926fe.svg"></img></Col>
                        <Col xs><img src="https://kylin.network/link_in.9016f929.svg"></img></Col>
                        <Col xs><img src="https://kylin.network/link_email.3991d157.svg"></img></Col>
                    </Row><br></br>
                </span><span sm={6}></span>
                <span>
                    <h4>DISCLAIMER</h4>
                    <p>All the information on this website or other official channels is published for information purposes only and is only intended for institutional investors and sophisticated individual investors. 
                    Any services to be provided in the future will be subject to the terms of the legal agreements relating thereto. Nothing on this Site should be interpreted as the investment endorsement by Kylin Network or any other person. Kylin Network and its related services are not provided to any individual from the United States. 
                    Kylin Network aims to build a cross-chain platform powering the data economy on Polkadot.</p>
                </span>
                </Container>
            </div>
        )
    }
}
