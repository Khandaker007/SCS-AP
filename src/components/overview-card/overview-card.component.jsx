import React from 'react'

import cap from '../../assets/icons/overview-cap.png'

import './overview-card.style.scss'

export default function OverviewCard({icon, type, number}) {
    return (
        <div className='overview-card'>
            <img className='icon' src={cap} alt="icon" />
            <div className="text-container">
                <p className='text'>hello people</p>
                <span className='number'>$12000</span>
            </div>
        </div>
    )
}
