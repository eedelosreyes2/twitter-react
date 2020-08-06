import React, { Component } from "react";
import { Link } from "react-router-dom";

export class ProfileBar extends Component {
    render() {
        return (
            <div
                style={{
                    alignItems: "center",
                    borderBottom: "2px solid",
                    borderColor: "#e6ecf0",
                    display: "flex",
                    justifyContent: "space-around",
                    height: "49px",
                    width: "100%",
                }}
            >
                {this.props.tabs.map((tab) => {
                    const { id, title, href, isCurrent } = tab;
                    let className = "tab header3 ";
                    if (isCurrent) {
                        className += "header3-primary tab-current";
                    }
                    return (
                        <Link
                            to={href}
                            onClick={() => this.props.onCurrent(id)}
                            className={className}
                            key={id}
                            style={{
                                display: "table",
                                height: "100%",
                                textAlign: "center",
                                width: "25%",
                            }}
                        >
                            <span
                                style={{
                                    display: "table-cell",
                                    verticalAlign: "middle",
                                }}
                            >
                                {title}
                            </span>
                        </Link>
                    );
                })}
            </div>
        );
    }
}

export default ProfileBar;
