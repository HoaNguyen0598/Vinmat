import React from 'react'
import { Menu } from 'antd'

import DropdownBase from '../../components/base/Dropdown/Dropdown'
import CardAdmin from '../../components/component/CardAdmin/CardAdmin'
import CardConfirm from '../../components/component/CardConfirm/CardConfirm'

const dataAdmin = [
    {
        id: 1,
        name: 'Trương Minh Quân',
        avatar: "https://cdn.profoto.com/cdn/0532192/contentassets/d39349344d004f9b8963df1551f24bf4/profoto-albert-watson-steve-jobs-pinned-image-3840x2160px-2.jpg?width=1280&quality=75&format=jpg&mode=crop&height=1280",
        phone: "091 381 5789",
        registered_date:"4/05/2019",
    },
    {
        id: 2,
        name: 'Trương Minh Quân',
        avatar: "https://cdn.profoto.com/cdn/0532192/contentassets/d39349344d004f9b8963df1551f24bf4/profoto-albert-watson-steve-jobs-pinned-image-3840x2160px-2.jpg?width=1280&quality=75&format=jpg&mode=crop&height=1280",
        phone: "091 381 5789",
        registered_date:"4/05/2019",
    },
    {
        id: 3,
        name: 'Trương Minh Quân',
        avatar: "https://cdn.profoto.com/cdn/0532192/contentassets/d39349344d004f9b8963df1551f24bf4/profoto-albert-watson-steve-jobs-pinned-image-3840x2160px-2.jpg?width=1280&quality=75&format=jpg&mode=crop&height=1280",
        phone: "091 381 5789",
        registered_date:"4/05/2019",
    },
    {
        id: 4,
        name: 'Trương Minh Quân',
        avatar: "https://cdn.profoto.com/cdn/0532192/contentassets/d39349344d004f9b8963df1551f24bf4/profoto-albert-watson-steve-jobs-pinned-image-3840x2160px-2.jpg?width=1280&quality=75&format=jpg&mode=crop&height=1280",
        phone: "091 381 5789",
        registered_date:"4/05/2019",
    },
    {
        id: 5,
        name: 'Trương Minh Quân',
        avatar: "https://cdn.profoto.com/cdn/0532192/contentassets/d39349344d004f9b8963df1551f24bf4/profoto-albert-watson-steve-jobs-pinned-image-3840x2160px-2.jpg?width=1280&quality=75&format=jpg&mode=crop&height=1280",
        phone: "091 381 5789",
        registered_date:"4/05/2019",
    },
    {
        id: 6,
        name: 'Trương Minh Quân',
        avatar: "https://cdn.profoto.com/cdn/0532192/contentassets/d39349344d004f9b8963df1551f24bf4/profoto-albert-watson-steve-jobs-pinned-image-3840x2160px-2.jpg?width=1280&quality=75&format=jpg&mode=crop&height=1280",
        phone: "091 381 5789",
        registered_date:"4/05/2019",
    },
    {
        id: 7,
        name: 'Trương Minh Quân',
        avatar: "https://cdn.profoto.com/cdn/0532192/contentassets/d39349344d004f9b8963df1551f24bf4/profoto-albert-watson-steve-jobs-pinned-image-3840x2160px-2.jpg?width=1280&quality=75&format=jpg&mode=crop&height=1280",
        phone: "091 381 5789",
        registered_date:"4/05/2019",
    },
    {
        id: 8,
        name: 'Trương Minh Quân',
        avatar: "https://cdn.profoto.com/cdn/0532192/contentassets/d39349344d004f9b8963df1551f24bf4/profoto-albert-watson-steve-jobs-pinned-image-3840x2160px-2.jpg?width=1280&quality=75&format=jpg&mode=crop&height=1280",
        phone: "091 381 5789",
        registered_date:"4/05/2019",
    },
    {
        id: 9,
        name: 'Trương Minh Quân',
        avatar: "https://cdn.profoto.com/cdn/0532192/contentassets/d39349344d004f9b8963df1551f24bf4/profoto-albert-watson-steve-jobs-pinned-image-3840x2160px-2.jpg?width=1280&quality=75&format=jpg&mode=crop&height=1280",
        phone: "091 381 5789",
        registered_date:"4/05/2019",
    },
    {
        id: 10,
        name: 'Trương Minh Quân',
        avatar: "https://cdn.profoto.com/cdn/0532192/contentassets/d39349344d004f9b8963df1551f24bf4/profoto-albert-watson-steve-jobs-pinned-image-3840x2160px-2.jpg?width=1280&quality=75&format=jpg&mode=crop&height=1280",
        phone: "091 381 5789",
        registered_date:"4/05/2019",
    },
    {
        id: 11,
        name: 'Trương Minh Quân',
        avatar: "https://cdn.profoto.com/cdn/0532192/contentassets/d39349344d004f9b8963df1551f24bf4/profoto-albert-watson-steve-jobs-pinned-image-3840x2160px-2.jpg?width=1280&quality=75&format=jpg&mode=crop&height=1280",
        phone: "091 381 5789",
        registered_date:"4/05/2019",
    },

]

export default function Admin() {

    function handleMenuClick(e) {
    }
    const menu = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="1">
        Landmark 81
        </Menu.Item>
        <Menu.Item key="2">
        Landmark 82
        </Menu.Item>
    </Menu>
  );
    return (
        <div className="admin">
            <div className="content_title">
                <div className="content_title-left">
                    <p>Admin</p>
                </div>
                <div className="content_title-right">
                    <div className="region">
                        <DropdownBase
                        title="Region"
                        item="Ho Chi Minh"
                        />
                    </div>
                    <div className="store">
                        <DropdownBase
                        title="store"
                        item="Landmark"
                        isRed
                        isIcon
                        menu={menu}
                        />
                    </div>    
                </div>
            </div>
            <div className="row pt-4">
                {
                    dataAdmin && dataAdmin.map((item,index) =>{
                        return(
                            <div key={index} className="col col-xl-3 col-lg-4 col-md-6 col-sm-12 pb-4">
                                <CardAdmin
                                    name={item.name}
                                    img={item.avatar}
                                    phone={item.phone}
                                    registered={item.registered_date}
                                />
                            </div>
                        )
                    })
                }
            </div>
            <CardConfirm />
        </div>
    )
}
