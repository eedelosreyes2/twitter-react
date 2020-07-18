import React, { Component } from "react";
import { WhoToFollow } from "./WhoToFollow";
import { Breadcrumbs } from "./Breadcrumbs";

export class Explore extends Component {
    render() {
        return (
            <div>
                <div className="center-col"></div>
                <div className="right-col">
                    <WhoToFollow />
                    <Breadcrumbs />
                </div>
            </div>
        );
    }
}

export default Explore;
