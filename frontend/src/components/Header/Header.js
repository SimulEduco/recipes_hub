import React from 'react';
import logo from '../../assets/logo.png';
import './Header.css';

export default function Header() {
  return (
      <div className='card shadow p-2'>
          <div className='d-flex justify-content-between align-items-center'>
              <div className='d-flex'>
                  <div className='me-2'>
                      <img src={logo} alt="Logo" width="50px" />
                  </div>
                  <div className='d-flex align-items-center'>
                      <span className='fs-4 fw-bold'>Recipes Hub</span>
                  </div>
              </div>
              <div className='search-form'>
                  <input type="text" placeholder='Search For Recipes' className="form-control" />
              </div>
              <div>
                  <button className='btn btn-outline-primary'>SignIn</button>
              </div>
          </div>
    </div>
  )
}
