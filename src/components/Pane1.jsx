import React, { Component } from "react";
import SearchBar from "./SearchBar";
import WhatsHappening from "./WhatsHappening";

export class Pane1 extends Component {
    render() {
        return (
            <div style={{}}>
                <SearchBar />
                <WhatsHappening />
            </div>
        );
    }
}

export default Pane1;
