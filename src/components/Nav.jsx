import React, { Component } from "react";
import NavItem from "./NavItem";
import { IconContext } from "react-icons";
import { AiOutlineTwitter, AiOutlineHome } from "react-icons/ai";
import { FaHashtag } from "react-icons/fa";
import { GrNotification } from "react-icons/gr";
import { FiMail, FiMoreHorizontal } from "react-icons/fi";
import { BsBookmark } from "react-icons/bs";
import { RiFileList2Line, RiUserLine } from "react-icons/ri";

export class Nav extends Component {
    state = {
        navItems: [
            {
                id: "navItem-home",
                title: "Home",
                href: "/home",
                isActive: "true",
                icon: <AiOutlineHome />,
            },
            {
                id: "navItem-explore",
                title: "Explore",
                href: "/explore",
                isActive: "false",
                icon: <FaHashtag />,
            },
            {
                id: "navItem-notifications",
                title: "Notifications",
                href: "/notifications",
                isActive: "false",
                icon: <GrNotification />,
            },
            {
                id: "navItem-messages",
                title: "Messages",
                href: "/messages",
                isActive: "false",
                icon: <FiMail />,
            },
            {
                id: "navItem-bookmarks",
                title: "Bookmarks",
                href: "/bookmarks",
                isActive: "false",
                icon: <BsBookmark />,
            },
            {
                id: "navItem-lists",
                title: "Lists",
                href: "/lists",
                isActive: "false",
                icon: <RiFileList2Line />,
            },
            {
                id: "navItem-profile",
                title: "Profile",
                href: "/profile",
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
                            onActive={this.handleActive}
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
