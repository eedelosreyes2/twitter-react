import React, { Component } from "react";
import TweetComponent from "./TweetComponent";
import Feed from "./Feed";
import Pane1 from "./Pane1";
import { IconContext } from "react-icons";
import { WiStars } from "react-icons/wi";

export class Home extends Component {
    render() {
        const { sizes } = this.props;

        return (
            <div>
                <div
                    className="center-col"
                    style={{
                        width: sizes.collapseCenter ? "80vw" : "600px",
                    }}
                >
                    <div className="header1 border-bottom pb-2 pl-3 pr-2 pt-2 mt-1">
                        Home
                        <div
                            className="aiOutlineTwitter-wrapper"
                            style={{
                                float: "right",
                                marginTop: "-7px",
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
                    <TweetComponent currentUser={this.props.currentUser} />
                    <Feed />
                </div>
                {sizes.showRightPane ? <Pane1 /> : null}
            </div>
        );
    }
}

export default Home;
