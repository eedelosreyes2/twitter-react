import React, { Component } from "react";
import TweetComponent from "./TweetComponent";
import Feed from "./Feed";
import Pane1 from "./Pane1";
import { IconContext } from "react-icons";
import { WiStars } from "react-icons/wi";

export class Home extends Component {
    render() {
        return (
            <div>
                <div className="center-col">
                    <div className="header1 border-bottom pb-2 pl-3 pr-2 pt-2 mt-1">
                        Home
                        <IconContext.Provider
                            value={{
                                className: "twitter-blue",
                                size: "2em",
                                style: { float: "right" },
                            }}
                        >
                            <WiStars />
                        </IconContext.Provider>
                    </div>
                    <TweetComponent />
                    <Feed />
                </div>
                <div className="right-col">
                    <Pane1 />
                </div>
            </div>
        );
    }
}

export default Home;
