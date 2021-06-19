export default function Dashboard(props) {
    return (
        <div>
            <div className="row">
                <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box">
                        <span className="info-box-icon bg-info elevation-1">
                            <i className="fas fa-cog"></i>
                        </span>

                        <div className="info-box-content">
                            <span className="info-box-text">CPU Traffic</span>
                            <span className="info-box-number">
                                10
                                <small>%</small>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box mb-3">
                        <span className="info-box-icon bg-danger elevation-1">
                            <i className="fas fa-thumbs-up"></i>
                        </span>

                        <div className="info-box-content">
                            <span className="info-box-text">Likes</span>
                            <span className="info-box-number">41,410</span>
                        </div>
                    </div>
                </div>

                <div className="clearfix hidden-md-up"></div>

                <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box mb-3">
                        <span className="info-box-icon bg-success elevation-1">
                            <i className="fas fa-shopping-cart"></i>
                        </span>

                        <div className="info-box-content">
                            <span className="info-box-text">Sales</span>
                            <span className="info-box-number">760</span>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box mb-3">
                        <span className="info-box-icon bg-warning elevation-1">
                            <i className="fas fa-users"></i>
                        </span>

                        <div className="info-box-content">
                            <span className="info-box-text">New Members</span>
                            <span className="info-box-number">2,000</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>

                            <p className="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>

                            <a href="#" className="card-link">
                                Card link
                            </a>
                            <a href="#" className="card-link">
                                Another link
                            </a>
                        </div>
                    </div>

                    <div className="card card-primary card-outline">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>

                            <p className="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                            <a href="#" className="card-link">
                                Card link
                            </a>
                            <a href="#" className="card-link">
                                Another link
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="m-0">Featured</h5>
                        </div>
                        <div className="card-body">
                            <h6 className="card-title">
                                Special title treatment
                            </h6>

                            <p className="card-text">
                                With supporting text below as a natural lead-in
                                to additional content.
                            </p>
                            <a href="#" className="btn btn-primary">
                                Go somewhere
                            </a>
                        </div>
                    </div>

                    <div className="card card-primary card-outline">
                        <div className="card-header">
                            <h5 className="m-0">Featured</h5>
                        </div>
                        <div className="card-body">
                            <h6 className="card-title">
                                Special title treatment
                            </h6>

                            <p className="card-text">
                                With supporting text below as a natural lead-in
                                to additional content.
                            </p>
                            <a href="#" className="btn btn-primary">
                                Go somewhere
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
