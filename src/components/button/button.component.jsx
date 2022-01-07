import React from 'react'

import chainIcon  from '../../assets/icons/chain.png'

import './button.style.scss'

export default function Button({text, icon, transparent}) {
    return (
        <div>
            <button className={transparent ? 'btn dis-connect' : 'btn connect'}><img className={icon ? 'icon' : 'hide'} src={chainIcon} alt="cahin icon" />{text}</button>
        </div>
    )
}
