/**
 * Name: Home.js
 * Description: This will be the first view that the users see when they get routed to the page, the Homepage.
 *
 * @author Justin Yau
 */
import React, {Component} from "react";

import GeneralOverview from "./components/GeneralOverview/GeneralOverview";
import NavBar from "./components/NavBar/NavBar";

class Home extends Component {
    render() {
        return (
            <div className="App">
                <GeneralOverview />
                <NavBar />
            </div>
        )
    }
}

export default Home;