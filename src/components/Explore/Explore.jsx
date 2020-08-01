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
                path: "/for-you",
            },
            {
                id: 1,
                title: "COVID 19",
                path: "/covid-19",
            },
            {
                id: 2,
                title: "Trending",
                path: "/trending",
            },
            {
                id: 3,
                title: "News",
                path: "/news",
            },
            {
                id: 4,
                title: "Sports",
                path: "/sports",
            },
            {
                id: 5,
                title: "Fun",
                path: "/fun",
            },
            {
                id: 6,
                title: "Entertainment",
                path: "/entertainment",
            },
        ],
    };

    handleRefresh = () => {
        this.forceUpdate();
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
                                className="pl-1"
                                style={{
                                    display: "flex",
                                    width: "100%",
                                }}
                            >
                                {sizes.showNav ? null : (
                                    <img
                                        className="user-image p-2"
                                        src={this.props.currentUser.userImg}
                                        alt="User"
                                    />
                                )}
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
                                <div className="icon-wrapper m-1">
                                    <IconContext.Provider
                                        value={{
                                            className: "twitter-blue",
                                            size: "1.25em",
                                            style: {
                                                float: "right",
                                                margin: "11px",
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
                                onRefresh={this.handleRefresh}
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
