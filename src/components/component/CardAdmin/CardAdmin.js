import React, { useState } from 'react';
import './style.scss'
import Admin from '../../../image/Admin/Admin'
import CardConfirm from '../CardConfirm/CardConfirm';

export default function CardAdmin({id,name,img,phone,registered,handleClickDelete}) {
    const [button,setButton] = useState() //
    const [isClickIcon,setClickIcon] = useState(false)  // open button delete
    const [modalDelete,setModalDelete] = useState(false) //open modal delete

    const handleClickIconCard = (name,id) =>{
        console.log(name,id);
        setButton(id)
        setClickIcon(!isClickIcon)
    }

    const handleClickButton = () =>{
        setModalDelete(true)
    }

     // handle click yes confirm
     const handleClickYes = () =>{
        setModalDelete(false)
        setClickIcon(!isClickIcon)
        handleClickDelete && handleClickDelete(button)
    }
    //handle click cancel modal
    const handleClickCancel = () =>{
        setModalDelete(false)
        setClickIcon(!isClickIcon)
    }

    return (
        <>
            <div className="CardAdmin">
                <div className="image">
                    <img src={img} alt="123"/>
                </div>
                <p className="name">{name}</p>
                <p className="phone"><span>Phone : </span>{phone}</p>
                <div className="date_registered">
                <p>Register Date</p>
                <span className="date_registered-date">{registered}</span>
                </div>
                <div className="icon" onClick={() =>handleClickIconCard(name,id)}>
                    <Admin />
                </div>
                {
                modalDelete
               ? <CardConfirm 
                   handleClickYes={handleClickYes}
                   handleClickCancel={handleClickCancel}
               />
               : "" 
            }
            </div>
            {
                id === button && isClickIcon
                ? <button className="btn btn-delete" onClick={() =>handleClickButton(name)}>DELETE</button>
                : ""
            }
        </>
    )
}
