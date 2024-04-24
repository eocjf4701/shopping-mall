import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';


const Navbar = () => {
  return (
    <div>
      <div>
        <div className='login-button'>
          <FontAwesomeIcon icon={faUser} />
          <div>로그인</div>
        </div>
      </div>
      <div className='nav-section'>
        <img src='https://zenprospect-production.s3.amazonaws.com/uploads/pictures/64b1bd56b5fd5f00018372c2/picture' width={100} />
      </div>
      <div></div>
    </div>

  )
}

export default Navbar