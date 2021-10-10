import React from 'react';
import {NavLink} from "react-router-dom";
import './style.css'
import logo from './img/tild3363-3465-4136-b632-623034323164__mimc-logoeng-main-rg.png'

const Aside = () => {
    return (
        <aside className='aside'>
            <img src={logo} alt=""/>
            <nav>
                <ul className='p-0'>
                    <li><NavLink to='/works' className='aside-item  w-100'><i className='bx bx-category-alt'></i>Задачи и работы</NavLink></li>
                    <li><NavLink to='/project' className='aside-item  w-100'><i className='bx bx-category-alt'></i>Проекты</NavLink></li>
                    <li><NavLink to='/calendar' className='aside-item w-100'><i className='bx bx-category-alt'></i>Календарь</NavLink></li>
                    <li><NavLink to='/possibilities' className='aside-item  w-100'><i className='bx bx-category-alt'></i>Возможности</NavLink></li>
                </ul>
            </nav>
        </aside>
    );
};

export default Aside;