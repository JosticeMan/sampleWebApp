/**
 * Name: Overview.css
 * Description: Overview component will be used to display the overview information
 *
 * @author Justin Yau
 */
import React, {Component} from "react";
import "./Overview.css";

class Overview extends Component {
    render() {
        return (
          <div id="main-div" className="container">
              <div className="row justify-content-between">
                  <div className="col-sm-6">
                      This course teaches the methods needed to organize and run
                      information-gathering events. It combines the basics of graphic decision
                      making and modeling with facilitation, communication, and meeting
                      management skills.
                  </div>
                  <div className="col-sm-3">
                      <strong className="tall-line">
                          Prerequisites
                      </strong> <br />
                      No prerequisites: this course is suitable for both novices and experienced people
                      who need to elicit business requirements or solve business problems.
                  </div>
              </div>
              <div className="row justify-content-between">
                  <div className="col-sm-6">
                      <strong className="tall-line">
                          You should attend if you:
                      </strong> <br />
                      <ul id="o-list">
                          <li>• Work as a business analyst</li>
                          <li>• Define and manage requirements through the development life cycle</li>
                          <li>• Elicit information from stakeholders to define requirements</li>
                          <li>• Solve business problems</li>
                      </ul>
                  </div>
                  <div className="col-sm-3">
                      <strong className="tall-line">
                          Course level
                      </strong> <br />
                      Novice/Advanced
                  </div>
              </div>
          </div>
        );
    }
}

export default Overview;