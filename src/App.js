import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import SideNavbar from './Components/SideNavbar';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoadingSpinner from './Components/LoadingSpinner';
import Fetchitems from './Components/FetchPosts';

function App() { const [isActive, setIsActive] = useState('Home')
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <div className="flex h-screen">
      <SideNavbar isActive={isActive} setIsActive={setIsActive}  />
      <div className="w-full">
        <Fetchitems/>
        <Navbar/>
        {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
        <Footer />
      </div>
    </div>
  );
}

export default App;
 
