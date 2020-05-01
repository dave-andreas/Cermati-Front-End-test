import React from 'react'
import bg from '../bg.jpg'
import logo from '../logo.png'

const Header = () => {
    return (
        <div style={{
            zIndex:-2,
            backgroundImage:`url(${bg})`,
            backgroundPosition:'center', 
            backgroundRepeat:'no-repeat', 
            backgroundSize:'cover', 
            width:'100%', 
            height:620,
            display:'flex',
            justifyContent:'center'
        }}>
            <div style={{backgroundColor:'#001d2e88',width:'100%'}} >
                <img src={logo} width={50} height={50} 
                    style={{margin:'25px 20px 20px 20px',position:'absolute'}} 
                    alt={'header background'}
                />
                <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100%'}}>
                    <div className='px-3' 
                        style={{color:'#efefef',textAlign:'center'}}
                    >
                        <div style={{fontSize:33,marginBottom:5}}>Hello! I'm David Andreas</div>
                        <h3>Consult, Design, and Develop Websites</h3>
                        <div style={{fontSize:20}}>Have something great in mind? Feel free to contact me.</div>
                        <div style={{fontSize:20}}>I'll help you to make it happen.</div>
                        <button className='hbtn'><strong>LET'S MAKE CONTACT</strong></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header