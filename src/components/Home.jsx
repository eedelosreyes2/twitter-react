import React, { Component } from "react";
import WhatsHappening from "./WhatsHappening";
import Feed from "./Feed";

export class Home extends Component {
    render() {
        return (
            <div className="border-right" style={{ width: "47%" }}>
                <div className="h5 font-weight-bold border-bottom pb-3 pl-3 pt-3">
                    Home
                </div>
                <WhatsHappening />
                <Feed />
            </div>
        );
    }
}

export default Home;
