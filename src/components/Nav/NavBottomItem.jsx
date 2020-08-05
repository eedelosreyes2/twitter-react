import React, { Component } from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";

export class NavBottomItem extends Component {
    render() {
        const { path, icon } = this.props.navItem;

        return (
            <Link
                to={path}
                onClick={() => this.props.onRefresh()}
                style={{ color: this.getColor(path) }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "50px",
                        width: "50px",
                    }}
                >
                    <IconContext.Provider value={{ size: "1.5em" }}>
                        {icon}
                    </IconContext.Provider>
                </div>
            </Link>
        );
    }

    getColor = (path) => {
        let color;
        const href = window.location.href;

        if (href.includes(path)) {
            color = "var(--twitter-blue)";
        } else {
            color = "#6b7b8a";
        }

        return color;
    };
}

export default NavBottomItem;
