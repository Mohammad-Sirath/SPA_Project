import React from "react";
import "./Articles.css"; // Optional for custom styles
import { Outlet } from "react-router-dom";
import MyNavbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";

function Articles() {
  return (
    <div>
      <MyNavbar />
      <div className="container mt-5">
        <h1 className="text-center mb-4 text-primary">Explore Our Articles</h1>
        <hr />

        {/* Bootstrap Grid Layout for Article Cards */}
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {/* PHP Article Card */}
          <div className="col">
            <div className="card shadow-lg rounded-3 border-light">
              <img
                src="https://via.placeholder.com/300x200.png?text=PHP+Article"
                className="card-img-top"
                alt="PHP"
              />
              <div className="card-body">
                <h5 className="card-title text-dark">PHP Article</h5>
                <p className="card-text text-muted">
                  Dive into the world of PHP, a powerful server-side language
                  that powers many dynamic websites.
                </p>
                <Link to="/articles/php" className="btn btn-primary btn-lg">
                  Read PHP Article
                </Link>
              </div>
            </div>
          </div>

          {/* JavaScript Article Card */}
          <div className="col" md={6} lg={4} xl={3}>
            <div className="card shadow-lg rounded-3 border-light">
              <img
                src="https://via.placeholder.com/300x200.png?text=JavaScript+Article"
                className="card-img-top"
                alt="JavaScript"
              />
              <div className="card-body">
                <h5 className="card-title text-dark">JavaScript Article</h5>
                <p className="card-text text-muted">
                  Learn the fundamentals of JavaScript, a popular programming
                  language that powers most of the web.
                </p>
                <Link to="/articles/js" className="btn btn-success btn-lg">
                  Read JavaScript Article
                </Link>
              </div>
            </div>
          </div>

          {/* React Article Card */}
          <div className="col" md={6} lg={4} xl={3}>
            <div className="card shadow-lg rounded-3 border-light">
              <img
                src="https://via.placeholder.com/300x200.png?text=React+Article"
                className="card-img-top"
                alt="React"
              />
              <div className="card-body">
                <h5 className="card-title text-dark">React Article</h5>
                <p className="card-text text-muted">
                  Discover React, a powerful JavaScript library for building
                  interactive UIs.
                </p>
                <Link to="/articles/react" className="btn btn-info btn-lg">
                  Read React Article
                </Link>
              </div>
            </div>
          </div>
        </div>

        <hr />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Articles;
