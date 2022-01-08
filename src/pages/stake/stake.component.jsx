import React from 'react'

// COMPONENT
import Notice from '../../components/notice/notice.component'
import Overview from '../../components/overview/overview.component'
import Button from '../../components/button/button.component'

// ICON
import token from '../../assets/icons/token.png'

import './stake.style.scss'
import '../../sass/typography.scss'

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
                <div className="table-container">
                    <table className='table'>
                        <thead className='table__head'>
                            <tr className='head-row'>
                                <th className='first-th'>tokens</th>
                                <th className='align-center' >est. apy</th>
                                <th className='align-center' >duration</th>
                                <th className='align-center' >staking rewards</th>
                                <th className='align-center' >staked amount</th>
                                <th className='last-th'>action</th>
                            </tr>
                        </thead>
                        <tbody className='table__body'>
                            <tr>
                                <td><img className='token-icon' src={token} alt="token icon" /></td>
                                <td className='align-center'>15%</td>
                                <td className='align-center' >30 days</td>
                                <td className='align-center' >0 SCT</td>
                                <td className='align-center' >0 SCT</td>
                                <td className='td-last'>
                                    <Button text={'Harvest'}/>
                                    <Button text={'stake'}/>
                                    <Button text={'unstake'}/>
                                </td>
                            </tr>
                            <tr>
                                <td><img className='token-icon' src={token} alt="token icon" /></td>
                                <td className='align-center' >34%</td>
                                <td className='align-center' >25 days</td>
                                <td className='align-center' >0 SCT</td>
                                <td className='align-center' >0 SCT</td>
                                <td className='td-last'>
                                    <Button text={'Harvest'}/>
                                    <Button text={'stake'}/>
                                    <Button text={'unstake'}/></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
