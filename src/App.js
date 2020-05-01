import React from 'react'
import './App.css'
import {connect} from 'react-redux'
import Notification from './component/notification'
import Header from './component/header'
import Highlight from './component/highlight'
import Footer from './component/footer'
import Panel from './component/panel'

function App ({notif}) {

  return (
    <div style={{display:'flex',justifyContent:'center'}}>
      <Notification/>
      <div className='atas' style={{paddingTop:notif?null:0,transition:'0.2s',maxWidth:'1366px'}}>
        <Header/>
        <Highlight/>
        <Footer/>
        <Panel/>
      </div>
    </div>
  );
}

const stp = ({reducer}) => {
  return {
      notif: reducer.notif
  }
}

export default connect(stp) (App);
