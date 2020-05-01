import React from 'react'

const Card = ({title,icon,txt}) => {
    return (
        <div className='crd'>
            <div className='d-flex justify-content-between'>
                <div><h4>{title}</h4></div>
                <div>{icon}</div>
            </div>
            <div style={{fontSize:14}}>
                {txt}
            </div>
        </div>
    )
}

export default Card