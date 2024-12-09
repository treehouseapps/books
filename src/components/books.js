import { Link } from "react-router-dom";
import Data from "./data";

const Books = () => {
    return (
        <div className="container py-5">
            <section id="feature" className="book-feature">
                <div className="row g-4">
                    {Data.map((element, index) => (
                        <div key={index} className="col-md-4">
                            <div className="card shadow-sm h-100 border-0">
                                <img
                                    src={element.img}
                                    alt={element.title}
                                    className="card-img-top rounded-top"
                                    style={{ maxHeight: "200px", objectFit: "cover" }}
                                />
                                <div className="card-body text-center">
                                    <h5 className="card-title text-primary">{element.title}</h5>
                                    <p className="card-text text-muted">{element.body}</p>
                                    <Link to="/">
                                        <button type="button" className="btn btn-outline-primary">
                                            Download
                                            <span className="ms-2">
                                                <i className="bi bi-cloud-arrow-down-fill"></i>
                                            </span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Books;
