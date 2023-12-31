import React from 'react';

function Footer(props) {
    return (
        <>
            <footer className="footer_area fix">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                            <div className="company__info  wow fadeInUp " data-wow-duration=".s" data-wow-delay=".3s">
                                <h3 className="f-title">contact info</h3>
                                <ul>
                                    <li>Add: 734 Riverwood Drive, Suite 245 Cottonwood</li>
                                    <li>Beverly Hill, Melbourne, USA.</li>
                                    <li>Email: <a href="https://wphix.com/cdn-cgi/l/email-protection"
                                                  className="__cf_email__"
                                                  data-cfemail="7c3f1312081d1f083c190e19120814191119521f1311">[email&#160;protected]</a>
                                    </li>
                                    <li>Fax: (+100) 123 456 7890 - (+100) 123 456 7891</li>
                                </ul>
                                <div className="social__media mb-30">
                                    <h3 className="f-title">FOLLOW US ON</h3>
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-6 col-md-6 col-sm-12">
                            <div className="company__info wow fadeInUp " data-wow-duration=".7s" data-wow-delay=".4s">
                                <h3 className="f-title">Get Help</h3>
                                <ul>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">Delivery Information</a></li>
                                    <li><a href="#">Sale Terms & Conditions</a></li>
                                    <li><a href="#">Privacy Notice</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-6 col-md-6 col-sm-12">
                            <div className="company__info wow fadeInUp " data-wow-duration=".8s" data-wow-delay=".5s">
                                <h3 className="f-title">Popular categories</h3>
                                <ul>
                                    <li><a href="#">Sneaker</a></li>
                                    <li><a href="#">Basketball</a></li>
                                    <li><a href="#">Mens Running</a></li>
                                    <li><a href="#">Footwear</a></li>
                                    <li><a href="#">Men’s</a></li>
                                    <li><a href="#">Kids & Young</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 offset-xl-1 col-lg-6 col-md-6 col-sm-12">
                            <div className="company__info wow fadeInUp " data-wow-duration=".9s" data-wow-delay=".6s">
                                <h3 className="f-title">get in touch</h3>
                                <p>Sign up for all the news about our latest arrivals and<br/>
                                    get an exclusive early access shopping. Join <br/>
                                    <span>60.000+ Subscribers</span> and get a new discount coupon<br/> on every
                                    Saturday.
                                </p>
                                <div className="subscribe pt-20">
                                    <form action="#">
                                        <input type="email" placeholder="Enter your email here..."/>
                                        <button>Subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer__bottom pb-10 mt-60">
                        <div className="row">
                            <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12 ">
                                <p>Copyright © <span>Gota Store</span> All Rights Reserved.
                                </p>
                            </div>
                            <div className="col-xl-5 offset-xl-2 col-lg-4 col-md-6 col-sm-12">
                                <div className="footer-menu">
                                    <ul className="text-end">
                                        <li><a href="#">Site Map</a></li>
                                        <li><a href="#">Search Terms</a></li>
                                        <li><a href="#">Advanced Search </a></li>
                                        <li><a href="#">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;