import React, { Component } from 'react'
import { Row, Col, } from 'react-bootstrap';

export class Application extends Component {
    render() {
        
        return (
            <div style={{color:"white", margin:50}}>
                <div style={{paddingBottom:'80px'}}>
                <div>
                    <h5 style={{paddingBottom:30, textAlign:"center", color:"white", fontSize:'30px'}}>Application <span className="diffcolor"> Scenarios</span></h5>
                </div>
                <Row style={{ backgroundColor:"#"}}>
                    <Col sm style={{margin:25,}}    >
                        <div >
                        <Row><img style={{height: 24, width: 99}} src="https://kylin.network/application_1.e6eb71d8.svg"></img></Row><br></br>
                        <Row><h5 className="diffcolor">Decentralized Insurance Automatic Payment</h5></Row><br></br>
                        <Row><p>Through the Kylin Network to obtain timely and reliable events outside the insured chain, blockchain-based decentralized insurance can realize automatic payment of insurance such as flight delay insurance.</p></Row>
                    
                        </div>    
                    </Col>
                    
                    <Col sm style={{marginLeft:0, padding:30}}>
                        <Row><img style={{height: 24, width: 99}} src="https://kylin.network/application_2.7aa6c624.svg"></img></Row><br></br>
                        <Row><h5 className="diffcolor">Stable Coins and Crypto Derivatives</h5></Row><br></br>
                        <Row><p>Stablecoins and encrypted derivatives need to frequently obtain off-chain real-time price data. Kylin Network can obtain reliable data in multiple scenarios in real time and efficiently.</p></Row>
                    </Col>
                    <Col sm style={{marginLeft:0, padding:30}}  >
                        <Row><img style={{height: 24, width: 99}} src="https://kylin.network/application_3.d4cfb338.svg"></img></Row><br></br>
                        <Row><h5 className="diffcolor">Crypto Asset Lending Platform</h5></Row>
                        <Row><p>Kylin Network can provide real-time and reliable currency prices and borrower’s social media information, providing strong support for the dynamic determination of loan interest rates.</p></Row>
                    </Col>
                </Row><br></br>
                <Row>
                    <Col sm style={{marginLeft:0, padding:30}}  >
                        <Row><img style={{height: 24, width: 99}} src="https://kylin.network/application_4.fd6a183e.svg"></img></Row><br></br>
                        <Row><h5 className="diffcolor">Cross-chain Decentralized Exchange</h5></Row>
                        <Row><p>The lightweight Kylin Network interface that can be deployed on multiple chains provides the possibility for decentralized exchanges to realize cross-chain atomic transactions.</p></Row>
                    </Col>
                    <Col sm  style={{marginLeft:0, padding:30}} >
                        <Row><img style={{height: 24, width: 99}} src="https://kylin.network/application_5.e2b14ac2.svg"></img></Row><br></br>
                        <Row><h5 className="diffcolor">Decentralized Casinos and Games</h5></Row>
                        <Row><p>On-chain decentralized casinos and games often require safe and reliable random injection. Kylin Network random number engine provides unpredictable and verifiable random number generation.</p></Row>
                    </Col>
                    <Col sm style={{marginLeft:0, padding:30}}  >
                        <Row><img style={{height:24, width: 99}} src="https://kylin.network/application_6.c73f06a3.svg"></img></Row><br></br>
                        <Row><h5 className="diffcolor">Blockchain Computing Market</h5></Row>
                        <Row><p>Commercial computing such as machine learning training models and 3D rendering needs to complete a variety of complex computing tasks. The off-chain computing market provides verifiable and unlimited off-chain computing capabilities.</p></Row>
                    </Col>
                </Row><br></br>
             
            </div>
            </div>
        )
    }
}

export default Application;