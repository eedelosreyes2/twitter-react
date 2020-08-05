import React, { Component } from "react";
import CenterCol from "../Reusable/CenterCol";
import TweetComponent from "./TweetComponent";
import Feed from "./Feed";
import BlueButton from "../Reusable/BlueButton";
import Pane1 from "../Reusable/Pane1";
import { IconContext } from "react-icons";
import { WiStars } from "react-icons/wi";
import { FaFeatherAlt } from "react-icons/fa";
import "./Home.css";

export class Home extends Component {
    render() {
        const { sizes } = this.props;

        return (
            <React.Fragment>
                <CenterCol
                    sizes={sizes}
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
                                    <span className="pl-3">Home</span>
                                </div>

                                <div
                                    className="icon-wrapper"
                                    style={{
                                        float: "right",
                                    }}
                                >
                                    <IconContext.Provider
                                        value={{
                                            className: "twitter-blue",
                                            size: "2em",
                                        }}
                                    >
                                        <WiStars />
                                    </IconContext.Provider>
                                </div>
                            </div>
                            {sizes.showNav ? (
                                <TweetComponent
                                    currentUser={this.props.currentUser}
                                />
                            ) : null}
                            <Feed currentUser={this.props.currentUser} />
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
                        />
                    </div>
                )}

                {sizes.showRightPane ? <Pane1 /> : null}
            </React.Fragment>
        );
    }
}

export default Home;
