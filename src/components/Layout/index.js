import React from 'react';
import Aside from "../Aside";
import avatar from './img/photo-1506794778202-cad84cf45f1d.jpg'
import './style.css'

const Layout = ({children}) => {
    return (
        <>
            <main className='main'>
                <Aside />
                <div className="right-side">
                    <header className="header">
                        <img className='avatar' src={avatar} alt=""/>
                    </header>
                    <div className='child'>
                        {children}
                    </div>
                </div>
            </main>
        </>
    );
};

export default Layout;