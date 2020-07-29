import React, { Component } from "react";
import CenterCol from "../Reusable/CenterCol";
import ProfileBar from "./ProfileBar";
import SearchBar from "../SearchBar/SearchBar";
import Follow from "../Reusable/Follow";
import WhatsHappening from "../Reusable/WhatsHappening";
import Breadcrumbs from "../Reusable/Breadcrumbs";
import { IconContext } from "react-icons";
import { IoIosArrowRoundBack } from "react-icons/io";

export class Profile extends Component {
    state = {
        tabs: [
            {
                id: 0,
                title: "Tweets",
                href: "/profile",
                isCurrent: true,
            },
            {
                id: 1,
                title: "Tweets & replies",
                href: "/profile/with_replies",
                isCurrent: false,
            },
            {
                id: 2,
                title: "Media",
                href: "/profile/media",
                isCurrent: false,
            },
            {
                id: 3,
                title: "Likes",
                href: "/profile/likes",
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
        const {
            handle,
            username,
            userImg,
            headerImg,
            numTweets,
        } = this.props.currentUser;

        const { sizes } = this.props;

        return (
            <div>
                <CenterCol
                    sizes={sizes}
                    component={
                        <React.Fragment>
                            <div
                                className="border-bottom pl-3 pt-1"
                                style={{ height: "55px" }}
                            >
                                <div className="ioIosArrowRoundBack-wrapper">
                                    <IconContext.Provider
                                        value={{
                                            className: "twitter-blue",
                                            size: "2em",
                                        }}
                                    >
                                        <IoIosArrowRoundBack />
                                    </IconContext.Provider>
                                </div>
                                <div
                                    style={{
                                        float: "left",
                                        height: "100%",
                                        paddingLeft: "28px",
                                    }}
                                >
                                    <p className="header1 pb-1">{username}</p>
                                    <p className="sub mt-n4">
                                        {numTweets} Tweets
                                    </p>
                                </div>
                            </div>
                            <img
                                src={headerImg}
                                style={{
                                    height: "200px",
                                    width: "100%",
                                }}
                            />
                            <div style={{ height: "180px" }}></div>
                            <ProfileBar
                                tabs={this.state.tabs}
                                onCurrent={this.handleCurrent}
                            />
                        </React.Fragment>
                    }
                />
                {sizes.showRightPane ? (
                    <div
                        style={{
                            alignItems: "center",
                            display: "flex",
                            flexDirection: "column",
                            float: "right",
                            width: "380px",
                        }}
                    >
                        <SearchBar
                            placeholder={"Search Twitter"}
                            style={{ height: "38px", width: "350px" }}
                        />
                        <Follow title="You might like" />
                        <WhatsHappening />
                        <Breadcrumbs />
                    </div>
                ) : null}
            </div>
        );
    }
}

export default Profile;