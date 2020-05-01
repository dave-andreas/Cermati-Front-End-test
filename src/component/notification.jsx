import React from 'react'
import {ganti} from '../redux/action'
import {connect} from 'react-redux'

const Notification = ({notif,ganti}) => {
    return (
        <div style={{
            position:'fixed',
            width:'100%',
            maxWidth:'1366px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#efefef',
            transition:'0.2s',
            overflowY:'hidden',
            height:notif?null:0,
            zIndex:5
        }}>
            <div style={{maxWidth:720,margin:20}}>
                <div className='nottxt'>
                    By accessing and using this website, you acknowledge that you have read and understand our <span className='bltxt'>Cookie Policy, Privacy Policy,</span> and our <span className='bltxt'>Terms of Service.</span>
                </div>
                <button type="button" className="btn btn-primary notbtn" onClick={ganti}>Got it</button>
            </div>
        </div>
    )
}

const stp = ({reducer}) => {
    return {
        notif: reducer.notif
    }
}

export default connect(stp,{ganti}) (Notification)