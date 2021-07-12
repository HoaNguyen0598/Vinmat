import React from 'react'
import './style.scss'
import Admin from '../../../image/Admin/Admin'

export default function CardAdmin({name,img,phone,registered}) {
    return (
            <div className="CardAdmin">
                <div className="image">
                    <img src={img} />
                </div>
                <p className="name">{name}</p>
                <p className="phone"><span>Phone : </span>{phone}</p>
                <div className="date_registered">
                <p>Register Date</p>
                <span className="date_registered-date">{registered}</span>
                </div>
                <div className="icon">
                    <Admin />
                </div>
            </div>
    )
}
