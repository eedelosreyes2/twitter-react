import React, { Component } from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { MdClose } from "react-icons/md";
import { BsBookmark } from "react-icons/bs";
import { RiFileList2Line, RiUserLine } from "react-icons/ri";
import { FiHelpCircle } from "react-icons/fi";

export class NavSide extends Component {
    state = {
        navItems: [
            {
                id: "navItem-profile",
                title: "Profile",
                path: "/profile",
                icon: <RiUserLine />,
            },
            {
                id: "navItem-lists",
                title: "Lists",
                path: "/lists",
                icon: <RiFileList2Line />,
            },
            {
                id: "navItem-bookmarks",
                title: "Bookmarks",
                path: "/bookmarks",
                icon: <BsBookmark />,
            },
            {
                id: "navItem-help",
                title: "Help",
                path: "/",
                icon: <FiHelpCircle />,
            },
        ],
    };

    render() {
        const {
            userImg,
            username,
            handle,
            followers,
            following,
        } = this.props.currentUser;

        return (
            <div
                id="navSide"
                style={{
                    display: "none",
                    height: "100vh",
                    left: 0,
                    position: "fixed",
                    top: 0,
                    width: "100%",
                    zIndex: 100,
                }}
            >
                <div
                    style={{
                        backgroundColor: "white",
                        float: "left",
                        height: "100%",
                        width: "75vw",
                    }}
                >
                    <div
                        className="header1 border-bottom p-3"
                        style={{
                            alignItems: "center",
                            display: "flex",
                            height: "50px",
                            justifyContent: "space-between",
                        }}
                    >
                        Account info
                        <div className="icon-wrapper p-1">
                            <IconContext.Provider
                                value={{
                                    className: "twitter-blue",
                                    size: "1.5em",
                                }}
                            >
                                <MdClose
                                    onClick={() => this.props.onProfileClick()}
                                />
                            </IconContext.Provider>
                        </div>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            paddingLeft: "10px",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <Link
                                to="/profile"
                                onClick={() => this.props.onProfileClick()}
                            >
                                <img
                                    className="user-image p-2"
                                    src={userImg}
                                    alt="user"
                                />
                                <div className="font-weight-bold text-dark pl-2">
                                    {username}
                                </div>
                                <div className="sub pl-2">{handle}</div>
                            </Link>
                            <span className="p-2">
                                <span className="font-weight-bold">
                                    {following}{" "}
                                </span>
                                <span className="sub pr-3">Following</span>
                                <span className="font-weight-bold">
                                    {followers}{" "}
                                </span>
                                <span className="sub">Followers</span>
                            </span>
                        </div>
                        {this.state.navItems.map((navItem) => {
                            const { icon, title, path } = navItem;

                            return (
                                <Link
                                    to={path}
                                    onClick={
                                        title === "Help"
                                            ? () => {
                                                  window.open(
                                                      "https://github.com/eedelosreyes2/twitter-react",
                                                      "_blank"
                                                  );
                                                  return false;
                                              }
                                            : () => this.props.onProfileClick()
                                    }
                                    className="p-2"
                                    style={{
                                        color: "black",
                                        width: "100%",
                                    }}
                                >
                                    <IconContext.Provider
                                        value={{ color: "#6b7b8a" }}
                                    >
                                        {icon}
                                    </IconContext.Provider>
                                    <span className="pl-2">{title}</span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
                <div
                    onClick={() => this.props.onProfileClick()}
                    style={{
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        filter: "blur(50%)",
                        float: "right",
                        height: "100%",
                        width: "25vw",
                    }}
                ></div>
            </div>
        );
    }
}

export default NavSide;
