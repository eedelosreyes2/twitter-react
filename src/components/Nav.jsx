import React, { Component } from "react";
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
import { useHistory } from "react-router-dom";

export class Nav extends Component {
    state = {
        navItems: [
            {
                id: "navItem-home",
                title: "Home",
                href: "/home",
                isCurrent: "true",
                isActive: "false",
                icon: <AiOutlineHome />,
            },
            {
                id: "navItem-explore",
                title: "Explore",
                href: "/explore",
                isCurrent: "false",
                isActive: "false",
                icon: <FaHashtag />,
            },
            {
                id: "navItem-notifications",
                title: "Notifications",
                href: "/notifications",
                isCurrent: "false",
                isActive: "false",
                icon: <RiNotification4Line />,
            },
            {
                id: "navItem-messages",
                title: "Messages",
                href: "/messages",
                isCurrent: "false",
                isActive: "false",
                icon: <FiMail />,
            },
            {
                id: "navItem-bookmarks",
                title: "Bookmarks",
                href: "/bookmarks",
                isCurrent: "false",
                isActive: "false",
                icon: <BsBookmark />,
            },
            {
                id: "navItem-lists",
                title: "Lists",
                href: "/lists",
                isCurrent: "false",
                isActive: "false",
                icon: <RiFileList2Line />,
            },
            {
                id: "navItem-profile",
                title: "Profile",
                href: "/profile",
                isCurrent: "false",
                isActive: "false",
                icon: <RiUserLine />,
            },
            {
                id: "navItem-more",
                title: "More",
                href: "#more",
                isActive: "false",
                icon: <FiMoreHorizontal />,
            },
        ],
    };

    handleCurrent = (id, href) => {
        const navItems = [
            ...this.state.navItems.map((navItem) => {
                if (navItem.id === id) {
                    navItem.isCurrent = "true";
                } else {
                    navItem.isCurrent = "false";
                }
                return navItem;
            }),
        ];

        this.setState({ navItems });
    };

    handleActive = (id) => {
        const navItems = [
            ...this.state.navItems.map((navItem) => {
                if (navItem.id === id) {
                    navItem.isActive = "true";
                } else {
                    navItem.isActive = "false";
                }
                return navItem;
            }),
        ];

        this.setState({ navItems });
    };

    handleInactive = (id) => {
        const navItems = [
            ...this.state.navItems.map((navItem) => {
                if (navItem.id === id && navItem.isCurrent === "false") {
                    navItem.isActive = "false";
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
                <div className="nav flex-column nav-pills">
                    <IconContext.Provider
                        value={{
                            color: "DodgerBlue",
                            size: "2.25em",
                            style: { margin: "10px 25px" },
                        }}
                    >
                        <AiOutlineTwitter />
                    </IconContext.Provider>
                    {this.state.navItems.map((navItem) => (
                        <NavItem
                            onCurrent={this.handleCurrent}
                            onActive={this.handleActive}
                            onInactive={this.handleInactive}
                            key={navItem.id}
                            navItem={navItem}
                        />
                    ))}
                </div>
                <button
                    type="button"
                    className="btn btn-block btn-primary rounded-pill m-2 ml-4"
                    style={{ height: "50px", width: "225px" }}
                >
                    Tweet
                </button>
            </div>
        );
    }
}

export default Nav;
