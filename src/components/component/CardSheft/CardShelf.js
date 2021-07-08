import React from 'react'
import './style.scss'

export default function CardShelf({ active, numberStt, desc, numberCount }) {
    return (
        <div className={`cardShelf ${active ? 'active' : ''}`}>
            <p className="numberStt">{numberStt}</p>
            <p className="desc">{desc}</p>
            <p className="numberCount">{numberCount}</p>
        </div>
    )
}
