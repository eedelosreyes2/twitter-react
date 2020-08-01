import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NotificationsBar extends Component {
    render() {
        const { tabs } = this.props;

        return (
            <div>
                {tabs.map((tab) => {
                    const { id, title, path } = tab;
                    const href = window.location.href;
                    let className = "tab header3 p-3 ";

                    if (tab.isCurrent) {
                        className += "header3-primary tab-current";
                    }
                    return (
                        <Link
                            to={path}
                            key={id}
                            onClick={() => this.props.onCurrent(id)}
                            className={className}
                            style={{
                                float: "left",
                                marginTop: "1px",
                                textAlign: "center",
                                width: "50%",
                            }}
                        >
                            {title}
                        </Link>
                    );
                })}
            </div>
        );
    }
}

export default NotificationsBar;
