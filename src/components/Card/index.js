import React from 'react';
import './style.css'


const Card = ({item, cName}) => {


    return (
        <div className='card-box'>
            <img src={item.img} alt="" className='card-image'/>
            <div className='card-insides'>
                <h3>{item.title}</h3>
                <span><i className='bx bx-clipboard'></i>{item.start_date}</span> - <span>{item.end_date}</span>
                <p><i className='bx bx-user'></i>{item.supervisor}</p>
                <h4><i className='bx bx-user'></i>{item.admin}</h4>
            </div>
        </div>
    );
}

export default Card;