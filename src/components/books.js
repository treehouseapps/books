import { Link } from "react-router-dom";
import Data from "./data";
const Books = () => {
    return (
        <div>
            <div className="d-flex justify-content-evenly">
                <section id="feature" className="book-feature">
                    <div className="row">
                        {Data.map((element, index) => (
                            <div key={index} className="col-md-4 mb-4 d-flex justify-content-center">
                                <div className="book-item card shadow border-0" style={{ width: "18rem" }}>
                                    <div className="book feature-box card-body text-center">
                                        <div className="align mb-3">
                                            <img
                                                src={element.img}
                                                alt={element.title}
                                                className="img-fluid rounded"
                                                style={{ maxHeight: "150px", objectFit: "cover" }}
                                            />
                                        </div>
                                        <h4 className="card-title text-primary">{element.title}</h4>
                                        <p className="card-text text-muted">{element.body}</p>
                                        <Link to='/'>
                                            <button type="button" className="btn btn-light mb-2">
                                                Download
                                                <span className="badge bg-white text-dark ms-2">
                                                    <i className="bi bi-cloud-arrow-down-fill"></i>
                                                </span>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </section >
            </div>
        </div>
    );
}

export default Books;