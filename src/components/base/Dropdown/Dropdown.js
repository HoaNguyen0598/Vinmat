import React from 'react'
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Dropdown, Button } from 'antd';
import './style.scss'


export default function DropdownBase({ menu , title, item, isIcon, isRed }) {
    return (
        <Dropdown className={`dropdown ${isRed ? 'color' : ''}`} overlay={menu}>
            <Button>
                <span className="title">{title}</span>
                {item}
                {
                    isIcon &&
                    <DownOutlined />
                }
            </Button>
        </Dropdown>
    )
}
