/** @format */

import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav
        class="navbar navbar-expand-lg navbar-light  static-top mb-0 shadow"
        style={{ backgroundColor: "rgb(113, 195, 227)" }}
      >
        <div class="container">
          <img
            alt=""
            src="https://saxoncrossfit.com/wp-content/uploads/2019/11/cals.jpg"
            width="90"
            height="50"
            className="d-inline-block align-top"
          />
          <a class="navbar-brand">
            <Link
              to="/"
              className="navbar-brand"
              style={{
                color: "Maroon",
                fontSize: "2.00rem",
                marginLeft: "1rem",
              }}
            >
              Calorify
            </Link>
          </a>

          <div class="collapse navbar-collapse">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link">
                  <Link
                    to="/"
                    className="nav-link"
                    style={{
                      color: "Maroon",
                      fontSize: "1.25rem",
                    }}
                  >
                    Meal Logs
                  </Link>
                </a>
              </li>
              <li class="nav-item active">
                <a class="nav-link">
                  <Link
                    to="/calculate"
                    className="nav-link"
                    style={{
                      color: "Maroon",
                      fontSize: "1.25rem",
                    }}
                  >
                    Calculate Calorie
                  </Link>
                </a>
              </li>
              <li class="nav-item active">
                <a class="nav-link">
                  <Link
                    to="/create"
                    className="nav-link"
                    style={{
                      color: "Maroon",
                      fontSize: "1.25rem",
                    }}
                  >
                    New Meal
                  </Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  <Link
                    to="/user"
                    className="nav-link"
                    style={{
                      color: "Maroon",
                      fontSize: "1.25rem",
                    }}
                  >
                    New User
                  </Link>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
