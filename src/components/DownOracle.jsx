import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';
export class DownOracle extends Component {
    render() {
        return (
            <div style={{color:"white", padding:50}}>
                <Row>
                    <Col>
                        <Row><img style={{height: 24, width: 99}} src="https://kylin.network/architect_1.170d4b44.svg"></img></Row><br></br>
                        <Row><h5>Data Consumer</h5></Row>
                        <Row><p>Data consumers may represent smart contracts, APIs, blockchains, protocols, applications or any data repository.</p></Row>
                    </Col>
                    <Col>
                        <Row><img style={{height: 24, width: 99}} src="https://kylin.network/architect_2.00820775.svg"></img></Row><br></br>
                        <Row><h5>Data Warehouse</h5></Row>
                        <Row><p>Data Warehouse in Kylin Protocol is a decentralised on-chain repository of integrated data from one or more disparate data sources such as Oracle Nodes and the Arbitration Nodes.</p></Row>
                    </Col>
                    <Col>
                        <Row><img style={{height: 24, width: 99}} src="https://kylin.network/architect_3.70fce143.svg"></img></Row><br></br>
                        <Row><h5>Oracle Node (Miner)</h5></Row>
                        <Row style={{paddingBottom: 30}}><p>Oracle Node handles all the data requests such as social data and market data from separate off-chain data sources, and signing the transactions of the Kylin parachain.</p></Row>
                    </Col>
                </Row>
                <Row style={{paddingBottom: 30}}>
                    <Col>
                        <Row><img style={{height: 24, width: 99}} src="https://kylin.network/architect_4.e164ff9e.svg"></img></Row><br></br>
                        <Row><h5>Arbitration Node (Arbitrator)</h5></Row>
                        <Row><p>Arbitration Node guarantees the security and accuracy of external data by verifying the data integrity and the validity that Oracle Node provided.</p></Row>
                    </Col>
                    <Col>
                        <Row><img style={{height: 24, width: 99}} src="https://kylin.network/architect_5.37f3bba9.svg"></img></Row><br></br>
                        <Row><h5>Blockchain Node (Validator)</h5></Row>
                        <Row><p>The bottom layer of Kylin Oracle is mainly built on a specialized blockchain network established by Substrate.</p></Row>
                    </Col>
                    <Col></Col>
                </Row>
            </div>
        )
    }
}

export default DownOracle;
