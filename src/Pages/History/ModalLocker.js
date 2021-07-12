import React from 'react'
import './ModalLocker.scss'

export default function ModalLocker({avatarUser,avatarAdmin,nameAdmin,isActive}) {
    return (
        <div className="modalLocker">
            <div className="modalLocker_left">
                <div className="avatar">
                    <img className={`${isActive ? 'active' : ''}`} src={avatarUser} alt="user"/>
                </div>
                <p className="title">LOCKER IN USE</p>
                <div className="time">
                    <div className="time_register">
                        <span className="time_register-title">Time Registered</span>
                        <span className="time_register-total">08 : 30</span>
                    </div>
                    <div className="time_register">
                        <span className="time_register-title">Total Usage Time</span>
                        <span className="time_register-total">4 Hour</span>
                    </div>
                </div>
            </div>
            <div className="modalLocker_right">
                <h3 className="title">LOCKER HISTORY</h3>
                <div className="table_action">
                    <table>
                        <thead>
                            <tr>
                                <th>Time</th>
                                <th>Action</th>
                                <th>Image</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>08 : 30</td>
                                <td>Register</td>
                                <td>
                                    <div className="image">
                                        <img src={avatarUser} alt="user"/>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>11 : 30</td>
                                <td>Cabin Reset by <span>{nameAdmin}</span></td>
                                <td>
                                    <div className="image">
                                        <img src={avatarAdmin} alt="admin"/>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
