import React, { Component } from "react";
import CenterCol from "../Reusable/CenterCol";
import TweetComponent from "./TweetComponent";
import Feed from "./Feed";
import Pane1 from "../Reusable/Pane1";
import { IconContext } from "react-icons";
import { WiStars } from "react-icons/wi";
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
                            <Feed />
                        </React.Fragment>
                    }
                />

                {sizes.showRightPane ? <Pane1 /> : null}
            </React.Fragment>
        );
    }
}

export default Home;
