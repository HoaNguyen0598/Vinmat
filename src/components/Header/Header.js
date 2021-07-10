import React, { useState } from 'react';
import './style.scss'
import Beel from '../../image/Beel/Beel'
import { Link } from "react-router-dom";

const LinkNavBar = [
    {
        name: "DASHBOARD",
        link: "/",
        id: 1,
        active: false,
    },
    {
        name: "CABIN HISTORY",
        link: "/history",
        id: 2,
        active: false
    },
    {
        name: "ADMIN ACCOUNT",
        link: "/account",
        id: 3,
        active: false
    },
    {
        name: "ACTION LOGS",
        link: "/action",
        id: 4,
        active: true
    },
    
]

export default function Header() {

    const [isActive,setActive] = useState()

    const handleClickLink = (id) =>{
        console.log(id)
        setActive(id)
    }

    return (
        <div className="header">
            <h1 className="header_title">Locker Management</h1>
            <ul className="menu">
                {
                    LinkNavBar.map((item,index) =>{
                        return(
                            <li key={index} className={`menu_item ${item.id === isActive ? 'active' : ''}`}>
                                <Link to={item.link} onClick={() =>handleClickLink(item.id)}>
                                    {item.name}
                                </Link>
                            </li>
                        )
                    })
                }
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
