import React, { Component } from "react";

export class Breadcrumbs extends Component {
    render() {
        return (
            <div className="sub" style={{ margin: "15px auto 100px 40px" }}>
                {/* TODO: change to spans */}
                Terms Privacy policy Cookies Ads info More <br />© 2020 Elijah
                Delos Reyes.
            </div>
        );
    }
}

export default Breadcrumbs;
