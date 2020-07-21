import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Pane1 } from "./Pane1";
import { IconContext } from "react-icons";
import { FiSettings } from "react-icons/fi";

export class Notifications extends Component {
    state = {
        tabs: [
            {
                id: 0,
                title: "All",
                href: "/notifications",
                isActive: false,
            },
            {
                id: 1,
                title: "Mentions",
                href: "/notifications/mentions",
                isActive: false,
            },
        ],
    };

    handleActive = (id) => {
        const tabs = [
            ...this.state.tabs.map((tab) => {
                if (tab.id === id) {
                    tab.isActive = true;
                } else {
                    tab.isActive = false;
                }
                return tab;
            }),
        ];

        this.setState({ tabs });
    };

    handleInactive = (id) => {
        const tabs = [
            ...this.state.tabs.map((tab, href) => {
                if (tab.id === id && tab.href !== href) {
                    tab.isActive = false;
                }
                return tab;
            }),
        ];

        this.setState({ tabs });
    };

    render() {
        return (
            <div>
                <div className="center-col">
                    <div
                        className="border-bottom"
                        style={{
                            height: "105px",
                        }}
                    >
                        <IconContext.Provider
                            value={{
                                color: "Dodgerblue",
                                size: "1.25em",
                                style: {
                                    float: "right",
                                    margin: "16px 15px",
                                },
                            }}
                        >
                            <FiSettings />
                        </IconContext.Provider>
                        <div className="header1 pl-3 pr-2 pt-3">
                            Notifications
                        </div>
                        <div className="pt-1" style={{ width: "100%" }}>
                            {this.state.tabs.map((tab) => {
                                const { id, title, href, isActive } = tab;
                                let className = "tab header2 p-3 ";
                                if (window.location.pathname.includes(href)) {
                                    className += "header2-primary tab-current";
                                } else {
                                    className += "body";
                                }

                                return (
                                    <Link
                                        to={href}
                                        onMouseEnter={() =>
                                            this.handleActive(id)
                                        }
                                        onMouseLeave={() =>
                                            this.handleInactive(id)
                                        }
                                        className={className}
                                        key={id}
                                        style={{
                                            float: "left",
                                            textAlign: "center",
                                            width: "50%",
                                        }}
                                    >
                                        {title}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="right-col">
                    <Pane1 />
                </div>
            </div>
        );
    }
}

export default Notifications;
