import React from "react";
import "./Articles.css";
import { Outlet } from "react-router-dom";
import MyNavbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";

function Articles() {
  return (
    <div>
      <MyNavbar />
      <h1 className="wrapper">Articles Page!</h1>
      <hr />
      <div className="btnContainer">
        <Link to="/articles/php" className="linkBtn">
          php article
        </Link>
        <Link to="/articles/js" className="linkBtn">
          js article
        </Link>
        <Link to="/articles/react" className="linkBtn">
          react article
        </Link>
      </div>
      <hr />
      <Outlet />
    </div>
  );
}

export default Articles;
