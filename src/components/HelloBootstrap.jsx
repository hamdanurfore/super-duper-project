import React from "react";

function HelloBootstrap() {
    return (
        // bootstrap navbar, jumbotron and cards
        <div classNameName="container">
            <nav classNameName="navbar navbar-expand-lg bg-body-tertiary">
                <div classNameName="container-fluid">
                    <a classNameName="navbar-brand" href="#">Navbar</a>
                    <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span classNameName="navbar-toggler-icon"></span>
                    </button>
                    <div classNameName="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul classNameName="navbar-nav me-auto mb-2 mb-lg-0">
                            <li classNameName="nav-item">
                                <a classNameName="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li classNameName="nav-item">
                                <a classNameName="nav-link" href="#">Link</a>
                            </li>
                            <li classNameName="nav-item dropdown">
                                <a classNameName="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul classNameName="dropdown-menu">
                                    <li><a classNameName="dropdown-item" href="#">Action</a></li>
                                    <li><a classNameName="dropdown-item" href="#">Another action</a></li>
                                    <li><hr classNameName="dropdown-divider"></hr></li>
                                    <li><a classNameName="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li classNameName="nav-item">
                                <a classNameName="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <form classNameName="d-flex" role="search">
                            <input classNameName="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                                <button classNameName="btn btn-outline-success" type="submit">Search</button>
                            </input>
                        </form>
                    </div>
                </div>
            </nav>
            <div classNameName="p-5 mb-4 bg-body-tertiary rounded-3">
                <div classNameName="container-fluid py-5">
                    <h1 classNameName="display-5 fw-bold">Custom jumbotron</h1>
                    <p classNameName="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
                    <button classNameName="btn btn-primary btn-lg" type="button">Example button</button>
                </div>
            </div>
            <div className="card" style={{width: '18rem'}}>
                <img src="..." className="card-img-top" alt="...">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                    </img>
            </div>
        </div>
    )
}

export default HelloBootstrap;
