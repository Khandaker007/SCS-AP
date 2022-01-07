import React from 'react'

// COMPONENT
import Notice from '../../components/notice/notice.component'
import Overview from '../../components/overview/overview.component'

import './stake.style.scss'

export default function Stake() {
    return (
        <div className='stake'>
            <div className="stake__notice">
                <Notice/>
            </div>
            <div className="stake__overview">
                <Overview/>
                <Overview/>
            </div>
            <div className="stake__history">
                history
            </div>
        </div>
    )
}
