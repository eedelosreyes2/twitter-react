import React, { Component } from "react";
import { CenterCol } from "./Reusable/CenterCol";
import { Pane1 } from "./Reusable/Pane1";
import { BlueButton } from "./Reusable/BlueButton";
import { IconContext } from "react-icons";
import { IoIosArrowRoundBack } from "react-icons/io";
import { MdPlaylistAdd } from "react-icons/md";
import { FiMoreHorizontal } from "react-icons/fi";

export class Lists extends Component {
    render() {
        const { sizes } = this.props;

        return (
            <div>
                <CenterCol
                    sizes={sizes}
                    component={
                        <React.Fragment>
                            <div
                                className="border-bottom pl-3 pt-1"
                                style={{ height: "55px" }}
                            >
                                <div
                                    className="icon-wrapper"
                                    style={{
                                        padding: "5px",
                                        marginRight: "15px",
                                    }}
                                >
                                    <IconContext.Provider
                                        value={{
                                            className: "twitter-blue",
                                            size: "2em",
                                        }}
                                    >
                                        <IoIosArrowRoundBack
                                            onClick={() =>
                                                window.history.back()
                                            }
                                        />
                                    </IconContext.Provider>
                                </div>
                                <div
                                    style={{
                                        float: "left",
                                        height: "100%",
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
                                        <div className="icon-wrapper p-2 mr-1">
                                            <MdPlaylistAdd />
                                        </div>
                                        <div
                                            className="icon-wrapper pt-2 pl-1 mr-1"
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
                            <div
                                style={{ padding: "38px", textAlign: "center" }}
                            >
                                <p className="header1 mb-2">
                                    You haven’t created any Lists yet
                                </p>
                                <p className="sub mb-3">
                                    When you do, it’ll show up here.
                                </p>
                                <BlueButton
                                    title="Create a List"
                                    height="40px"
                                    width="130px"
                                    isActive={true}
                                    event={null}
                                    path="/lists"
                                />
                            </div>
                        </React.Fragment>
                    }
                />

                {this.props.sizes.showRightPane ? <Pane1 /> : null}
            </div>
        );
    }
}

export default Lists;
