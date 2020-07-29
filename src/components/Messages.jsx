import React, { Component } from "react";
import { RiMailAddLine } from "react-icons/ri";
import { SearchBar } from "./SearchBar";

export class Messages extends Component {
    render() {
        return (
            <div>
                <div className="center-col-sm">
                    <div className="header1 border-bottom pb-2 pl-3 pr-2 pt-2 mt-1">
                        Messages
                        <div className="riMailAddLine-wrapper">
                            <RiMailAddLine />
                        </div>
                    </div>
                    <div className="border-bottom" style={{ height: "53px" }}>
                        <SearchBar type="3" />
                    </div>
                    <div className="p-4">
                        <p className="header2 text-center pt-3">
                            Send a message, get a message
                        </p>
                        <p className="sub text-center mt-n2">
                            Direct Messages are private conversations between
                            you and other people on Twitter. Share Tweets,
                            media, and more!
                        </p>
                        <button
                            type="button"
                            className="btn btn-block btn-primary rounded-pill mt-2"
                            style={{
                                height: "40px",
                                margin: "0px auto",
                                width: "185px",
                            }}
                        >
                            Start a conversation
                        </button>
                    </div>
                </div>

                {this.props.sizes.showRightPane ? (
                    <div
                        style={{
                            float: "right",
                            width: "584px",
                        }}
                    >
                        <div
                            style={{
                                marginLeft: "100px",
                                marginTop: "285px",
                                width: "400px",
                            }}
                        >
                            <p className="header2 text-center pt-3">
                                You don't have a message selected
                            </p>
                            <p className="sub text-center mt-n2">
                                Choose one from your existing messages, or start
                                a new one
                            </p>
                            <button
                                type="button"
                                className="btn btn-block btn-primary rounded-pill mt-2"
                                style={{
                                    height: "40px",
                                    marginLeft: "125px",
                                    width: "140px",
                                }}
                            >
                                New message
                            </button>
                        </div>
                    </div>
                ) : null}
            </div>
        );
    }
}

export default Messages;
