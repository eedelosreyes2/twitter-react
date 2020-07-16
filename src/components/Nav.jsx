import React, { Component } from "react";
import NavItem from "./NavItem";

export class Nav extends Component {
    state = {
        navItems: [
            {
                id: "navItem-home",
                title: "Home",
                href: "#home",
                isActive: "true",
            },
            {
                id: "navItem-explore",
                title: "Explore",
                href: "#explore",
                isActive: "false",
            },
            {
                id: "navItem-notifications",
                title: "Notifications",
                href: "#notifications",
                isActive: "false",
            },
            {
                id: "navItem-messages",
                title: "Messages",
                href: "#messages",
                isActive: "false",
            },
            {
                id: "navItem-bookmarks",
                title: "Bookmarks",
                href: "#bookmarks",
                isActive: "false",
            },
            {
                id: "navItem-lists",
                title: "Lists",
                href: "#lists",
                isActive: "false",
            },
            {
                id: "navItem-profile",
                title: "Profile",
                href: "#profile",
                isActive: "false",
            },
            {
                id: "navItem-more",
                title: "More",
                href: "#more",
                isActive: "false",
            },
        ],
    };

    handleActive = (id) => {
        console.log(id);
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
            <div className="col-2 m-2">
                <span> </span>
                <div className="nav flex-column nav-pills">
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
                    className="btn btn-block btn-primary rounded-pill m-2"
                >
                    Tweet
                </button>
            </div>
        );
    }
}

export default Nav;
