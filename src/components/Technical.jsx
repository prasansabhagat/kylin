import React, { Component } from 'react'
import { Row, Col, Button } from 'react-bootstrap';
export class Technical extends Component {
    render() {
        return (
            <div id="Technical" style={{ color:"white", margin:30, padding:20}}>
                <Row style={{paddingBottom:50,margin:50,}}>
                    <Col sm><h3>Technical<br></br> <h3 className="diffcolor">Architecture</h3></h3></Col>
                    <Col sm><p style={{textAlign:"justify", margin:30}}>Kylin Network offers any applications and blockchains (such as parachains and parathreads)
                     instantaneous but reliable and valid on/off-chain market data and social data sources by leveraging the power of Polkadot/Substrate Framework on open networks.</p></Col>
                </Row>
                <Row>
                    <Col >
                        <Row>
                            <Col sm style={{marginLeft:30}}><img style={{height: 94, width: 69}} src="https://kylin.network/technology_bg_active_3.49e2ea6a.png"></img></Col>
                            <Col sm><p>Kylin Data Analytics is a combination of analytic tools designed for data warehouses. It provides a query engine and RESTful API for third-party applications and external analytics tools.</p></Col>
                        </Row>
                    </Col>
                    <Col style={{}}>
                        <Row>
                             <Col sm style={{marginLeft:70}}><img style={{height: 84, width: 69}} src="https://kylin.network/technology_bg_active_1.37f2dfd2.png"></img></Col>
                             <Col sm><p>Kylin Data Oracle is an advanced decentralized data feeding protocol powered by Polkadot/Substrate offering multiple, real-time data sources with complementarity to and synergy with off-chain workers.</p></Col>
                        </Row>   
                    </Col>
                </Row>
                <Row>
                    <Col style={{}}>
                       <Row>
                            <Col sm style={{marginLeft:30}}><img style={{height: 84, width: 84}} src="https://kylin.network/technology_bg_active_2.6b573191.png"></img></Col>
                        <Col sm><p>Kylin Data Marketplace is an open platform for data exchange and pricing. Dapps built on Polkadot can easily and efficiently collect both off-chain and on-chain data only paying a very competitive fee.</p></Col>
                       </Row>
                    </Col>
                    <Col>
                      <Row>
                            <Col sm style={{marginLeft:70}}><img style={{height: 84, width: 79}} src="https://kylin.network/technology_bg_active_4.57948281.png"></img></Col>
                        <Col sm><p>Kylin Token $KYL is the native token of Kylin Network which will play the role of governance and other utilities. $KYL is necessary to secure and power the decentralized data network.</p></Col>
                      </Row>
                    </Col>
                </Row>
                <Row>
                    <Button style={{backgroundColor:"black",marginLeft:'42%', width:'22%', marginTop:30 }}><a href="https://wiki.kylin.network/">Read More</a></Button>
                </Row>
            </div>
        )
    }
}
export default Technical;
