import React from 'react'
import { Link } from 'react-router-dom';
import img from '../../Assets/Images/main-logo.svg';

export default function Navbar() {
  return  <>

  <div className="container d-flex justify-content-between align-items-center py-4 text-white">
       <img className=' img-fluid' src={img} alt="" />


       <div className=' d-flex justify-content-center align-items-center'>

       <Link className='nav-link mx-2'  to="Register">Register</Link>
        <Link className=' nav-link mx-2'  to="Login">Login</Link>
        <Link className='nav-link mx-2' to="Logout">Logout</Link>


        


       </div>

  </div>





     <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
        
        <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link className="nav-link active main-color" to="/" aria-current="page">Home <span className="visually-hidden">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="News">News</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Courses">Courses</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Ebooks">E-books</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="ContactUs">ContactUs</Link>
            </li>
            
          </ul>



          <ul className="navbar-nav ms-auto mt-2 mt-lg-0 d-flex justify-content-center align-items-center">
            
            <li className="nav-item">
              <Link className="nav-link" to="Cart">Cart</Link>
            </li>

            <li className="nav-item">
              <i className=' fa-solid fa-cart-shopping text-white mx-3'></i>
            
            </li>
           
            
          </ul>
         
        </div>
       </div>
     </nav>
     
    
    
    </>
  
}
