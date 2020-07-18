import React, { Component } from "react";
import { IconContext } from "react-icons";
import { GoVerified } from "react-icons/go";

export class WhoToFollow extends Component {
    state = {
        users: [
            {
                handle: "23_is_leland",
                username: "Leland Manigo",
                image:
                    "https://pbs.twimg.com/profile_images/857089270414233601/H5OtJMkD_400x400.jpg",
                isVerified: false,
            },
            {
                handle: "LeanandCuisine",
                username: "Casey Lawrence",
                image:
                    "https://pbs.twimg.com/profile_images/857089270414233601/H5OtJMkD_400x400.jpg",
                isVerified: false,
            },
            {
                handle: "thichnhathanh",
                username: "Thich Nhat Hanh",
                image:
                    "https://pbs.twimg.com/profile_images/857089270414233601/H5OtJMkD_400x400.jpg",
                isVerified: true,
            },
        ],
    };

    render() {
        return (
            <div>
                <div
                    className="ml-4 mt-3"
                    style={{
                        backgroundColor: "#f5f8fa",
                        borderRadius: "15px",
                        maxHeight: "300px",
                        width: "350px",
                    }}
                >
                    <div className="h5 font-weight-bold pl-3 pt-2">
                        Who to follow
                    </div>
                    <hr className="hr-sm" />
                    {this.state.users.map((user) => {
                        const { handle, username, image, isVerified } = user;
                        return (
                            <div>
                                <div className="hoverable pl-3 pb-2 pt-2">
                                    <img
                                        className="user mr-3"
                                        src={image}
                                        alt="User"
                                        style={{
                                            display: "inline-block",
                                            float: "left",
                                        }}
                                    ></img>
                                    <div
                                        style={{
                                            display: "inline-block",
                                        }}
                                    >
                                        <span className="story-title">
                                            {username}
                                            {isVerified ? (
                                                <IconContext.Provider
                                                    value={{
                                                        color: "DodgerBlue",
                                                        style: {
                                                            margin:
                                                                "auto auto 3px 2px",
                                                        },
                                                    }}
                                                >
                                                    <GoVerified />
                                                </IconContext.Provider>
                                            ) : null}
                                        </span>
                                        <br />
                                        <span className="sub">@{handle}</span>
                                    </div>
                                </div>
                                <hr className="hr-sm" />
                            </div>
                        );
                    })}
                    <div className="show-more text-primary p-3">Show more</div>
                </div>
            </div>
        );
    }
}

export default WhoToFollow;
