import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CenterCol } from "./Reusable/CenterCol";
import BlueButton from "./Reusable/BlueButton";
import { Pane1 } from "./Reusable/Pane1";
import { IconContext } from "react-icons";
import { FiSettings } from "react-icons/fi";
import { FaFeatherAlt } from "react-icons/fa";

export class Notifications extends Component {
    state = {
        tabs: [
            {
                id: 0,
                title: "All",
                path: "/notifications",
                isCurrent: true,
            },
            {
                id: 1,
                title: "Mentions",
                path: "/notifications/mentions",
                isCurent: false,
            },
        ],
    };

    renderTabs = (tab) => {
        let className = "tab header3 p-3 ";
        const href = window.location.href;

        if (tab === "All" && !href.includes("mentions")) {
            className += "header3-primary tab-current";
        } else if (tab === "Mentions" && href.includes("mentions")) {
            className += "header3-primary tab-current";
        }

        return className;
    };

    renderBody = () => {
        let body;
        const href = window.location.href;

        if (href.includes("mentions")) {
            body = "When someone mentions you, you’ll find it here.";
        } else {
            body =
                "From likes to Retweets and a whole lot more, this is where all the action happens.";
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
                                className="header1 border-bottom"
                                style={{
                                    alignItems: "stretch",
                                    display: "flex",
                                    flexDirection: "column",
                                    height: "104px",
                                    justifyContent: "space-between",
                                }}
                            >
                                <div
                                    style={{
                                        alignItems: "center",
                                        display: "flex",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <div className="pl-1">
                                        {sizes.showNav ? null : (
                                            <img
                                                className="user-image p-2"
                                                src={
                                                    this.props.currentUser
                                                        .userImg
                                                }
                                                alt="User"
                                                onClick={() =>
                                                    this.props.onProfileClick()
                                                }
                                            />
                                        )}
                                        <span className="pl-3">
                                            Notifications
                                        </span>
                                    </div>
                                    <div className="icon-wrapper m-1">
                                        <IconContext.Provider
                                            value={{
                                                className: "twitter-blue",
                                                style: {
                                                    float: "right",
                                                    margin: "11px",
                                                },
                                            }}
                                        >
                                            <FiSettings />
                                        </IconContext.Provider>
                                    </div>
                                </div>
                                <div
                                    style={{
                                        marginTop: "1px",
                                        textAlign: "center",
                                    }}
                                >
                                    <Link
                                        to="/notifications"
                                        className={this.renderTabs("All")}
                                        style={{
                                            float: "left",
                                            width: "50%",
                                        }}
                                    >
                                        All
                                    </Link>
                                    <Link
                                        to="/notifications/mentions"
                                        className={this.renderTabs("Mentions")}
                                        style={{
                                            float: "left",
                                            width: "50%",
                                        }}
                                    >
                                        Mentions
                                    </Link>
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
                {sizes.showNav ? null : (
                    <div
                        style={{
                            bottom: 80,
                            right: 20,
                            position: "fixed",
                        }}
                    >
                        <BlueButton
                            title={
                                <IconContext.Provider
                                    value={{
                                        color: "white",
                                        size: "1.25em",
                                        style: { marginBottom: "3px" },
                                    }}
                                >
                                    <FaFeatherAlt />
                                </IconContext.Provider>
                            }
                            height="50px"
                            shadow={true}
                            width="50px"
                            isActive={true}
                            event={null}
                            path="/compose/tweet"
                        />
                    </div>
                )}

                {sizes.showRightPane ? <Pane1 /> : null}
            </React.Fragment>
        );
    }
}

export default Notifications;
