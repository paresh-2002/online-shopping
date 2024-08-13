import React from 'react'
import { IoMdHome } from "react-icons/io";
import { MdLogout, MdOutlineShoppingCart } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
const SideNavbar = ({
  isActive, setIsActive,
}) => {
const navigate = useNavigate()
  const handleUserLogout = () => {
    localStorage.removeItem('usersData');
    navigate('/users/sign_in');
  }

  return (
    <>
      <div className="w-[280px] flex-shrink-0 p-3 text-bg-dark flex flex-col justify-between">
      <div>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item link-list" onClick={() => setIsActive("Home")}>
            <Link to="/" className={`nav-link text-white ${isActive === 'Home' && 'active'}`} aria-current="page">
            <IoMdHome/>
              Home
            </Link>
          </li>
          <li className='link-list' onClick={() => setIsActive("Orders")} >
            <Link to="/orders" className={`nav-link text-white ${isActive === 'Orders' && 'active'}`}>
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
  
     {/* <div className="flex-shrink-0 p-3 text-bg-dark flex flex-col items-center justify-between w-[6rem]">
       <div>
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
     </div> */}
</>
  )
}
export default SideNavbar