import React, { Component } from 'react'
import { Row, Col, } from 'react-bootstrap';

export class Main extends Component {
    render() {
        return (
            <div style={{color:"white", margin:40}}>
                <Row style={{marginTop:110, marginLeft:60 }}><strong><h1>Building a Cross-chain <br></br>Platform Powering the<br></br> Data Economy on<br></br> Polkadot</h1></strong></Row>
                <Row style={{marginTop:40,marginLeft:60 }}><p style={{fontSize:20}}>The Data Infrastructure for DeFi and Web<br></br> 3.0 Powered by Polkadot</p></Row>  
                <Row style={{marginTop:20,marginLeft:60 }}>
                   <Col><span><a href="https://youtu.be/B2FlDdZEx0k"><img style={{height: 34, width: 39}} src="https://www.bing.com/th/id/OGC.f3ee43de75905989dbdb5b80cf6c8c4d?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f34556%2fscreenshots%2f1680799%2fplay.gif&ehk=bLZXdUTKaXGu6iraWddtfBkIzXH6zEWanHISGDIGEkI%3d"></img></a>What is Kylin</span></Col>
                   <Col><span ><img style={{height: 24, width: 19}} src="https://kylin.network/bannerLink.abfd3530.png"></img><a style={{color:"white"}} href="https://docsend.com/view/rxexqc3cnjh3efz4">Tokenomics <br></br>Whitepaper</a></span></Col>
                   <Col ><span><img style={{height: 44, width: 119}}  src="https://kylin.network/foundation.c79c05e6.png"></img></span></Col>
                   <Col></Col>
                   <Col></Col>
            
                   <Col></Col>
                   
                </Row>       
            </div>
            )
    }
}

export default Main;
