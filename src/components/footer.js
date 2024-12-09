import React from "react"
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className="footer_section margin_top_90">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <h2 className="useful_text">Quick links </h2>
                        <div className="footer_menu">
                            <ul>
                                <li><i className="bi bi-chevron-right"></i><Link to="/"><span class="badge"><i class="bi bi-house me-1"></i> Home</span></Link></li>
                                <li><i className="bi bi-chevron-right"></i><Link to="/books"><span class="badge"><i class="bi bi-book me-1"></i> Books</span></Link></li>
                                <li><i className="bi bi-chevron-right"></i><Link to="/contact"><span class="badge"><i class="bi bi-person-check me-1"></i> Contact Us</span></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <h2 className="useful_text">Social Media</h2>
                        <div id="social" className="feature-box col-md-2">
                            <a href="https://www.google.com"><button type="button" class="btn btn-outline-warning"><i class="bi bi-facebook"></i></button></a>
                            <a href="https://www.google.com"><button type="button" class="btn btn-outline-warning"><i class="bi bi-instagram"></i></button></a>
                            <a href="https://www.google.com"><button type="button" class="btn btn-outline-warning"><i class="bi bi-telegram"></i></button></a>
                            <a href="https://www.google.com"><button type="button" class="btn btn-outline-warning"><i class="bi bi-instagram"></i></button></a>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <h1 className="useful_text">About Us</h1>
                        <p className="footer_text">when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed tog </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;