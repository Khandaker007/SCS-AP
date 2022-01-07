import React from 'react'

// COMPONENT
import Notice from '../../components/notice/notice.component'
import Overview from '../../components/overview/overview.component'
import Button from '../../components/button/button.component'

// ICON
import token from '../../assets/icons/token.png'

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
                <h2 className='heading'>History</h2>
                <table className='table'>
                    <thead className='table__head'>
                        <tr className='head-row'>
                            <th className='first-th'>tokens</th>
                            <th>est. apy</th>
                            <th>duration</th>
                            <th>staking rewards</th>
                            <th>staked amount</th>
                            <th className='last-th'>action</th>
                        </tr>
                    </thead>
                    <tbody className='table__body'>
                        <tr>
                            <td><img className='token-icon' src={token} alt="token icon" /></td>
                            <td>15%</td>
                            <td>30 days</td>
                            <td>0 SCT</td>
                            <td>0 SCT</td>
                            <td className='td-last'>
                                <Button text={'Harvest'}/>
                                <Button text={'stake'}/>
                                <Button text={'unstake'}/>
                            </td>
                        </tr>
                        <tr>
                            <td><img className='token-icon' src={token} alt="token icon" /></td>
                            <td>34%</td>
                            <td>25 days</td>
                            <td>0 SCT</td>
                            <td>0 SCT</td>
                            <td className='td-last'>
                                <Button text={'Harvest'}/>
                                <Button text={'stake'}/>
                                <Button text={'unstake'}/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
