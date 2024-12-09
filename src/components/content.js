import React from "react";
import Data from "./data";
import { Link } from "react-router-dom";

const Content = () => {
    return (
        <div className="container-md">
            <div className="section-one">
                <div className="d-flex position-relative">
                    <img src="./deals-04.jpg" className="flex-shrink-0 me-5" alt="..." width="20%" height="20%" />
                    <div className="intro">
                        <h2 className="mt-lg-5">The Most Favorable Books Available</h2>
                        <p>Lorem episum Ut in ea error laudantium quas omnis officia.
                            Sit sed praesentium voluptas. Corrupti inventore consequatur
                            nisi necessitatibus modi consequuntur soluta.
                        </p>
                        <Link to="/books"><button className="btn btn-dark">Books Shelf</button></Link>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <section id="feature">
                    <div className="title"><div>Leatest Books</div></div>
                    <div className="container">
                        <div className="row recent">
                            <div className="feature-box col-md-4">
                                <img src={Data[0].img} alt="" />
                                <h4>{Data[0].title}</h4>
                                <p>{Data[0].body}</p>
                            </div>
                            <div className="feature-box col-md-4">
                                <img src={Data[1].img} alt="" />
                                <h4>{Data[1].title}</h4>
                                <p>{Data[1].body}</p>
                            </div>
                            <div className="feature-box col-md-4">
                                <img src={Data[2].img} alt="" />
                                <h4>{Data[2].title}</h4>
                                <p>{Data[2].body}</p>
                            </div>
                        </div></div>
                </section>
            </div>
        </div>
    );
}

export default Content;