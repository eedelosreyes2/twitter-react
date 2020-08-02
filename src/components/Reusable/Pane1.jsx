import React, { Component } from "react";
import SearchBar from "../SearchBar/SearchBar";
import WhatsHappening from "./WhatsHappening";
import Follow from "./Follow";
import Breadcrumbs from "./Breadcrumbs";
import "./Reusable.css";

export class Pane1 extends Component {
    render() {
        return (
            <div
                style={{
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    float: "right",
                    paddingLeft: "30px",
                    position: "sticky",
                    width: "380px",
                }}
            >
                <SearchBar
                    placeholder={"Search Twitter"}
                    style={{ height: "38px", width: "350px" }}
                />
                <WhatsHappening />
                <Follow title="Who to follow" />
                <Breadcrumbs />
            </div>
        );
    }
}

export default Pane1;
