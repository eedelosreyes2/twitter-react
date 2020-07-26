import React, { Component } from "react";
import { SearchBar } from "./SearchBar";
import { ExploreBar } from "./ExploreBar";
import { WhoToFollow } from "./WhoToFollow";
import { Breadcrumbs } from "./Breadcrumbs";
import { IconContext } from "react-icons";
import { FiSettings } from "react-icons/fi";

export class Explore extends Component {
    state = {
        tabs: [
            {
                id: 0,
                title: "For you",
                href: "/for-you",
                isCurrent: true,
            },
            {
                id: 1,
                title: "COVID 19",
                href: "/covid-19",
                isCurrent: false,
            },
            {
                id: 2,
                title: "Trending",
                href: "/trending",
                isCurrent: false,
            },
            {
                id: 3,
                title: "News",
                href: "/news",
                isCurrent: false,
            },
            {
                id: 4,
                title: "Sports",
                href: "/sports",
                isCurrent: false,
            },
            {
                id: 5,
                title: "Fun",
                href: "/fun",
                isCurrent: false,
            },
            //    {
            //        id: 6,
            //        title: "Entertainment",
            //        href: "/entertainment",
            //        isCurrent: false,
            //    },
        ],
    };

    handleCurrent = (id) => {
        const tabs = [
            ...this.state.tabs.map((tab) => {
                if (tab.id === id) {
                    tab.isCurrent = true;
                } else {
                    tab.isCurrent = false;
                }
                return tab;
            }),
        ];

        this.setState({ tabs });
    };

    render() {
        return (
            <React.Fragment>
                <div className="center-col">
                    <div className="explore-header mt-1">
                        <SearchBar type="2" />
                        <div
                            className="fiSettings-wrapper"
                            style={{
                                float: "right",
                            }}
                        >
                            <IconContext.Provider
                                value={{
                                    className: "twitter-blue",
                                    size: "1.25em",
                                    style: {
                                        float: "right",
                                        margin: "11px 11px",
                                    },
                                }}
                            >
                                <FiSettings />
                            </IconContext.Provider>
                        </div>
                        <ExploreBar
                            tabs={this.state.tabs}
                            onCurrent={this.handleCurrent}
                        />
                    </div>
                </div>
                <div className="right-col">
                    <WhoToFollow />
                    <Breadcrumbs />
                </div>
            </React.Fragment>
        );
    }
}

export default Explore;
