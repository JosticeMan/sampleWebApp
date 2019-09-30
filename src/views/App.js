import React from 'react';
import '../styles/App.css';

import GeneralOverview from "./components/GeneralOverview/GeneralOverview";
import NavBar from "./components/NavBar/NavBar";
import Overview from "./components/Overview/Overview";

function App() {
  return (
    <div className="App">
        <GeneralOverview />
        <NavBar />
        <Overview />
    </div>
  );
}

export default App;
