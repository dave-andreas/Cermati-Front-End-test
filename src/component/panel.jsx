import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {tutup} from '../redux/action'

const Panel = ({panel,tutup}) => {

    useEffect (()=>{
        if(!localStorage.getItem('target')){
            window.addEventListener('scroll', scrl)
        } else {
            lanjut()
        }
    },[])

    async function lanjut () {
        const target = await parseInt(localStorage.getItem('target'))*1000
        setTimeout(()=>{
            tutup(true)
            console.log('timeout')
            clearInterval(interval)
            localStorage.removeItem('target')
        },target)
        var no = await localStorage.getItem('target')
        var interval = setInterval(()=>localStorage.setItem('target', no-=1), 1000)
    }

    const scrl = e => {
        const page = document.documentElement.scrollHeight - window.innerHeight
        if (window.scrollY > page/3) {
            window.removeEventListener('scroll',scrl)
            tutup(true)
        }
    }

    async function onx () {
        await localStorage.setItem('target', 60)
        tutup(false)
        setTimeout(()=>{
            tutup(true)
            console.log('timeout')
            clearInterval(interval)
            localStorage.removeItem('target')
        },60000)
        var no = await localStorage.getItem('target')
        var interval = setInterval(()=>localStorage.setItem('target',no-=1),1000)
    }

    return (
        <div style={{
            backgroundColor:'#007bc1dd',
            padding:15,
            maxWidth:640,
            position:'fixed',
            bottom:panel ? 0 : -500,
            transition:'0.5s'
        }}>
            <div className='d-flex justify-content-end'>
                <button style={{color:'#efefef',backgroundColor:'transparent',border:'none',margin:-5}} onClick={onx}>x</button>
            </div>
            <div style={{color:'#efefef',marginBottom:20}}>
                <h4>Get latest updates in web technologies</h4>
                I write articles related to web technologies, such as design trends, development
                tools, UI/UX case studies and reviews, and more. Sign up to my newsletter to get
                them all.
            </div>
            <div style={{marginBottom:10}}>
                <input type="text" placeholder='Email Address' className='form' />
                <button className='panbtn'><strong>Count me in!</strong></button>
            </div>
        </div>
    )
}

const stp = ({reducer}) => {
    return {
        panel: reducer.panel
    }
}

export default connect(stp,{tutup}) (Panel)