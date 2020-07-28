import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ExploreBar from "./ExploreBar";
import Follow from "./Follow";
import Breadcrumbs from "./Breadcrumbs";
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
        const { sizes } = this.props;

        return (
            <React.Fragment>
                <div
                    className="center-col"
                    style={{ width: sizes.collapseCenter ? "80vw" : "600px" }}
                >
                    <div className="explore-header mt-1">
                        <SearchBar sizes={sizes} type="2" />
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
                            sizes={sizes}
                            tabs={this.state.tabs}
                            onCurrent={this.handleCurrent}
                        />
                    </div>
                </div>
                {sizes.showRightPane ? (
                    <div className="right-col">
                        <Follow title="Who to follow" />
                        <Breadcrumbs />
                    </div>
                ) : null}
            </React.Fragment>
        );
    }
}

export default Explore;
