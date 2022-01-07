import React from 'react'

// COMPONENT
import Button from '../button/button.component'

// IMAGE
import layer1 from '../../assets/images/layer-1.png'

import './notice.style.scss'
import '../../sass/typography.scss'

export default function Notice() {
    return (
        <div className='notice'>
            <img className='bg-layer' src={layer1} alt="bg layer" />
            <div className="content">
                <h1 className='heading'><span className='highlight'>Safe</span>Chain<span className='highlight'>Swap</span></h1>
                <p className='text'>Will Be Live in <span>Q1/2022</span></p>
                <p className='text pb-2'>Swap Any Token With Ease!</p>
                <Button text={'LEARN MORE'}/>
            </div>
        </div>
    )
}
