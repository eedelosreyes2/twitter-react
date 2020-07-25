import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";
import { IconContext } from "react-icons";
import { AiOutlineTwitter, AiOutlineHome } from "react-icons/ai";
import { FaHashtag } from "react-icons/fa";
import { FiMail, FiMoreHorizontal } from "react-icons/fi";
import { BsBookmark } from "react-icons/bs";
import {
    RiNotification4Line,
    RiFileList2Line,
    RiUserLine,
} from "react-icons/ri";

export class Nav extends Component {
    state = {
        navItems: [
            {
                id: "navItem-home",
                title: "Home",
                href: "/home",
                isActive: false,
                icon: <AiOutlineHome />,
            },
            {
                id: "navItem-explore",
                title: "Explore",
                href: "/explore",
                isActive: false,
                icon: <FaHashtag />,
            },
            {
                id: "navItem-notifications",
                title: "Notifications",
                href: "/notifications",
                isActive: false,
                icon: <RiNotification4Line />,
            },
            {
                id: "navItem-messages",
                title: "Messages",
                href: "/messages",
                isActive: false,
                icon: <FiMail />,
            },
            {
                id: "navItem-bookmarks",
                title: "Bookmarks",
                href: "/bookmarks",
                isActive: false,
                icon: <BsBookmark />,
            },
            {
                id: "navItem-lists",
                title: "Lists",
                href: "/lists",
                isActive: false,
                icon: <RiFileList2Line />,
            },
            {
                id: "navItem-profile",
                title: "Profile",
                href: "/profile",
                isActive: false,
                icon: <RiUserLine />,
            },
            {
                id: "navItem-more",
                title: "More",
                href: "#more",
                isActive: false,
                icon: <FiMoreHorizontal />,
            },
        ],
    };

    handleRefresh = () => {
        this.forceUpdate();
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
            ...this.state.navItems.map((navItem, href) => {
                if (navItem.id === id && navItem.href !== href) {
                    navItem.isActive = false;
                }
                return navItem;
            }),
        ];

        this.setState({ navItems });
    };

    render() {
        return (
            <div
                className="col border-right"
                style={{
                    height: "100vh",
                    maxWidth: "23.25%",
                    position: "sticky",
                    top: 0,
                }}
            >
                <div className="col flex-column nav-pills pl-3">
                    <div className="aiOutlineTwitter-wrapper">
                        <IconContext.Provider
                            value={{
                                className: "twitter-blue",
                                size: "2.2em",
                            }}
                        >
                            <Link to="/home" style={{ cursor: "pointer" }}>
                                <AiOutlineTwitter />
                            </Link>
                        </IconContext.Provider>
                    </div>
                    {this.state.navItems.map((navItem) => (
                        <NavItem
                            onRefresh={this.handleRefresh}
                            onActive={this.handleActive}
                            onInactive={this.handleInactive}
                            key={navItem.id}
                            navItem={navItem}
                        />
                    ))}
                    <button
                        type="button"
                        className="btn btn-block btn-primary rounded-pill mt-2"
                        style={{ height: "50px", width: "225px" }}
                    >
                        Tweet
                    </button>
                </div>
            </div>
        );
    }
}

export default Nav;
