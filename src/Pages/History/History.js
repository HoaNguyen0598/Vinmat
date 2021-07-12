//lib
import React, { useState } from 'react';
import { DatePicker, Menu } from 'antd'
import ReactPaginate from 'react-paginate';
import { Modal } from 'antd';
import ModalLocker from './ModalLocker';

//cus
import './Style.scss'
import DropdownBase from '../../components/base/Dropdown/Dropdown'
import ResetTable from '../../image/ResetTable/ResetTable'

const dataUser = [
    {
        date: '23/06/2019',
        customer: "https://img.pngio.com/user-icons-in-all-style-for-graphic-design-and-user-interfaces-user-icons-png-200_200.png",
        admin: "https://cdn.profoto.com/cdn/0532192/contentassets/d39349344d004f9b8963df1551f24bf4/profoto-albert-watson-steve-jobs-pinned-image-3840x2160px-2.jpg?width=1280&quality=75&format=jpg&mode=crop&height=1280",
        cabin: "06",
        name_admin: "Truong Minh Quan",
        from: "08:03",
        to: "09:40",
        total_time_use: "1 giờ 10 phút",
        icon_reset: true,
        issActive: false,
    },
    {
        date: '23/06/2019',
        customer: "https://img.pngio.com/user-icons-in-all-style-for-graphic-design-and-user-interfaces-user-icons-png-200_200.png",
        admin: "https://cdn.profoto.com/cdn/0532192/contentassets/d39349344d004f9b8963df1551f24bf4/profoto-albert-watson-steve-jobs-pinned-image-3840x2160px-2.jpg?width=1280&quality=75&format=jpg&mode=crop&height=1280",
        cabin: "06",
        name_admin: "Truong Minh Quan",
        from: "08:03",
        to: "09:40",
        total_time_use: "1 giờ 10 phút",
        icon_reset: false,
        issActive: true,
    },
    {
        date: '23/06/2019',
        customer: "https://img.pngio.com/user-icons-in-all-style-for-graphic-design-and-user-interfaces-user-icons-png-200_200.png",
        admin: "https://cdn.profoto.com/cdn/0532192/contentassets/d39349344d004f9b8963df1551f24bf4/profoto-albert-watson-steve-jobs-pinned-image-3840x2160px-2.jpg?width=1280&quality=75&format=jpg&mode=crop&height=1280",
        cabin: "06",
        name_admin: "Truong Minh Quan",
        from: "08:03",
        to: "09:40",
        total_time_use: "1 giờ 10 phút",
        icon_reset: false,
        issActive: true,
    },
    {
        date: '23/06/2019',
        customer: "https://img.pngio.com/user-icons-in-all-style-for-graphic-design-and-user-interfaces-user-icons-png-200_200.png",
        admin: "https://cdn.profoto.com/cdn/0532192/contentassets/d39349344d004f9b8963df1551f24bf4/profoto-albert-watson-steve-jobs-pinned-image-3840x2160px-2.jpg?width=1280&quality=75&format=jpg&mode=crop&height=1280",
        cabin: "06",
        name_admin: "Nguyen Van Hoa",
        from: "08:03",
        to: "09:40",
        total_time_use: "1 giờ 10 phút",
        icon_reset: false,
        issActive: true,
    },
    {
        date: '23/06/2019',
        customer: "https://img.pngio.com/user-icons-in-all-style-for-graphic-design-and-user-interfaces-user-icons-png-200_200.png",
        admin: "https://cdn.profoto.com/cdn/0532192/contentassets/d39349344d004f9b8963df1551f24bf4/profoto-albert-watson-steve-jobs-pinned-image-3840x2160px-2.jpg?width=1280&quality=75&format=jpg&mode=crop&height=1280",
        cabin: "06",
        name_admin: "Nguyen Van Hoa",
        from: "08:03",
        to: "09:40",
        total_time_use: "1 giờ 10 phút",
        icon_reset: false,
        issActive: true,
    },
    {
        date: '23/06/2019',
        customer: "https://img.pngio.com/user-icons-in-all-style-for-graphic-design-and-user-interfaces-user-icons-png-200_200.png",
        admin: "https://cdn.profoto.com/cdn/0532192/contentassets/d39349344d004f9b8963df1551f24bf4/profoto-albert-watson-steve-jobs-pinned-image-3840x2160px-2.jpg?width=1280&quality=75&format=jpg&mode=crop&height=1280",
        cabin: "06",
        name_admin: "Nguyen Van Hoa",
        from: "08:03",
        to: "09:40",
        total_time_use: "1 giờ 10 phút",
        icon_reset: false,
        issActive: false,
    },
    {
        date: '23/06/2019',
        customer: "https://img.pngio.com/user-icons-in-all-style-for-graphic-design-and-user-interfaces-user-icons-png-200_200.png",
        admin: "https://cdn.profoto.com/cdn/0532192/contentassets/d39349344d004f9b8963df1551f24bf4/profoto-albert-watson-steve-jobs-pinned-image-3840x2160px-2.jpg?width=1280&quality=75&format=jpg&mode=crop&height=1280",
        cabin: "06",
        name_admin: "Nguyen Van Hoa",
        from: "08:03",
        to: "09:40",
        total_time_use: "1 giờ 10 phút",
        icon_reset: false,
        issActive: true,
    },
    {
        date: '23/06/2019',
        customer: "https://img.pngio.com/user-icons-in-all-style-for-graphic-design-and-user-interfaces-user-icons-png-200_200.png",
        admin: "https://cdn.profoto.com/cdn/0532192/contentassets/d39349344d004f9b8963df1551f24bf4/profoto-albert-watson-steve-jobs-pinned-image-3840x2160px-2.jpg?width=1280&quality=75&format=jpg&mode=crop&height=1280",
        cabin: "06",
        name_admin: "Nguyen Van Hoa",
        from: "08:03",
        to: "09:40",
        total_time_use: "1 giờ 10 phút",
        icon_reset: true,
        issActive: false,
    },
    {
        date: '23/06/2019',
        customer: "https://img.pngio.com/user-icons-in-all-style-for-graphic-design-and-user-interfaces-user-icons-png-200_200.png",
        admin: "https://cdn.profoto.com/cdn/0532192/contentassets/d39349344d004f9b8963df1551f24bf4/profoto-albert-watson-steve-jobs-pinned-image-3840x2160px-2.jpg?width=1280&quality=75&format=jpg&mode=crop&height=1280",
        cabin: "06",
        name_admin: "Nguyen Van Hoa",
        from: "08:03",
        to: "09:40",
        total_time_use: "1 giờ 10 phút",
        icon_reset: false,
        issActive: true,
    },
    {
        date: '23/06/2019',
        customer: "https://img.pngio.com/user-icons-in-all-style-for-graphic-design-and-user-interfaces-user-icons-png-200_200.png",
        admin: "https://cdn.profoto.com/cdn/0532192/contentassets/d39349344d004f9b8963df1551f24bf4/profoto-albert-watson-steve-jobs-pinned-image-3840x2160px-2.jpg?width=1280&quality=75&format=jpg&mode=crop&height=1280",
        cabin: "06",
        name_admin: "Nguyen Van Hoa",
        from: "08:03",
        to: "09:40",
        total_time_use: "1 giờ 10 phút",
        icon_reset: true,
        issActive: false,
    },
    {
        date: '23/06/2019',
        customer: "https://img.pngio.com/user-icons-in-all-style-for-graphic-design-and-user-interfaces-user-icons-png-200_200.png",
        admin: "https://cdn.profoto.com/cdn/0532192/contentassets/d39349344d004f9b8963df1551f24bf4/profoto-albert-watson-steve-jobs-pinned-image-3840x2160px-2.jpg?width=1280&quality=75&format=jpg&mode=crop&height=1280",
        cabin: "06",
        name_admin: "Nguyen Van Hoa",
        from: "08:03",
        to: "09:40",
        total_time_use: "1 giờ 10 phút",
        icon_reset: true,
        issActive: false,
    },
]

export default function History() {

    const [isModal,setModal] = useState(false) // set open modal when click table
    const [dataModal,setDataModal] = useState()

    // handle click dropdown
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

const menuRegion = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="1">
        Ho Chi Minh
        </Menu.Item>
        <Menu.Item key="2">
        Ha Noi
        </Menu.Item>
    </Menu> 
)

//handleClick DatePicker
const onChange = () =>{

}

//handle click mở modal
const handleClickTr = (data) =>{
    setDataModal(data)
    setModal(true)
}

// tắt modal table
const handleCancelModal = () =>{
    setModal(false)
}

    return (
        <>
        <div className="history">
            <div className="content_title">
                <div className="content_title-left">
                    <p>History</p>
                </div>
                <div className="content_title-right">
                    <div className="date"> <DatePicker style={{ height: '36px', borderRadius: '6px' }} onChange={onChange} /></div>
                    <div className="region">
                        <DropdownBase
                        title="Region"
                        item="Ho Chi Minh"
                        menu={menuRegion}
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
            <div className="TableHistory">
                <table className="table_header w-100">
                    <thead>
                        <tr>
                            <th className="pl-4" width="15%">Date</th>
                            <th className="" width="15%">Customer</th>
                            <th className="" width="10%">Cabin Number</th>
                            <th className="" width="15%">From</th>
                            <th className="" width="15%">To</th>
                            <th className="" width="10%">Total Usage Time</th>
                            <th className="" width="20%"></th>
                        </tr>
                    </thead>
                    <tbody className="table_body">
                        {
                            dataUser && dataUser.map((item,index) =>{
                                return(
                                    <tr key={index} onClick={() => handleClickTr(item)}>
                                        <td className="pl-4" width="15%">{item.date}</td>
                                        <td className="" width="15%">
                                            <div className="image_table">
                                                <img className={`${item.issActive ? 'active' : ''}`} src={item.customer} alt="history"/>
                                            </div>
                                        </td>
                                        <td className="" width="10%">{item.cabin}</td>
                                        <td className="" width="15%">{item.from}</td>
                                        <td className="" width="15%">{item.to}</td>
                                        <td className="" width="10%">{item.total_time_use}</td>
                                        <td className="" style={{textAlign:'end',paddingRight: '20px'}} width="20%">
                                            {
                                                item.icon_reset
                                                ?  
                                                <div className="reset">
                                                    <ResetTable className="icon_reset" />
                                                    <div className="popup">
                                                        <span>Tủ reset từ <span>Trương Minh Quân</span></span>
                                                    </div>
                                                </div>
                                                : ""
                                            }
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>             
            </div>
            <div className="pagination">
                        <ReactPaginate 
                            previousLabel={'<'}
                            nextLabel={'>'}
                            breakLabel={'...'}
                            breakClassName={'break-me'}
                            // pageCount={this.state.pageCount}
                            // marginPagesDisplayed={2}
                            // pageRangeDisplayed={5}
                            // onPageChange={this.handlePageClick}
                            containerClassName={'pagination'}
                            activeClassName={'active'}
                            previousClassName={"previousLinkClassName"}
                            nextLinkClassName={"nextBtn"}
                            disabledClassName={"paginationDisabled"}
                        />
            </div>
        </div>
        <Modal visible={isModal} footer={null} onCancel={handleCancelModal} width={810}>
                {
                    dataModal &&
                    <ModalLocker 
                        avatarUser={dataModal.customer}
                        avatarAdmin={dataModal.admin}
                        nameAdmin={dataModal.name_admin}
                        isActive={dataModal.issActive}
                    />
                }
        </Modal>
        </>
    )
}
