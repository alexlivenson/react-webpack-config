import React, { Component } from "react";
import { Header, Button, Link } from "../core/";
import "./custom.scss";

class App extends Component {
    render() {
        return (
            <div>
                <Header> This is cool yes! Momey </Header>
                <Button>This is an example of a regular button</Button>
                <Button variation={Button.Styles.primary}>primary</Button>
                <Button variation={Button.Styles.secondary}>secondary</Button>
                <Button className="bigger-button">Using another class</Button>
                <Link>Link</Link>
            </div>
        );
    }
}

App.propTypes = {};

export default App;
