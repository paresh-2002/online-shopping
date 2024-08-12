import React from 'react'
import { IoMdHome } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';
const SideNavbar = ({
  isActive, setIsActive
}) => {
  return (
    <div className="flex-shrink-0 p-3 text-bg-dark min-w-[20%] flex flex-col justify-between ">
      <div>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <svg className="bi pe-none me-2" width="40" height="32"></svg>
          <span className="fs-4">Online Shopping</span>
        </a>
        <hr/>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item link-list" onClick={() => setIsActive("Home")}>
            <Link to="/" className={`nav-link text-white ${isActive === 'Home' && 'active'}`} aria-current="page">
            <IoMdHome/>
              Home
            </Link>
          </li>
          <li className='link-list' onClick={() => setIsActive("Orders")} >
            <Link to="orders" className={`nav-link text-white ${isActive === 'Orders' && 'active'}`}>
            <MdOutlineShoppingCart/>
              Orders
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <hr/>
          <div className="flex justify-between items-center mt-4">
            <Link to="image" className="flex align-items-center text-white text-decoration-none " data-bs-toggle="dropdown" aria-expanded="false">
              <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
              <strong>Leo</strong>
            </Link>
          </div>
        </div>
      </div>
     
  )
}
export default SideNavbar