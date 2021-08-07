import React, { Component } from 'react'
import { Row,Col } from 'react-bootstrap';
export class Media extends Component {
    render() {
        return (
            <div style={{paddingBottom:'80px'}}>
                <div>
                    <h5 style={{paddingBottom:30, textAlign:"center", color:"white", fontSize:'40px'}}>Media</h5>
                </div>
                <Row>
                    <Col></Col>
                    <Col><a href="https://hackernoon.com/making-sense-of-price-oracles-in-defi-e42q3ziv"><img style={{height: 34, width: 149}} src="https://kylin.network/media_hack.65c35ac4.png"></img></a></Col>
                    <Col><a href="https://finance.yahoo.com/news/data-cloud-technologies-helped-giants-162504355.html"><img style={{height: 34, width: 129}} src="https://kylin.network/media_yahoo.601281b8.png"></img></a></Col>
                    <Col><a href="https://www.entrepreneur.com/article/358661"><img style={{height: 34, width: 129}} src="https://kylin.network/media_entre.b0c3685e.png"></img></a></Col>
                    <Col></Col>
                </Row><br></br><br></br>
                <Row>
                    <Col></Col>
                    <Col><a href="https://cointelegraph.com/news/blockchain-based-voting-systems-have-potential-despite-security-concerns"><img style={{height: 34, width: 129}} src="https://kylin.network/media_cointelegraph.6be1edcb.png"></img></a></Col>
                    <Col><a href="https://bitcoinist.com/kylin-launches-oracles-to-protect-defi-against-manipulation/"><img style={{height: 34, width: 129}} src="https://kylin.network/media_bitcoin.659401db.png"></img></a></Col>
                    <Col><a href="https://www.benzinga.com/markets/cryptocurrency/20/11/18281275/kylin-network-launches-trustless-data-infrastructure-for-defi-and-web-3-0"><img style={{height: 34, width: 129}} src="https://kylin.network/media_benzi.2aff645b.png"></img></a></Col>
                    <Col></Col>
                </Row>
            </div>
        )
    }
}

export default Media;
