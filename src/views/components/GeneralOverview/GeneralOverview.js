/**
 * Name: GeneralOverview.js
 * Description: This class will contain all the necessary HTML components to display the general banner/overview of the homepage
 *
 * @author Justin Yau
 */

import React, {Component} from 'react';
import "./GeneralOverview.css";

class GeneralOverview extends Component {

    render() {
        return (
            <section id="g-sec" className="jumbotron text-center">
                <div className="container">
                    <h1 id="g-h1" className="jumbotron-heading">FACILITATION SKILLS FOR <br /> BUSINESS ANALYSTS</h1>
                </div>
                <p id="g-p" className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Posuere diam faucibus neque <br /> vulputate nulla metus pharetra.</p>
                <p className="h-25 container">
                    <button type="button" id="g-btn" className="btn btn-secondary">Register</button>
                </p>
            </section>
        );
    }
}

export default GeneralOverview;