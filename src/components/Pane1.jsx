import React, { Component } from "react";
import SearchBar from "./SearchBar";
import WhatsHappening from "./WhatsHappening";
import Follow from "./Follow";
import Breadcrumbs from "./Breadcrumbs";

export class Pane1 extends Component {
    render() {
        return (
            <div style={{ display: "inline-block", float: "right" }}>
                <SearchBar type="1" />
                <WhatsHappening />
                <Follow title="Who to follow" />
                <Breadcrumbs />
            </div>
        );
    }
}

export default Pane1;
