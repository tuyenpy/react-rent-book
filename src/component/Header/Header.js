import React, { useContext } from 'react';
import './Header.css';
import search from './search.svg';
import { Link } from 'react-router-dom';

import AppContext from '../../Context/AppContext';

import NavBar from '../NavBar/NavBar';
import NavBarLeft from '../NavbarLeft/NavBarLeft';

const Header = (props) => {
    let { cart, user } = useContext(AppContext);
    return <div className="Header">
        <div className="Header-banner">
            <img src="https://cdn0.fahasa.com/media/wysiwyg/Thang-5-2020/Thang5donha_mainbanner_1263x60.jpg" alt='banner' />
        </div>
        <div className="Header-info">
            <div className="email">
                <p>info@fahasa.com | 1900636467</p>
            </div>
            <div className='account'>
                <ul>{
                    user.name ? (
                        <li className="username">
                            <Link to='/profile'>Xin chào&nbsp;<span>{user.name}</span></Link>
                        </li>
                    ) : (
                            <>

                                <li>
                                    <Link to='/signup'>Tạo tài khoản</Link>
                                </li>
                                <li>
                                    <Link to='/login'>Đăng nhập</Link>
                                </li>
                            </>
                        )
                }
                    <li>
                        <img src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/default.png" alt="vi" />
                    </li>
                    <li>
                        <img src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/english.png" alt="en" />
                    </li>
                </ul>
            </div>
        </div>
        <div className="Header-search">
            <div className="logo">
                <img src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/logo.png" alt="log" />
            </div>
            <div className="search">
                <input type='text' placeholder="tìm kiếm sách..." />
                <img src={search} alt="search" />
            </div>
            <div className="cart">
                <div>
                    <Link to='/cart'>
                        <img src="https://cdn0.fahasa.com/skin/frontend/base/default/images/ico_shopping_cart_orange.svg" alt="cart" />
                        <span>{cart}</span>
                    </Link>
                </div>
                <p>Giỏ hàng</p>
            </div>
        </div>
    </div>
}

export default Header;