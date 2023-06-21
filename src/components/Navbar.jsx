import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light shadow">
                <div className="container">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">Contact Us</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Other Links
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="/borrow">Borrowing</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="/lend">Lending</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="/how">How it Works</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="/faq">FAQ</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="/policy">Privacy Policy</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="/terms">Terms of Service</a>
                                </div>
                            </li>
                        </ul>
                        <a className="navbar-brand fw-bolder fs-4 mx-auto" href="/">
                            <img src="/assets/logo.png" width="150" height="30" alt="" />
                            <br></br>
                        </a>
                        <button className="btn btn-outline-primary ms-auto px-4 rounded-pill" style={{ color: '#07425b' }}>
                            <i className="fa fa-sign-in me-2" style={{ color: '#07425b' }}></i>Login</button>
                        <button className="btn btn-outline-primary ms-2 px-4 rounded-pill" style={{ color: '#07425b' }}>
                            <i className="fa fa-user-plus me-2" style={{ color: '#07425b' }}></i>Sign Up</button>
                    </div>
                </div>
            </nav>
        </div>
    );
}