import "./navbar.css"
import { NavLink } from "react-router-dom"
import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <>


      {/* <div className="header-nav d-flex top-fixed">
        <div className="container">
          <div className="d-flex align-items-center">
            <div className="header-nav-left ">
              <ul className="header-nav-info d-flex gap-3">
                <li>
                  <i className="bi bi-envelope me-2">
                  </i>
                  <Link className="info">info@ticer.pk</Link>
                </li>
                <li>
                  <i className="bi bi-telephone-fill me-2">
                    0326 0833833
                  </i>
                </li>
              </ul>
            </div>
            <div className="header-nav-right ms-auto d-flex align-items-center">

              <p>Follow Us:</p>

              <ul className="header-nav-info-right d-flex ps-2">
                <li>
                  <Link to="https://www.facebook.com/ticer.pk"><i class="bi bi-facebook top-icon-fb"></i></Link>
                </li>
                <li>
                  <Link to="https://twitter.com/ticerpk"><i class="bi bi-twitter top-icon-fb"></i></Link>
                </li>
                <li>
                  <Link to="https://www.instagram.com/ticer.pk/"><i class="bi bi-instagram top-icon-fb"></i></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
      <nav className="navbar navbar-expand-lg navbar-top  bg-body-tertiary sticky-top">
        <div className="container">
          <a href="https://www.ticer.pk/">
            <img src="https://www.ticer.pk/wp-content/uploads/2023/06/200W-TICER-Logo-PNG.png.webp" alt="" className="navbar-top-icon" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0 gap-4 d-flex align-item-center">
              <li className="nav-item">
                <a href="/">
                  HOME
                </a>

              </li>
              <li className="nav-item">
                <div class="dropdown">
                  <a class=" dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    COURSES
                  </a>

                  <ul class="dropdown-menu nav-dropdown-menu">
                    <li><a class="dropdown-item" href="https://www.ticer.pk/digital-marketing/">Digital Marketing</a></li>
                    <li><a class="dropdown-item" href="https://www.ticer.pk/graphic-designing/">Graphic Designing</a></li>
                    <li><a class="dropdown-item" href="https://www.ticer.pk/full-stack-web-development/">Full Stack Development</a></li>
                    <li>
                      <a class="dropdown-item" href="https://www.ticer.pk/advanced-office-management/">Advanced Office Management</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="https://www.ticer.pk/english-language/">English Language</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a href="https://www.ticer.pk/gallery/">
                  GALLERY
                </a>
              </li>
              <li className="nav-item">
                <a href="https://www.ticer.pk/our-team/">
                  OUT TEAM
                </a>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  LOGIN
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/dashboard">
                  DASHBOARD
                </NavLink>
              </li>
              <li className="nav-item">
                <a href="https://www.ticer.pk/contact-us/">
                  CONTACT US
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>






    </>
  )
}
