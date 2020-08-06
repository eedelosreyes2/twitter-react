import React, { Component } from "react";
import { IconContext } from "react-icons";
import { RiMailAddLine } from "react-icons/ri";
import CenterCol from "../Reusable/CenterCol";
import SearchBar from "../SearchBar/SearchBar";
import BlueButton from "../Reusable/BlueButton";
import "./Messages.css";

export class Messages extends Component {
    render() {
        const { sizes } = this.props;

        return (
            <div>
                <CenterCol
                    sizes={sizes}
                    style={{ width: "406px" }}
                    component={
                        <React.Fragment>
                            <div
                                className="header1 border-bottom p-1"
                                style={{
                                    alignItems: "center",
                                    display: "flex",
                                    height: "50px",
                                    justifyContent: "space-between",
                                }}
                            >
                                <div>
                                    {sizes.showNav ? null : (
                                        <img
                                            className="user-image p-2"
                                            src={this.props.currentUser.userImg}
                                            alt="User"
                                            onClick={() =>
                                                this.props.onProfileClick()
                                            }
                                        />
                                    )}
                                    <span className="pl-3">Messages</span>
                                </div>
                                {sizes.showNav ? (
                                    <div
                                        className="icon-wrapper"
                                        style={{
                                            padding: "3px 10px",
                                            float: "right",
                                        }}
                                    >
                                        <IconContext.Provider
                                            value={{
                                                className: "twitter-blue",
                                            }}
                                        >
                                            <RiMailAddLine />
                                        </IconContext.Provider>
                                    </div>
                                ) : (
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
                                                        style: {
                                                            marginLeft: "-5px",
                                                            marginRight: "0px",
                                                        },
                                                    }}
                                                >
                                                    <RiMailAddLine />
                                                </IconContext.Provider>
                                            }
                                            height="50px"
                                            shadow={true}
                                            width="50px"
                                            isActive={true}
                                            event={null}
                                            path="/messages"
                                        />
                                    </div>
                                )}
                            </div>

                            <div
                                className="border-bottom"
                                style={{ height: "53px" }}
                            >
                                <SearchBar
                                    placeholder="Search for people and groups"
                                    style={{
                                        height: "35px",
                                        width: "95%",
                                    }}
                                />
                            </div>
                            <div
                                className="p-4"
                                style={{ textAlign: "center" }}
                            >
                                <p className="header2 text-center pt-3">
                                    Send a message, get a message
                                </p>
                                <p className="sub text-center mt-n2">
                                    Direct Messages are private conversations
                                    between you and other people on Twitter.
                                    Share Tweets, media, and more!
                                </p>
                                <BlueButton
                                    title="Start a conversation"
                                    height="40px"
                                    width="195px"
                                    isActive={true}
                                    event={null}
                                    path="/messages"
                                />
                            </div>
                        </React.Fragment>
                    }
                />

                {sizes.showRightPane ? (
                    <div
                        style={{
                            alignItems: "center",
                            display: "flex",
                            float: "right",
                            height: "100vh",
                            padding: "20px",
                            textAlign: "center",
                            width: "380px",
                        }}
                    >
                        <div>
                            <p className="header2 pt-3">
                                You don't have a message selected
                            </p>
                            <p className="sub mt-n2">
                                Choose one from your existing messages, or start
                                a new one
                            </p>
                            <BlueButton
                                title="New message"
                                height="40px"
                                width="140px"
                                isActive={true}
                                event={null}
                                path="/messages"
                            />
                        </div>
                    </div>
                ) : null}
            </div>
        );
    }
}

export default Messages;
