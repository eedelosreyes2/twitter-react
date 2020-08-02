import React, { Component } from "react";
import { Link } from "react-router-dom";
import CenterCol from "../Reusable/CenterCol";
import ProfileBar from "./ProfileBar";
import SearchBar from "../SearchBar/SearchBar";
import Follow from "../Reusable/Follow";
import WhatsHappening from "../Reusable/WhatsHappening";
import Breadcrumbs from "../Reusable/Breadcrumbs";
import { IconContext } from "react-icons";
import { IoIosArrowRoundBack } from "react-icons/io";
import { GoLocation } from "react-icons/go";
import { FiLink } from "react-icons/fi";
import { BsCalendar } from "react-icons/bs";

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
            following,
            followers,
            bio,
            location,
            link,
            dateJoined,
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
                                alt="header"
                                style={
                                    sizes.smallTablet
                                        ? sizes.showNav
                                            ? { height: "30vw", width: "90vw" }
                                            : {
                                                  height: "33.3vw",
                                                  width: "100vw",
                                              }
                                        : {
                                              height: "200px",
                                              width: "100%",
                                          }
                                }
                            />
                            <div>
                                <img
                                    src={userImg}
                                    alt="user"
                                    style={{
                                        border: "3px solid",
                                        borderColor: "white",
                                        borderRadius: "50%",
                                        height: sizes.smallTablet
                                            ? "22vw"
                                            : "140px",
                                        marginLeft: "15px",
                                        marginTop: sizes.smallTablet
                                            ? "-14vw"
                                            : "-80px",
                                        position: "absolute",
                                        width: sizes.smallTablet
                                            ? "22vw"
                                            : "140px",
                                    }}
                                />
                                <div
                                    style={{
                                        paddingTop: sizes.smallTablet
                                            ? "47.5px"
                                            : "60px",
                                    }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            paddingLeft: "20px",
                                        }}
                                    >
                                        <span className="header1">
                                            {username}
                                        </span>
                                        <span className="sub mt-n1">
                                            {handle}
                                        </span>
                                        <span style={{ paddingRight: "40px" }}>
                                            {bio}
                                        </span>
                                        <span className="sub pt-2 pb-2">
                                            <IconContext.Provider
                                                value={{
                                                    color: "#6b7b8a",
                                                }}
                                            >
                                                <GoLocation />
                                                <span className="pr-3">
                                                    {" " + location}
                                                </span>
                                                <FiLink />
                                                <button
                                                    onClick={() => {
                                                        window.open(
                                                            "https://" + link,
                                                            "_blank"
                                                        );
                                                        return false;
                                                    }}
                                                    className="link pr-3"
                                                    style={{
                                                        background: "none",
                                                        border: "none",
                                                        color:
                                                            "var(--twitter-blue)",
                                                    }}
                                                >
                                                    {" " + link}
                                                </button>
                                                <BsCalendar />
                                                {" Joined " + dateJoined}
                                            </IconContext.Provider>
                                        </span>
                                        <span>
                                            <span className="font-weight-bold">
                                                {following}{" "}
                                            </span>
                                            <span className="sub pr-3">
                                                Following
                                            </span>
                                            <span className="font-weight-bold">
                                                {followers}{" "}
                                            </span>
                                            <span className="sub">
                                                Followers
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div style={{ paddingTop: "10px" }}>
                                <ProfileBar
                                    sizes={sizes}
                                    tabs={this.state.tabs}
                                    onCurrent={this.handleCurrent}
                                />
                            </div>
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
                            paddingLeft: "30px",
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
