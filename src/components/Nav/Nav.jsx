import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";
import BlueButton from "../Reusable/BlueButton";
import { IconContext } from "react-icons";
import { AiOutlineTwitter, AiOutlineHome } from "react-icons/ai";
import { FaHashtag, FaFeatherAlt } from "react-icons/fa";
import { FiMail, FiMoreHorizontal } from "react-icons/fi";
import { BsBookmark } from "react-icons/bs";
import {
    RiNotification4Line,
    RiFileList2Line,
    RiUserLine,
} from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";

export class Nav extends Component {
    state = {
        navItems: [
            {
                id: "navItem-home",
                title: "Home",
                path: "/home",
                isActive: false,
                icon: <AiOutlineHome />,
            },
            {
                id: "navItem-explore",
                title: "Explore",
                path: "/explore",
                isActive: false,
                icon: <FaHashtag />,
            },
            {
                id: "navItem-notifications",
                title: "Notifications",
                path: "/notifications",
                isActive: false,
                icon: <RiNotification4Line />,
            },
            {
                id: "navItem-messages",
                title: "Messages",
                path: "/messages",
                isActive: false,
                icon: <FiMail />,
            },
            {
                id: "navItem-bookmarks",
                title: "Bookmarks",
                path: "/bookmarks",
                isActive: false,
                icon: <BsBookmark />,
            },
            {
                id: "navItem-lists",
                title: "Lists",
                path: "/lists",
                isActive: false,
                icon: <RiFileList2Line />,
            },
            {
                id: "navItem-profile",
                title: "Profile",
                path: "/profile",
                isActive: false,
                icon: <RiUserLine />,
            },
            {
                id: "navItem-more",
                title: "More",
                path: "#more",
                isActive: false,
                icon: <FiMoreHorizontal />,
            },
        ],
    };

    handleActive = (id) => {
        const navItems = [
            ...this.state.navItems.map((navItem) => {
                if (navItem.id === id) {
                    navItem.isActive = true;
                } else {
                    navItem.isActive = false;
                }
                return navItem;
            }),
        ];

        this.setState({ navItems });
    };

    handleInactive = (id) => {
        const navItems = [
            ...this.state.navItems.map((navItem, path) => {
                if (navItem.id === id && navItem.path !== path) {
                    navItem.isActive = false;
                }
                return navItem;
            }),
        ];

        this.setState({ navItems });
    };

    handleRefresh = () => {
        this.forceUpdate();
    };

    render() {
        const { sizes } = this.props;
        const { handle, username, userImg } = this.props.currentUser;

        return (
            <div
                className="col border-right"
                style={{
                    display: "inline-block",
                    height: "100vh",
                    overflow: "scroll",
                    overflowX: "hidden",
                    padding: sizes.navCollapsed
                        ? "0 10px 0 10px"
                        : "0 0 0 17px",
                    position: "fixed",
                    top: 0,
                    width: sizes.navWidth,
                }}
            >
                <div>
                    <div className="nav-icon-wrapper">
                        <IconContext.Provider
                            value={{
                                className: "twitter-blue",
                                size: "2.2em",
                            }}
                        >
                            <Link to="/home">
                                <AiOutlineTwitter />
                            </Link>
                        </IconContext.Provider>
                    </div>
                    {this.state.navItems.map((navItem) => (
                        <NavItem
                            sizes={sizes}
                            onActive={this.handleActive}
                            onInactive={this.handleInactive}
                            onRefresh={this.handleRefresh}
                            key={navItem.id}
                            navItem={navItem}
                        />
                    ))}
                    <div style={{ paddingBottom: "100px" }}>
                        {sizes.navCollapsed ? (
                            <BlueButton
                                title={
                                    <IconContext.Provider
                                        value={{
                                            color: "white",
                                            size: "1.25em",
                                            style: { marginBottom: "3px" },
                                        }}
                                    >
                                        <FaFeatherAlt />
                                    </IconContext.Provider>
                                }
                                height="50px"
                                width="50px"
                                isActive={true}
                                event={null}
                            />
                        ) : (
                            <BlueButton
                                title="Tweet"
                                height="50px"
                                width="225px"
                                isActive={true}
                                event={null}
                            />
                        )}
                    </div>

                    <div
                        className="current-user"
                        style={{
                            backgroundColor: "white",
                            bottom: 0,
                            height: "60px",
                            margin: "0px 0px 0px 0px",
                            padding: "2px 10px 0 0",
                            position: "fixed",
                            width: sizes.navCollapsed ? "58px" : "auto",
                        }}
                    >
                        <img
                            className="user-image m-2"
                            style={{
                                float: "left",
                                height: "40px",
                                width: "40px",
                            }}
                            src={userImg}
                            alt="User"
                        />
                        <div className="mt-2" style={{ float: "left" }}>
                            <p className="font-weight-bold mb-n1">{username}</p>
                            <p className="sub">{handle}</p>
                        </div>
                        <IconContext.Provider
                            value={{
                                size: "1.5em",
                                style: {
                                    float: "right",
                                    marginLeft: "45px",
                                    marginTop: "15px",
                                },
                            }}
                        >
                            <IoIosArrowDown />
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        );
    }
}

export default Nav;
