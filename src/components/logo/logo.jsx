import React from 'react'
import logo from './logo.png'
import './logo.less'
/*
简单的显示logo的组件
 */
export default function Logo() {
    return (
      <div className="logo-container">
        <img src={logo} alt="logo" className='logo-img'/>
      </div>
    )
}