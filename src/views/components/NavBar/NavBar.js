/**
 * Name: NavBar.css
 * Description: Navbar component that will be used by the main page view to display all navigatable pages
 *
 * @author Justin Yau
 */
import React, {Component} from "react";
import "./NavBar.css";

import Overview from "../Overview/Overview.js";

class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage : [1,0,0,0]
        }
    }

    // Routine called to update the state that tracks what page we're on
    toggle = (number) => {
        var tempArray = [0, 0, 0, 0];
        tempArray[number] = 1;
        this.setState({
            currentPage : tempArray
        });
    }

    render() {
        const { currentPage } = this.state;

        return (
          <div>
              <nav id="main-nav" className="navbar navbar-expand-sm navbar-light">
                  <div className="container collapse navbar-collapse" id="target-nav1">
                      <ul id="nav-list" className="navbar-nav mr-auto">
                          <li className={`nav-item ${currentPage[0] ? "active" : ""}`}>
                              <a className="nav-link" href="#" onClick={() => this.toggle(0)}>Overview<span className="sr-only">(current)</span></a>
                          </li>
                          <li className={`nav-item ${currentPage[1] ? "active" : ""}`}>
                              <a className="nav-link" href="#" onClick={() => this.toggle(1)}>Courses</a>
                          </li>
                          <li className={`nav-item ${currentPage[2] ? "active" : ""}`}>
                              <a className="nav-link" href="#" onClick={() => this.toggle(2)}>Student Experience</a>
                          </li>
                          <li className={`nav-item ${currentPage[3] ? "active" : ""}`}>
                              <a className="nav-link" href="#" onClick={() => this.toggle(3)}>Syllabus</a>
                          </li>
                      </ul>
                  </div>
              </nav>
              {currentPage[0] ? <Overview></Overview> : ''}
          </div>
        );
    }
}

export default NavBar;