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
                            <div className="header1 border-bottom pb-2 pl-3 pr-2 pt-2 mt-1">
                                {sizes.showNav ? null : (
                                    <img
                                        className="user p-2 ml-n2 mr-3"
                                        src={this.props.currentUser.userImg}
                                        alt="User"
                                    />
                                )}
                                Home
                                <div
                                    className="icon-wrapper"
                                    style={{ float: "right" }}
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
