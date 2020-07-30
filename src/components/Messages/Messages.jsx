import React, { Component } from "react";
import { RiMailAddLine } from "react-icons/ri";
import SearchBar from "../SearchBar/SearchBar";
import BlueButton from "../Reusable/BlueButton";
import "./Messages.css";

export class Messages extends Component {
    render() {
        const { sizes } = this.props;
        const showRightPane = window.innerWidth > 1070;

        return (
            <div>
                <div
                    className="border-right"
                    // style={{
                    //     backgroundColor: "red",
                    //     height: "100vh",
                    //     display: "inline-block",
                    //     width: showRightPane ? "406px" : "100%",
                    //     // width: "406px",
                    // }}
                    style={{
                        backgroundColor: "red",
                        // display: "inline-block",
                        height: "100vh", // fix
                        width: showRightPane ? "406px" : "300px",
                        // width: sizes.smallTablet
                        //     ? sizes.showNav
                        //         ? sizes.centerColWidth
                        //         : "100vw"
                        //     : "600px",
                    }}
                >
                    <div className="header1 border-bottom">
                        Messages
                        <div className="riMailAddLine-wrapper">
                            <RiMailAddLine />
                        </div>
                    </div>
                    <div className="border-bottom" style={{ height: "53px" }}>
                        <SearchBar
                            placeholder="Search Twitter"
                            style={{
                                height: "35px",
                                width: "300px",
                            }}
                        />
                    </div>
                    <div className="p-4" style={{ textAlign: "center" }}>
                        <p className="header2 text-center pt-3">
                            Send a message, get a message
                        </p>
                        <p className="sub text-center mt-n2">
                            Direct Messages are private conversations between
                            you and other people on Twitter. Share Tweets,
                            media, and more!
                        </p>
                        <BlueButton
                            title="Start a conversation"
                            height="40px"
                            width="185px"
                            isActive={true}
                            event={null}
                        />
                    </div>
                </div>

                {showRightPane ? (
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
                                textAlign: "center",
                                width: "400px",
                            }}
                        >
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
                            />
                        </div>
                    </div>
                ) : null}
            </div>
        );
    }
}

export default Messages;
