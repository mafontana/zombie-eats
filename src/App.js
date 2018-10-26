import React from "react";
import Order from "./components/Order";
import Header from "./components/Header";
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

const AppRouter = () => (
    <Router>
    <div>
      <nav className="navbar navbar-dark bg-primary">
        <Link className="navbar-brand" to="/">Home</Link>
        <Link className="navbar-brand" to="/order/">Order</Link>
      </nav>
    <Route path="/" exact component={Header} />
    <Route path="/order/" component={Order} />
    </div>
    </Router>

)

export default AppRouter;