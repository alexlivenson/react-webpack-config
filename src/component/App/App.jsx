import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "../Header/Header";

class App extends Component {
    render() {
        return (
            <div>
                <Header> This is cool yes! </Header>
            </div>
        );
    }
}

App.propTypes = {};

export default App;
