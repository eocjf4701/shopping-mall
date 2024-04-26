import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M HOME', 'Sale', '지속가능성'];
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <div>
      <div className='login-button' onClick={goToLogin}>
        <FontAwesomeIcon icon={faUser} />
        <div>로그인</div>
      </div>
      <div className='nav-section'>
        <img src='https://zenprospect-production.s3.amazonaws.com/uploads/pictures/64b1bd56b5fd5f00018372c2/picture' width={150} />
      </div>
      <div className='menu-area'>
        <ul className='menu-list'>
          {menuList.map(menu => (<li>{menu}</li>))}
        </ul>
        <div className='menu-search'>
          <div className="menu-search-divide">
            <FontAwesomeIcon className='menu-search-divide-icon' icon={faSearch} />
            <input type="text" />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Navbar