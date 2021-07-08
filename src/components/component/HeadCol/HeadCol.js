import React from 'react'
import './style.scss'
import Group from '../../../image/Group/Group'

export default function HeadCol({ isHead }) {
    return (
        <div className="headCol">
            <div className="headCol_top">{isHead ? <Group /> : ""}</div>
            <div className="headCol_bottom"></div>
        </div>
    )
}
