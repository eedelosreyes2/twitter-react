import React, { Component } from "react";
import { Link } from "react-router-dom";

export class ExploreBar extends Component {
    render() {
        return (
            <div
                className="scrolling-wrapper"
                style={{
                    bottom: 0,
                    height: "30px",
                    overflowX: "scroll",
                    overflowY: "hidden",
                    width: this.props.sizes.smallTablet ? "100vw" : "600px",
                    whiteSpace: "nowrap",
                    position: "absolute",
                }}
            >
                {this.props.tabs.map((tab) => {
                    const { id, title, href, isCurrent } = tab;
                    let className = "tab header3 pt-3 pr-3 pb-2 pl-3 ";
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
