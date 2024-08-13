import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import SideNavbar from './Components/SideNavbar';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoadingSpinner from './Components/LoadingSpinner';
import FetchPosts from './Components/FetchPosts';

function App() {
  const [isActive, setIsActive] = useState('Home')
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
     <div className="w-full h-screen">
      <Navigate to='/users/sign_in'/>
        <Navbar/>
        <div className="flex h-[69%]" >
        <SideNavbar isActive={isActive} setIsActive={setIsActive}  />
        <div className="w-full overflow-auto mt-2 ml-20">
        <FetchPosts/>
        {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
        </div>
      </div>
      <div className='h-[15%]'>
        <Footer />
      </div>
      </div> 
  );
}

export default App;
 
