import React, { Component } from "react";
import { Link } from "react-router-dom";

export class ProfileBar extends Component {
    render() {
        return (
            <div
                style={{
                    borderBottom: "2px solid",
                    borderColor: "#e6ecf0",
                    height: "49px",
                }}
            >
                {this.props.tabs.map((tab) => {
                    const { id, title, href, isCurrent } = tab;
                    let className = "tab tab3 header3 ";
                    if (isCurrent) {
                        className += "header3-primary tab-current";
                    }
                    return (
                        <Link
                            to={href}
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

export default ProfileBar;
