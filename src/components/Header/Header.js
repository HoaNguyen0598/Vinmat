import React from 'react'
import './style.scss'
import Beel from '../../image/Beel/Beel'
// import Ellipse from '../../image/User'

export default function Header() {
    return (
        <div className="header">
            <h1 className="header_title">Locker Management</h1>
            <ul className="menu">
                <li className="menu_item active">DASHBOARD</li>
                <li className="menu_item">CABIN HISTORY</li>
                <li className="menu_item">ADMIN ACCOUNT</li>
                <li className="menu_item">ACTION LOGS</li>
            </ul>
            <div className="header_right">
                <Beel className="bell" />
                <div className="user">
                    <img src="https://images.unsplash.com/photo-1618590067824-5ba32ca76ce9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
                </div>
            </div>
        </div>
    )
}
