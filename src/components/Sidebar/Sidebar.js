import React from 'react'
import './style.scss'
import Vector from '../../image/Vector/Vector'
import Vector2 from '../../image/Vector/Vector2'
import Logo from '../../image/Logo/Logo'
export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_logo">
                <Logo />
            </div>
            <div className="sidebar_camera">
                <Vector className="vector" />
            </div>
            <div className="sidebar_virus">
                <Vector2 className="vector" />
            </div>
        </div>
    )
}
