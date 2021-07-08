import React from 'react'
import './style.scss'

export default function CardShelfMin({active,numberStt,desc,numberCount}) {
    return (
        <div className={`cardShelfMin ${active ? 'active' : ''}`}>
            <p className="numberStt">{numberStt}</p>
            <div className="right">
                <p className="desc">{desc}</p>
                <p className="numberCount">{numberCount}</p>
            </div>
        </div>
    )
}
