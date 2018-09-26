import React, { Component } from "react";
import { Header, Button } from "../core/";

class App extends Component {
    render() {
        return (
            <div>
                <Header> This is cool yes! </Header>
                <Button>This is an example of a regular button</Button>
                <Button variation={Button.Styles.primary}>primary</Button>
                <Button variation={Button.Styles.secondary}>secondary</Button>
            </div>
        );
    }
}

App.propTypes = {};

export default App;
