import React, { Component } from "react";
import CenterCol from "../Reusable/CenterCol";
import SearchBar from "../SearchBar/SearchBar";
import ExploreBar from "./ExploreBar";
import Follow from "../Reusable/Follow";
import Breadcrumbs from "../Reusable/Breadcrumbs";
import { IconContext } from "react-icons";
import { FiSettings } from "react-icons/fi";
import "./Explore.css";

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
            {
                id: 6,
                title: "Entertainment",
                href: "/entertainment",
                isCurrent: false,
            },
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
                <CenterCol
                    sizes={sizes}
                    component={
                        <div
                            style={{
                                borderBottom: "11px solid",
                                borderColor: "#e6ecf0",
                                position: "relative",
                                height: "115px",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    width: "100%",
                                }}
                            >
                                <SearchBar
                                    placeholder="Search Twitter"
                                    style={{
                                        height: "35px",
                                        width: sizes.smallTablet
                                            ? window.innerWidth -
                                              (sizes.showNav ? 170 : 100)
                                            : "500px",
                                    }}
                                />
                                <div
                                    className="icon-wrapper"
                                    style={{
                                        float: "right",
                                        marginTop: "8px",
                                        marginRight: "10px",
                                    }}
                                >
                                    <IconContext.Provider
                                        value={{
                                            className: "twitter-blue",
                                            size: "1.25em",
                                            style: {
                                                margin: "10px",
                                            },
                                        }}
                                    >
                                        <FiSettings />
                                    </IconContext.Provider>
                                </div>
                            </div>
                            <ExploreBar
                                sizes={sizes}
                                tabs={this.state.tabs}
                                onCurrent={this.handleCurrent}
                            />
                        </div>
                    }
                />
                {sizes.showRightPane ? (
                    <div
                        style={{
                            alignItems: "center",
                            display: "flex",
                            flexDirection: "column",
                            float: "right",
                            paddingLeft: "30px",
                            width: "380px",
                        }}
                    >
                        <Follow title="Who to follow" />
                        <Breadcrumbs />
                    </div>
                ) : null}
            </React.Fragment>
        );
    }
}

export default Explore;
