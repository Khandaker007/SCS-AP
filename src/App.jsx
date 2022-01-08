import { useState } from 'react'
import { Route, Routes } from "react-router"
import { Link } from 'react-router-dom'

// COMPONENTS
import Stake from './pages/stake/stake.component'
import Swap from './pages/swap/swap.component'
import Button from './components/button/button.component'

// LOGO
import logo from './assets/logo/icon.png'

// ICON
import stakeIcon from './assets/icons/stake.png'
import swapIcon from './assets/icons/swap.png'

import docIcon from './assets/icons/doc.png'
import instaIcon from './assets/icons/insta.png'
import githubIcon from './assets/icons/github.png'
import mediumIcon from './assets/icons/medium.png'
import radditIcon from './assets/icons/raddit.png'
import telegramIcon from './assets/icons/telegram.png'
import twitterIcon from './assets/icons/twitter.png'

import chainIcon  from './assets/icons/chain.png'

import './App.scss'

function App() {

  return (
    <>
      <div className="dashboard">
        {/* header */}
        <div className="dashboard__header">
          <h3 className='heading-3'>Stake</h3>
          <div className="btn-container">
            <Button text={'DisConnect Wallet'} icon transparent/>
            <Button text={'Connect Wallet'} icon/>
            {/* <button className='btn dis-connect'><img className='icon' src={chainIcon} alt="chain icon" />DisConnect Wallet</button>
            <button className='btn connect'><img className='icon' src={chainIcon} alt="cahin icon" /> Connect Wallet</button> */}
          </div>
        </div>
        {/* sidebar */}
        <div className="dashboard__sidebar">
          <div className="dashboard__sidebar--header">
            <div className="logo-container">
              <img className='logo' src={logo} alt="logo" />
            </div>
            <div className='link-container'>
              <Link to='/' className='stack-btn'><img className='icon stake-icon' src={stakeIcon} alt="stake icon" /></Link>
            </div>
            <div className='link-container'>
              <Link to='/swap'><img className='icon swap-icon' src={swapIcon} alt="swap icon" /></Link>
            </div>
          </div>
          <div className="dashboard__sidebar--footer">
            <ul className="contact-list">
              <li className="item"><a href="#" className="link"><img className='icon doc-icon' src={docIcon} alt="document icon" /></a></li>
              <li className="item"><a href="#" className="link"><img className='icon tel-icon' src={telegramIcon} alt="telegram icon" /></a></li>
              <li className="item"><a href="#" className="link"><img className='icon med-icon' src={mediumIcon} alt="medium icon" /></a></li>
              <li className="item"><a href="#" className="link"><img className='icon twi-icon' src={twitterIcon} alt="twitter icon" /></a></li>
              <li className="item"><a href="#" className="link"><img className='icon git-icon' src={githubIcon} alt="github icon" /></a></li>
              <li className="item"><a href="#" className="link"><img className='icon rad-icon' src={radditIcon} alt="raddit icon" /></a></li>
              <li className="item"><a href="#" className="link"><img className='icon inst-icon' src={instaIcon} alt="instagram icon" /></a></li>
            </ul>
          </div>
        </div>
        {/* main */}
        <div className="dashboard__main">
          <Routes>
            <Route path='/' element={<Stake/>}/>
            <Route path='/swap' element={<Swap/>}/>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
