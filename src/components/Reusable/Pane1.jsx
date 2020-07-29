import React, { Component } from "react";
import SearchBar from "../SearchBar/SearchBar";
import WhatsHappening from "./WhatsHappening";
import Follow from "./Follow";
import Breadcrumbs from "./Breadcrumbs";
import "./Reusable.css";

export class Pane1 extends Component {
    render() {
        return (
            <div style={{ float: "right" }}>
                <SearchBar sizes={null} type="1" />
                <WhatsHappening />
                <Follow title="Who to follow" />
                <Breadcrumbs />
            </div>
        );
    }
}

export default Pane1;
