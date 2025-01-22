import React from "react";
import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import Sale from "./components/Sale";
import Recommended from "./components/Recommended";
import Topic from "./components/Topic";
import Popular from "./components/Popular";
import Footer from "./components/Footer";
import "./style.css"




function App() {
    return (
        <div className="App">
            <Navbar />
            <Categories />
            <Sale />
            <Recommended />
            <Topic />
            <Popular />
            <Footer />
        </div>
    );
}

export default App;
