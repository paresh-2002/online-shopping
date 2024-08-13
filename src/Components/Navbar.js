import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [search, setSearch] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setSearch('')
  };

  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-end ">
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
