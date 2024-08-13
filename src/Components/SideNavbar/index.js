import React from 'react'
import { IoMdHome } from "react-icons/io";
import { MdLogout, MdOutlineShoppingCart } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
const SideNavbar = ({
  isActive, setIsActive,
  iswidth='20%'
}) => {
const navigate = useNavigate()
  const handleUserLogout = () => {
    localStorage.removeItem('usersData');
    navigate('/users/sign_in');
  }

  return (
    <>
    {
      !iswidth === '20%' ? 
      <div className="flex-shrink-0 p-3 text-bg-dark min-w[20%] flex flex-col justify-between ">
      <div>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
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
            <button >
              <MdLogout className='w-[20px] h-[20px] hover:text-gray-300 cursor-pointer' onClick={handleUserLogout}/>
            </button>
          </div>
        </div>
      </div>
      :
      <div className="flex-shrink-0 p-3 text-bg-dark flex flex-col items-center justify-between w-[6rem]">
        <div>
        <a href="/" className="d-flex align-items-center ml-1 text-cyan-700 text-decoration-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-10">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>
        </a>
        <hr/>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item link-list" onClick={() => setIsActive("Home")}>
            <Link to="/" className={`nav-link text-white ${isActive === 'Home' && 'active'}`} aria-current="page">
            <IoMdHome/>
            </Link>
          </li>
          <li className='link-list' onClick={() => setIsActive("Orders")} >
            <Link to="orders" className={`nav-link text-white ${isActive === 'Orders' && 'active'}`}>
            <MdOutlineShoppingCart/>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <hr/>
          <div className="flex just-col justify-between items-center mt-4">
            <Link to="image" className="flex align-items-center text-white text-decoration-none " data-bs-toggle="dropdown" aria-expanded="false">
              <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
              <strong>Leo</strong>
            </Link>
          </div>
        </div>
      </div>
    }
    

      
</>
  )
}
export default SideNavbar