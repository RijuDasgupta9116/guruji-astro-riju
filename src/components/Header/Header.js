import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <div>
      <header className="guruji-header text-white">
        {/* <!-- Navbar code starts --> */}
        <nav className="navbar navbar-expand-lg navbar-light row text-light">
            <a className="navbar-brand col-4 mx-3 text-light" href="#">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7FaXWCcaitZlYiOJjC7SIecC1vlvgtRz5OjOOepq_&s" width="30" height="30" className="d-inline-block align-top mx-3" alt=""/>
                Guruji
              </a>
            
    
    
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          
            <div className="collapse navbar-collapse col-8" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link mx-3 text-light" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-3 text-light" href="#">Call with Astrologer</a>
                </li>
                
                <li className="nav-item">
                  <a className="nav-link mx-3 text-light">Live(Coming Soon)</a>
                </li>
              </ul>
              {/* <!-- <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form> --> */}
              <img src="https://media.licdn.com/dms/image/C4E03AQGKLIL-Z_LIHA/profile-displayphoto-shrink_800_800/0/1645891451675?e=2147483647&v=beta&t=J5QQydq74oaM2kYptOhImyCIxM0vJcy3WtKnqYjCykg" alt="Logo" width="30" height="24" className="my-profile mx-5"/>
            </div>
          </nav>
    
    
        {/* <!-- Navbar code ends --> */}

        <div className="d-flex flex-column justify-content-center align-items-center mt-5 about-div">
            <h1>"Astrology for Clarity"</h1>
            <p>Your Nam is a Vedic Astrologer and has expertise in Vaastu and Mantra Theraphy</p>
              <button type="button" className="btn my-btn">Consult Now</button>
        </div>

        <div className="d-flex flex-row mt-5 justify-content-center align-items-center">
            <div className="mx-5 d-flex">
                <i className="fa fa-user my-icon" aria-hidden="true"></i>

                <p>24 X 7 Customer Support</p>
            </div>
            <div className="mx-5 d-flex">
                <i className="fa fa-circle-o-notch my-icon" aria-hidden="true"></i>
                <p>100% Refund if Unsatisfied</p>
            </div>
            <div className="mx-5 d-flex">
                <i className="fa fa-lock my-icon" aria-hidden="true"></i>
                <p>Private & Confidential</p>
            </div>
            <div className="mx-5 d-flex">
                <i className="fa fa-sticky-note my-icon" aria-hidden="true"></i>
                <p>Verified Astrologer</p>
            </div>
            <div className="mx-5 d-flex">
                <i className="fa fa-credit-card-alt my-icon" aria-hidden="true"></i>

                <p>Source Payment</p>
            </div>



        </div>



    </header>
    </div>
  )
}
