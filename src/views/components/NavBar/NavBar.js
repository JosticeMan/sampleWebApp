/**
 * Name: NavBar.css
 * Description: Navbar component that will be used by the main page view to display all navigatable pages
 *
 * @author Justin Yau
 */
import React, {Component} from "react";
import "./NavBar.css";

class NavBar extends Component {
    render() {
        return (
          <nav id="main-nav" className="navbar navbar-expand-sm navbar-light">
              <div className="container collapse navbar-collapse" id="target-nav1">
                  /*ALL NAVIGATABLE LINKS WILL BE LISTED IN THIS LIST*/
                  <ul id="nav-list" className="navbar-nav mr-auto">
                      <li className="nav-item active">
                          <a className="nav-link" href="/">Overview<span className="sr-only">(current)</span></a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="/">Courses</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="/">Student Experience</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="/">Syllabus</a>
                      </li>
                  </ul>
              </div>
          </nav>
        );
    }
}

export default NavBar;