import React from 'react';
import {Link} from "react-router-dom";

function Navbar(props) {
    return (
        <>
            <header className="header-area">
                <div className="gota_top bg-soft d-none d-sm-block">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">

                            </div>
                            <div className="col-xl-4 offset-xl-5 col-lg-6 col-md-6 col-sm-6 text-end">
                                <div className="gota_right">
                                    <ul>
                                        <li><Link to="/CheckOut">Checkout</Link></li>
                                        <li><Link to="/LoginRegister">Login & Register</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gota_bottom position-relative">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 d-none d-sm-block">
                                <div className="gota_search">
                                    <form className="search_form">
                                        <button className="search_action"><i
                                            className="fal fa-search d-sm-none d-md-block"></i></button>
                                        <input type="text" placeholder="search"/>
                                    </form>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-4 col-sm-4">
                                <div className="sidemenu sidemenu-1 d-lg-none d-md-block">
                                    <a className="open" href="#"><i className="fal fa-bars"></i></a>
                                </div>
                                <div className="main-menu">
                                    <nav id="mobile-menu">
                                        <ul>
                                            <li className="menu-item"><Link to="/Home">Home</Link>
                                            </li>
                                            <li className="menu-item"><Link to="/Shop">Shop</Link>
                                            </li>

                                            <li className="menu-item">
                                                <Link to="/Home">
                                                    <img className="pl-50 pr-50" src="assets/img/logo/logo-1.png"
                                                         alt=""/>
                                                </Link>
                                            </li>
                                            <li className="menu-item"><Link to="/BlogGrid">Blog</Link>
                                            </li>
                                            <li><Link to="/ContactUs">Contact Us</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4">
                                <div className="gota_cart gotat_cart_1 text-end">
                                    <Link to="/Card">
                                        <i className="fal fa-shopping-cart"></i>My Bag<span className="counter"> (2)</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Navbar;