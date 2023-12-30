import './App.css';

import Footer from './components/footer/Footer';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/dashboard/Dashboard';
import { Navbar } from './components/navbar/Navbar';
import Loader from './components/Loader/Loader';
import { useEffect, useState } from 'react';
import { SiteContext } from './context/SiteContext';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import Details from './pages/dashboard/Details';
import Trackcomplain from './pages/dashboard/Trackcomplain';
import ComplaintForm from './components/complaintForm/ComplaintForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="App">
      <Navbar />
      {
        isLoading && <Loader />
      }
      <SiteContext.Provider value={{ isLoading, setIsLoading }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/dashboard/details/:id' element={<Details />} />
          <Route path='/registerComplain' element={<ComplaintForm />} />
          <Route path='/trackcomplain' element={<Trackcomplain />} />
        </Routes>
      </SiteContext.Provider>
      <Footer />


<ToastContainer/>

    </div>
  );
}

export default App;
