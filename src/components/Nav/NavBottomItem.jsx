import React, { Component } from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";

export class NavBottomItem extends Component {
    render() {
        const { id, href, icon } = this.props.navItem;

        return (
            <Link
                to={href}
                onClick={() => this.props.onRefresh()}
                style={{
                    color: this.getColor(href),
                    padding: "auto",
                }}
            >
                <IconContext.Provider value={{ size: "1.5em" }}>
                    {icon}
                </IconContext.Provider>
            </Link>
        );
    }

    getColor = (href) => {
        let color;
        if (window.location.pathname.includes(href)) {
            color = "var(--twitter-blue)";
        } else {
            color = "#6b7b8a";
        }

        return color;
    };
}

export default NavBottomItem;
