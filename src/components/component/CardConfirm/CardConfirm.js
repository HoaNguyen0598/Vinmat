import React from 'react'
import './style.scss'

export default function CardConfirm({handleClickYes, handleClickCancel}) {
    return (
        <div className="cardConfirm">
            <p className="title">DELETE ADMIN ACCOUNT</p>
            <p className="content">are you sure delete truong minh quan admin account? this will remove admin previledge of this person</p>
            <div className="button">
                <button className="btn btn-yes" onClick={() => handleClickYes()}>YES</button>
                <button className="btn btn-cancel" onClick={() => handleClickCancel()}>CANCEL</button>
            </div>
        </div>
    )
}
