import React, { Component } from "react";
import { Pane1 } from "./Pane1";
import { IconContext } from "react-icons";
import { IoIosArrowRoundBack } from "react-icons/io";
import { MdPlaylistAdd } from "react-icons/md";
import { FiMoreHorizontal } from "react-icons/fi";

export class Lists extends Component {
    render() {
        return (
            <div>
                <div className="center-col">
                    <div
                        className="border-bottom pl-3 pt-1"
                        style={{ height: "55px" }}
                    >
                        <div className="ioIosArrowRoundBack-wrapper">
                            <IconContext.Provider
                                value={{
                                    className: "twitter-blue",
                                    size: "2em",
                                }}
                            >
                                <IoIosArrowRoundBack />
                            </IconContext.Provider>
                        </div>
                        <div
                            style={{
                                float: "left",
                                height: "100%",
                                paddingLeft: "28px",
                            }}
                        >
                            <p className="header1 pb-1">Lists</p>
                            <p className="sub mt-n4">
                                {this.props.currentUser.handle}
                            </p>
                        </div>
                        <div style={{ float: "right" }}>
                            <IconContext.Provider
                                value={{
                                    className: "twitter-blue",
                                    size: "1.7em",
                                }}
                            >
                                <div className="ioIosArrowRoundBack-wrapper mr-2 pl-1 pt-1">
                                    <MdPlaylistAdd />
                                </div>
                                <div
                                    className="ioIosArrowRoundBack-wrapper mr-3 pt-1"
                                    style={{ paddingLeft: "2px" }}
                                >
                                    <FiMoreHorizontal />
                                </div>
                            </IconContext.Provider>
                        </div>
                    </div>
                    <div
                        className="header1 border-bottom pl-3 pt-2"
                        style={{
                            height: "45px",
                        }}
                    >
                        Pinned
                    </div>
                    <div
                        className="sub"
                        style={{
                            borderBottom: "10px solid",
                            borderColor: "#e6ecf0",
                            padding: "36px 40px",
                            textAlign: "center",
                        }}
                    >
                        Nothing to see here yet — pin up to five of your
                        favorite Lists to access them quickly.
                    </div>
                    <div
                        className="header1 border-bottom pl-3 pt-2"
                        style={{
                            height: "45px",
                        }}
                    >
                        Your Lists
                    </div>
                    <div style={{ padding: "38px", textAlign: "center" }}>
                        <p className="header1 mb-2">
                            You haven’t created any Lists yet
                        </p>
                        <p className="sub mb-3">
                            When you do, it’ll show up here.
                        </p>
                        <button
                            type="button"
                            className="btn btn-block btn-primary rounded-pill"
                            style={{
                                height: "40px",
                                marginLeft: "190px",
                                width: "130px",
                            }}
                        >
                            Create a List
                        </button>
                    </div>
                </div>
                <div className="right-col">
                    <Pane1 />
                </div>
            </div>
        );
    }
}

export default Lists;
