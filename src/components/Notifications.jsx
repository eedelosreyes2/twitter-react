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
                isCurrent: false,
            },
            {
                id: 1,
                title: "Mentions",
                href: "/notifications/mentions",
                isCurrent: false,
            },
        ],
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
                                className: "twitter-blue",
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

                        <div className="row pt-2">
                            {this.state.tabs.map((tab) => {
                                const { id, title, href, isCurrent } = tab;
                                let className = "col-6 tab header2 p-3 ";
                                className +=
                                    isCurrent === true
                                        ? "header2-primary tab-current"
                                        : null;
                                return (
                                    <Link
                                        to={href}
                                        className={className}
                                        style={{
                                            textAlign: "center",
                                            width: "50%",
                                        }}
                                        key={id}
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
