import React, {useState} from 'react'
import { Menu } from 'antd'

//cus
import './style.scss'
import DropdownBase from '../../components/base/Dropdown/Dropdown';
import ReactPaginate from 'react-paginate';

const dataAction = [
    {
        date: '23/06/2019',
        time: '8:30',
        avt_customer: "https://img.pngio.com/user-icons-in-all-style-for-graphic-design-and-user-interfaces-user-icons-png-200_200.png",
        avt_admin: "https://picsum.photos/id/1005/100/100",
        name_admin: "Nguyen Van Hoa",
        action: "Open Cabin",
        cabin_number: "12",
    },
    {
        date: '23/06/2019',
        time: '8:30',
        avt_customer: "https://picsum.photos/id/1027/100/100",
        avt_admin: "https://picsum.photos/id/1006/100/100",
        name_admin: "Karim Benzema",
        action: "Reset",
        cabin_number: "09",
    },
    {
        date: '23/06/2019',
        time: '8:30',
        avt_customer: "https://picsum.photos/id/1028/100/100",
        avt_admin: "https://picsum.photos/id/1004/100/100",
        name_admin: "Neymar",
        action: "Reset",
        cabin_number: "41",
    },
    {
        date: '23/06/2019',
        time: '8:30',
        avt_customer: "https://picsum.photos/id/1006/100/100",
        avt_admin: "https://picsum.photos/id/1003/100/100",
        name_admin: "Messi",
        action: "Reset",
        cabin_number: "32",
    },
    {
        date: '23/06/2019',
        time: '8:30',
        avt_customer: "https://picsum.photos/id/1035/100/100",
        avt_admin: "https://picsum.photos/id/100/100/100",
        name_admin: "De Bruyne",
        action: "Open Cabin",
        cabin_number: "09",
    },
    {
        date: '23/06/2019',
        time: '8:30',
        avt_customer: "https://picsum.photos/id/1031/100/100",
        avt_admin: "https://picsum.photos/id/1008/100/100",
        name_admin: "Lewandowski",
        action: "Open Cabin",
        cabin_number: "11",
    },
    {
        date: '23/06/2019',
        time: '8:30',
        avt_customer: "https://picsum.photos/id/1029/100/100",
        avt_admin: "https://picsum.photos/id/1009/100/100",
        name_admin: "Cristiano Ronaldo",
        action: "Open Cabin",
        cabin_number: "10",
    },
    {
        date: '23/06/2019',
        time: '8:30',
        avt_customer: "https://picsum.photos/id/1055/100/100",
        avt_admin: "https://picsum.photos/id/1010/100/100",
        name_admin: "Kylian Mbappe ",
        action: "Open Cabin",
        cabin_number: "09",
    },
    {
        date: '23/06/2019',
        time: '8:30',
        avt_customer: "https://img.pngio.com/user-icons-in-all-style-for-graphic-design-and-user-interfaces-user-icons-png-200_200.png",
        avt_admin: "https://picsum.photos/id/102/100/100",
        name_admin: "Virgil van Dijk",
        action: "Open Cabin",
        cabin_number: "07",
    },
    {
        date: '23/06/2019',
        time: '8:30',
        avt_customer: "https://img.pngio.com/user-icons-in-all-style-for-graphic-design-and-user-interfaces-user-icons-png-200_200.png",
        avt_admin: "https://picsum.photos/id/114/100/100",
        name_admin: "Thomas Muller",
        action: "Open Cabin",
        cabin_number: "07",
    },
    {
        date: '23/06/2019',
        time: '8:30',
        avt_customer: "https://img.pngio.com/user-icons-in-all-style-for-graphic-design-and-user-interfaces-user-icons-png-200_200.png",
        avt_admin: "https://picsum.photos/id/108/100/100",
        name_admin: "Kante",
        action: "Open Cabin",
        cabin_number: "07",
    },
    {
        date: '23/06/2019',
        time: '8:30',
        avt_customer: "https://img.pngio.com/user-icons-in-all-style-for-graphic-design-and-user-interfaces-user-icons-png-200_200.png",
        avt_admin: "https://picsum.photos/id/1005/100/100",
        name_admin: "Nguyen Van Hoa",
        action: "Open Cabin",
        cabin_number: "12",
    },
    {
        date: '23/06/2019',
        time: '8:30',
        avt_customer: "https://picsum.photos/id/1027/100/100",
        avt_admin: "https://picsum.photos/id/1006/100/100",
        name_admin: "Karim Benzema",
        action: "Reset",
        cabin_number: "09",
    },
    {
        date: '23/06/2019',
        time: '8:30',
        avt_customer: "https://picsum.photos/id/1028/100/100",
        avt_admin: "https://picsum.photos/id/1004/100/100",
        name_admin: "Neymar",
        action: "Reset",
        cabin_number: "41",
    },
    {
        date: '23/06/2019',
        time: '8:30',
        avt_customer: "https://picsum.photos/id/1006/100/100",
        avt_admin: "https://picsum.photos/id/1003/100/100",
        name_admin: "Messi",
        action: "Reset",
        cabin_number: "32",
    },
    {
        date: '23/06/2019',
        time: '8:30',
        avt_customer: "https://picsum.photos/id/1035/100/100",
        avt_admin: "https://picsum.photos/id/100/100/100",
        name_admin: "De Bruyne",
        action: "Open Cabin",
        cabin_number: "09",
    },
    {
        date: '23/06/2019',
        time: '8:30',
        avt_customer: "https://picsum.photos/id/1031/100/100",
        avt_admin: "https://picsum.photos/id/1008/100/100",
        name_admin: "Lewandowski",
        action: "Open Cabin",
        cabin_number: "11",
    },
    {
        date: '23/06/2019',
        time: '8:30',
        avt_customer: "https://picsum.photos/id/1029/100/100",
        avt_admin: "https://picsum.photos/id/1009/100/100",
        name_admin: "Cristiano Ronaldo",
        action: "Open Cabin",
        cabin_number: "10",
    },
    {
        date: '23/06/2019',
        time: '8:30',
        avt_customer: "https://picsum.photos/id/1055/100/100",
        avt_admin: "https://picsum.photos/id/1010/100/100",
        name_admin: "Kylian Mbappe ",
        action: "Open Cabin",
        cabin_number: "09",
    },
    {
        date: '23/06/2019',
        time: '8:30',
        avt_customer: "https://img.pngio.com/user-icons-in-all-style-for-graphic-design-and-user-interfaces-user-icons-png-200_200.png",
        avt_admin: "https://picsum.photos/id/102/100/100",
        name_admin: "Virgil van Dijk",
        action: "Open Cabin",
        cabin_number: "07",
    },
    {
        date: '23/06/2019',
        time: '8:30',
        avt_customer: "https://img.pngio.com/user-icons-in-all-style-for-graphic-design-and-user-interfaces-user-icons-png-200_200.png",
        avt_admin: "https://picsum.photos/id/1005/100/100",
        name_admin: "Nguyen Van Hoa",
        action: "Open Cabin",
        cabin_number: "12",
    },
    {
        date: '23/06/2019',
        time: '8:30',
        avt_customer: "https://picsum.photos/id/1027/100/100",
        avt_admin: "https://picsum.photos/id/1006/100/100",
        name_admin: "Karim Benzema",
        action: "Reset",
        cabin_number: "09",
    },
    {
        date: '23/06/2019',
        time: '8:30',
        avt_customer: "https://picsum.photos/id/1028/100/100",
        avt_admin: "https://picsum.photos/id/1004/100/100",
        name_admin: "Neymar",
        action: "Reset",
        cabin_number: "41",
    },
    {
        date: '23/06/2019',
        time: '8:30',
        avt_customer: "https://picsum.photos/id/1006/100/100",
        avt_admin: "https://picsum.photos/id/1003/100/100",
        name_admin: "Messi",
        action: "Reset",
        cabin_number: "32",
    },
    {
        date: '23/06/2019',
        time: '8:30',
        avt_customer: "https://picsum.photos/id/1035/100/100",
        avt_admin: "https://picsum.photos/id/100/100/100",
        name_admin: "De Bruyne",
        action: "Open Cabin",
        cabin_number: "09",
    },
    {
        date: '23/06/2019',
        time: '8:30',
        avt_customer: "https://picsum.photos/id/1031/100/100",
        avt_admin: "https://picsum.photos/id/1008/100/100",
        name_admin: "Lewandowski",
        action: "Open Cabin",
        cabin_number: "11",
    },
    {
        date: '23/06/2019',
        time: '8:30',
        avt_customer: "https://picsum.photos/id/1029/100/100",
        avt_admin: "https://picsum.photos/id/1009/100/100",
        name_admin: "Cristiano Ronaldo",
        action: "Open Cabin",
        cabin_number: "10",
    },
    {
        date: '23/06/2019',
        time: '8:30',
        avt_customer: "https://picsum.photos/id/1055/100/100",
        avt_admin: "https://picsum.photos/id/1010/100/100",
        name_admin: "Kylian Mbappe ",
        action: "Open Cabin",
        cabin_number: "09",
    },
    {
        date: '23/06/2019',
        time: '8:30',
        avt_customer: "https://img.pngio.com/user-icons-in-all-style-for-graphic-design-and-user-interfaces-user-icons-png-200_200.png",
        avt_admin: "https://picsum.photos/id/102/100/100",
        name_admin: "Virgil van Dijk",
        action: "Open Cabin",
        cabin_number: "07",
    },
    {
        date: '23/06/2019',
        time: '8:30',
        avt_customer: "https://picsum.photos/id/1035/100/100",
        avt_admin: "https://picsum.photos/id/100/100/100",
        name_admin: "De Bruyne",
        action: "Open Cabin",
        cabin_number: "09",
    },
    {
        date: '23/06/2019',
        time: '8:30',
        avt_customer: "https://picsum.photos/id/1031/100/100",
        avt_admin: "https://picsum.photos/id/1008/100/100",
        name_admin: "Lewandowski",
        action: "Open Cabin",
        cabin_number: "11",
    },
    {
        date: '23/06/2019',
        time: '8:30',
        avt_customer: "https://picsum.photos/id/1029/100/100",
        avt_admin: "https://picsum.photos/id/1009/100/100",
        name_admin: "Cristiano Ronaldo",
        action: "Open Cabin",
        cabin_number: "10",
    },
    {
        date: '23/06/2019',
        time: '8:30',
        avt_customer: "https://picsum.photos/id/1055/100/100",
        avt_admin: "https://picsum.photos/id/1010/100/100",
        name_admin: "Kylian Mbappe ",
        action: "Open Cabin",
        cabin_number: "09",
    },
    {
        date: '23/06/2019',
        time: '8:30',
        avt_customer: "https://img.pngio.com/user-icons-in-all-style-for-graphic-design-and-user-interfaces-user-icons-png-200_200.png",
        avt_admin: "https://picsum.photos/id/102/100/100",
        name_admin: "Virgil van Dijk",
        action: "Open Cabin",
        cabin_number: "07",
    },
]

export default function ActionLogs() {
    const [pageNumber,setPageNumber] = useState(0);
    
    
    const usersPerPage = 10;
    const pagesVisited = pageNumber * usersPerPage;

    const displayUsers = dataAction
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((item,index) => {
      return (
        <tr key={index}>
        <td className="pl-4">{item.date}</td>
        <td>{item.time}</td>
        <td>
            <div className="admin">
                <div className="admin_image">
                    <img src={item.avt_admin} alt=""/>
                </div>
                <span>{item.name_admin}</span>
            </div>
        </td>
        <td>{item.action}</td>
        <td>{item.cabin_number}</td>
        <td>
            <div className="customer">
                <div className="customer_image">
                    <img src={item.avt_customer} alt="" />
                </div>
            </div>
        </td>
    </tr>
      );
    });

    const pageCount = Math.ceil(dataAction.length / usersPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
      };

    const menu = (
        <Menu>
            <Menu.Item key="1">
            Landmark 81
            </Menu.Item>
            <Menu.Item key="2">
            Landmark 82
            </Menu.Item>
        </Menu>
        );
        
    const menuRegion = (
        <Menu>
            <Menu.Item key="1">
            Ho Chi Minh
            </Menu.Item>
            <Menu.Item key="2">
            Ha Noi
            </Menu.Item>
        </Menu> 
    )

    return (
        <div className="action">
            <div className="content_title">
                <div className="content_title-left">
                    <p>History</p>
                </div>
                <div className="content_title-right">
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
            <div className="table_action">
                <table className="w-100">
                    <thead>
                        <tr>
                            <th className="pl-4" width="15%">Date</th>
                            <th width="10%">Time</th>
                            <th width="25%">Admin</th>
                            <th width="15%">Action</th>
                            <th width="10%">Cabin Number</th>
                            <th width="25%">Customer</th>
                        </tr>
                    </thead>
                    <tbody className="table_body">
                        {displayUsers}
                    </tbody>
                </table>
            </div>
            <div className="pagination">
                        <ReactPaginate 
                            previousLabel={'<'}
                            nextLabel={'>'}
                            breakLabel={'...'}
                            breakClassName={'break-me'}
                            pageCount={pageCount}
                            onPageChange={changePage}
                            containerClassName={'pagination'}
                            activeClassName={'active'}
                            previousClassName={"previousLinkClassName"}
                            nextLinkClassName={"nextBtn"}
                            disabledClassName={"paginationDisabled"}
                        />
            </div>
        </div>
    )
}
