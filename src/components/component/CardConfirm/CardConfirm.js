import React from 'react'
import './style.scss'

export default function CardConfirm() {
    return (
        <div className="cardConfirm">
            <p className="title">DELETE ADMIN ACCOUNT</p>
            <p className="content">are you sure delete truong minh quan admin account? this will remove admin previledge of this person</p>
            <div className="button">
                <button className="btn btn-yes">YES</button>
                <button className="btn btn-cancel">CANCEL</button>
            </div>
        </div>
    )
}
