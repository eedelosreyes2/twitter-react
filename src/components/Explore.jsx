import React, { Component } from "react";
import { SearchBar } from "./SearchBar";
import { WhoToFollow } from "./WhoToFollow";
import { Breadcrumbs } from "./Breadcrumbs";
import { IconContext } from "react-icons";
import { FiSettings } from "react-icons/fi";

export class Explore extends Component {
    state = {
        tabs: [
            { id: 0, title: "For you", isCurrent: true },
            { id: 1, title: "COVID 19", isCurrent: false },
            { id: 2, title: "Trending", isCurrent: false },
            { id: 3, title: "News", isCurrent: false },
            { id: 4, title: "Sports", isCurrent: false },
            { id: 5, title: "Fun", isCurrent: false },
        ],
    };

    render() {
        return (
            <div>
                <div className="center-col">
                    <div
                        className="border-bottom"
                        style={{
                            height: "105px",
                        }}
                    >
                        <SearchBar type="2" />
                        <IconContext.Provider
                            value={{
                                className: "twitter-blue",
                                size: "1.25em",
                                style: {
                                    float: "right",
                                    margin: "16px 15px",
                                },
                            }}
                        >
                            <FiSettings />
                        </IconContext.Provider>
                        <div className="row pt-2">
                            {this.state.tabs.map((tab) => {
                                const { id, title, isCurrent } = tab;
                                let className = "tab header2 p-3 ";
                                className +=
                                    isCurrent === true
                                        ? "header2-primary tab-current"
                                        : null;
                                return (
                                    <div className={className} key={id}>
                                        {title}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="right-col">
                    <WhoToFollow />
                    <Breadcrumbs />
                </div>
            </div>
        );
    }
}

export default Explore;
