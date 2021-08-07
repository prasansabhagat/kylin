import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';
export class Economics extends Component {
    render() {
        return (
            <div>
                <div style={{paddingBottom:'80px'}}>
                <div>
                    <h5 style={{paddingBottom:30, textAlign:"center", color:"white", fontSize:'30px'}}>Token <span className="diffcolor">Economics</span></h5>
                </div>
                <p style={{paddingBottom:30, textAlign:"center", color:"white", fontSize:'15px'}}>The Kylin Network Mainnet token KYL is necessary to secure and power the decentralized data network.<br></br>
                 The use-cases and utility of KYL include but not limited to:</p>
                 <Row style={{ textAlign:"center",color:"white", margin:40, padding:20}}>
                     <Col sm style={{ textAlign:"center",}}>
                     <Row><img style={{marginLeft:'35%', height: 44, width: 99}} src="https://kylin.network/economics_row_1.aaa18081.svg"></img></Row><br></br>
                     <Row><h4 >Stake to be a Miner or Arbitrator</h4></Row><br></br>
                     <Row style={{ paddingBottom:40,}}><p  >All miners are required to stake KYL with a higher stake equating in a high probability of being selected to fulfill data requests.</p></Row>
                 </Col>
                 <Col sm>
                     <Row><img style={{marginLeft:'35%', height: 44, width: 99}} src="https://kylin.network/economics_row_2.6a0d67f4.svg"></img></Row><br></br>
                     <Row><h4  >Intermediary of Exchange</h4></Row><br></br>
                     <Row style={{ paddingBottom:40,}}><p  >KYL tokens will be used to pay as a transaction, query fee, and also for data access behind paywall (private APIs).</p></Row>
                 </Col>
                 <Col sm>
                     <Row><img style={{marginLeft:'35%', height: 44, width: 99}} src="https://kylin.network/economics_row_3.8f59747f.svg"></img></Row><br></br>
                     <Row><h4>KYL tokens will be used to pay as a transaction, query fee, and also for data access behind paywall (private APIs).</h4></Row><br></br>
                     <Row style={{ paddingBottom:40,}}><p >KYL tokens will be used to pay as a transaction, query fee, and also for data access behind paywall (private APIs).</p></Row>
                 </Col>
                 </Row>
            </div>
            </div>
        )
    }
}

export default Economics;
