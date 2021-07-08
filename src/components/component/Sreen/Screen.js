import React from 'react'
import './style.scss'

export default function Screen() {
    return (
        <div className="screen">
            <div className="screen_head">
                <span className="point"></span>
                <span className="point"></span>
            </div>
            <div className="screen_image">
                <p className="content">Locker screen</p>
            </div>
        </div>
    )
}
