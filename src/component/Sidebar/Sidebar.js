import React from 'react';
import './Sidebar.css';
import logo from './logo.svg';

const items = [
    "Sách trong nước",
    "Sách nước ngoài",
    "Vpp-Dụng cụ học sinh",
    "Đồ chơi",
    "Tuyển tập",
    "Sách theo nhà cung cấp",
    "Vpp-DCHS theo thương hiệu",
    "Đồ chơi theo thương hiệu",
    "Bách hóa online-lưu niệm"
];

const Sidebar = (props) => {
    return <div className="Sidebar">
        <p>Danh mục sản phẩm</p>
        <ul>
            {
                items.map((item, index) => <>
                    <li>
                        <p key={index}>{item}</p>
                        <img src={logo} alt="view" />
                    </li>

                </>)
            }
        </ul>
    </div>
}


export default Sidebar;