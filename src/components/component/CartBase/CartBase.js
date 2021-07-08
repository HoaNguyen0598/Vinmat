import React from 'react'
import './style.scss'

export default function CartBase({ className, count, description, img }) {
    return (
        <div className={`cardBase ${className ? className : ""}`}>
            <div className="cardBase_image">
                {img}
            </div>
            <div className="cardBase_info">
                <p className="cardBase_info-count">{count}</p>
                <span className="cardBase_info-desc">{description}</span>
            </div>
        </div>
    )
}
