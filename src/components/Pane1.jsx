import React, { Component } from "react";
import SearchBar from "./SearchBar";
import WhatsHappening from "./WhatsHappening";
import WhoToFollow from "./WhoToFollow";
import Breadcrumbs from "./Breadcrumbs";

export class Pane1 extends Component {
    render() {
        return (
            <div style={{ display: "inline-block", float: "right" }}>
                <SearchBar />
                <WhatsHappening />
                <WhoToFollow />
                <Breadcrumbs />
            </div>
        );
    }
}

export default Pane1;
