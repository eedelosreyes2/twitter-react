import React, { Component } from "react";
import { Link } from "react-router-dom";

export class ExploreBar extends Component {
    render() {
        return (
            <div
                style={{
                    paddingTop: "67px",
                    maxWidth: this.props.collapseCenter ? "80vw" : "600px",
                }}
            >
                {this.props.tabs.map((tab) => {
                    const { id, title, href, isCurrent } = tab;
                    let className = "tab header3 p-3 ";
                    if (isCurrent) {
                        className += "header3-primary tab-current";
                    }
                    return (
                        <Link
                            to={"/explore/tabs" + href}
                            onClick={() => this.props.onCurrent(id)}
                            className={className}
                            key={id}
                        >
                            {title}
                        </Link>
                    );
                })}
            </div>
        );
    }
}

export default ExploreBar;
