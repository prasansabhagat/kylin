import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import Newsletter from './newsletter';
import Media from './Media';
import DeData from './DeData';
import Investors from './Investors';
import Dao from './Dao';
import Toastt from './Toast'
import Application from './Application';
import Economics from './Economics';
import DownOracle from './DownOracle';
import Oracle from './Oracle';
import Technical from './Technical';
import Main from './main';
import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Main></Main>
        <Technical></Technical>
        <Oracle></Oracle>
        <DownOracle></DownOracle>
        <Economics></Economics>
        <Application></Application>
        <Dao></Dao>
        <Investors></Investors>
        <DeData></DeData>
        <Media></Media>
        <Newsletter></Newsletter>
        <Footer></Footer>
      </div>
    );
  }
}
export default App;