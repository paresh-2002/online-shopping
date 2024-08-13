import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { itemsActions } from '../store/shoppingSlice';

const Navbar = () => {
  const [search, setSearch] = useState('');
  // const items = useSelector((store) => store.items);
  // const order = useSelector((store) => store.order);
  
  // const dispatch = useDispatch()
  // const filteredItems = items.filter(item => order.includes(item.id));
  const handleSubmit = async (e) => {
    e.preventDefault();
    
  //   const foundItem = items.find(item => item.title.toUpperCase() === search.toUpperCase());
  //   console.log(foundItem);
  //   if (foundItem) {
  //     console.log('Found Item:', foundItem);
  //     dispatch(itemsActions.addInitialItems(foundItem))
  //   } else {
  //     console.log('No matching item found');
  //   }
    setSearch('');
  };
  return (
    <header className="p-3 text-bg-dark z-10">
      <div className=" w-full flex items-center justify-between   m-0 ">
        <a href="/" className="d-flex align-items-center  text-white text-decoration-none justify-center ml-4">
          <img src='./shop.png' alt="Shop" width="100" height="100"/>
          </a>
          <div className="d-flex flex-wrap ">
            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 " role="search" onSubmit={handleSubmit}>
              <input
                type="search"
                className="form-control form-control-dark text-bg-dark"
                placeholder="Search..."
                aria-label="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button type="submit" className="visually-hidden">Search</button> {/* Hidden submit button for accessibility */}
            </form>
            <div className="text-end flex">
              <Link to="/users/sign_in" className="nav-link text-white">
                <button type="button" className="btn btn-outline-light me-2">Login</button>
              </Link>
              <Link to="/users/sign_up" className="nav-link text-white">
                <button type="button" className="btn btn-warning">Sign-up</button>
              </Link>
            </div>
          </div>
      </div>
    </header>
  );
};

export default Navbar;
