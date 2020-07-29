import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CenterCol } from "./Reusable/CenterCol";
import { Pane1 } from "./Reusable/Pane1";
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

    renderBody = () => {
        const path = window.location.pathname;
        var body;

        if (path === "/notifications") {
            body =
                "From likes to Retweets and a whole lot more, this is where all the action happens.";
        } else if (path === "/notifications/mentions") {
            body = "When someone mentions you, you’ll find it here.";
        }

        return body;
    };

    render() {
        const { sizes } = this.props;

        return (
            <React.Fragment>
                <CenterCol
                    sizes={sizes}
                    component={
                        <React.Fragment>
                            <div
                                style={{
                                    borderBottom: "2px solid",
                                    borderColor: "#e6ecf0",
                                    height: "104px",
                                }}
                            >
                                <div
                                    className="fiSettings-wrapper"
                                    style={{
                                        float: "right",
                                    }}
                                >
                                    <IconContext.Provider
                                        value={{
                                            className: "twitter-blue",
                                            size: "1.25em",
                                            style: {
                                                float: "right",
                                                margin: "11px 11px",
                                            },
                                        }}
                                    >
                                        <FiSettings />
                                    </IconContext.Provider>
                                </div>

                                <div className="header1 pb-1 pl-3 pr-2 pt-2 mt-1 mb-2">
                                    {sizes.showNav ? null : (
                                        <img
                                            className="user p-2 ml-n2 mr-3 mb-n4"
                                            src={this.props.currentUser.userImg}
                                            alt="User"
                                        />
                                    )}
                                    Notifications
                                </div>

                                <div
                                    style={{
                                        overflow: "hidden",
                                        width: sizes.collapseCenter
                                            ? "80vw"
                                            : "600px",
                                    }}
                                >
                                    {this.state.tabs.map((tab) => {
                                        const {
                                            id,
                                            title,
                                            href,
                                            isCurrent,
                                        } = tab;
                                        let className = "tab tab2 header3 p-3 ";
                                        if (
                                            isCurrent ||
                                            window.location.pathname === href
                                        ) {
                                            className +=
                                                "header3-primary tab-current";
                                        }
                                        return (
                                            <Link
                                                to={href}
                                                className={className}
                                                key={id}
                                            >
                                                {title}
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                            <p className="header2 text-center mt-5">
                                Nothing to see here — yet
                            </p>
                            <p className="sub text-center mt-n2">
                                {this.renderBody()}
                            </p>
                        </React.Fragment>
                    }
                />
                {sizes.showRightPane ? <Pane1 /> : null}
            </React.Fragment>
        );
    }
}

export default Notifications;
