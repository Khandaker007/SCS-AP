import React from 'react'

// COMPONENT
import OverviewCard from '../overview-card/overview-card.component'

import './overview.style.scss'

export default function Overview () {
    return (
        <div className='overview'>
            <p className='overview__heading'>SCT Overview</p>
            <div className="card-container">
                <OverviewCard/>
                <OverviewCard/>
                <OverviewCard/>
            </div>
        </div>
    )
}
