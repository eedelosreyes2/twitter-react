import React, { Component } from "react";
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
                isCurrent: true,
                isActive: false,
            },
            {
                id: 1,
                title: "Mentions",
                href: "/notifications/mentions",
                isCurrent: false,
                isActive: false,
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
                                const { id, title, isCurrent } = tab;
                                let className = "tab header2 p-3 ";
                                className +=
                                    isCurrent === true
                                        ? "header2-primary tab-current"
                                        : null;
                                return (
                                    <div
                                        className={className}
                                        key={id}
                                        style={{
                                            float: "left",
                                            textAlign: "center",
                                            width: "50%",
                                        }}
                                    >
                                        {title}
                                    </div>
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
