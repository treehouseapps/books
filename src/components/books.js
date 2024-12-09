import { Link } from "react-router-dom";
import Data from "./data";
const Books = () => {
    return (
        <div>
            <div className="d-flex justify-content-evenly">
                <section id="feature" className="book-feature">

                    <div className="row">
                        {Data.map((element) => (
                            <div className="book-item">
                                <div className="book feature-box col-md-4">
                                    <div className="align"> <img src={element.img} alt="" />
                                        <h4>{element.title}</h4></div>
                                    <p>{element.body}</p>
                                </div>
                                <Link to='/'> <button type="button" class="btn btn-light mb-2">
                                    Download <span class="badge bg-white text-dark"><i className="bi bi-cloud-arrow-down-fill"></i></span>
                                </button></Link>
                            </div>
                        ))}
                    </div>
                </section >
            </div>
        </div>
    );
}

export default Books;