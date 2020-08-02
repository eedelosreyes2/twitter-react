import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CenterCol } from "../Reusable/CenterCol";
import NotificationsBar from "./NotificationsBar";
import { Pane1 } from "../Reusable/Pane1";
import { IconContext } from "react-icons";
import { FiSettings } from "react-icons/fi";

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

    renderTabs = () => {
        let className = "tab header3 p-3 ";
        const href = window.location.href;

        if (href.includes("mentions")) {
            className += "";
        } else {
            className += "";
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
                                {/* <NotificationsBar
                                    tabs={this.state.tabs}
                                    onCurrent={this.handleCurrent}
                                /> */}
                                <div
                                    style={{
                                        marginTop: "1px",
                                        textAlign: "center",
                                    }}
                                >
                                    <Link
                                        to="/notifications"
                                        className={this.renderTabs()}
                                        style={{
                                            float: "left",
                                            width: "50%",
                                        }}
                                    >
                                        All
                                    </Link>
                                    <Link
                                        to="/notifications/mentions"
                                        className={this.renderTabs()}
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
                {sizes.showRightPane ? <Pane1 /> : null}
            </React.Fragment>
        );
    }
}

export default Notifications;