import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBottomItem from "./NavBottomItem";
import { IconContext } from "react-icons";
import { AiOutlineHome } from "react-icons/ai";
import { RiSearchLine, RiNotification4Line } from "react-icons/ri";
import { FiMail } from "react-icons/fi";

export class NavBottom extends Component {
    state = {
        navItems: [
            {
                id: "navItem-home",
                path: "/home",
                icon: <AiOutlineHome />,
            },
            {
                id: "navItem-explore",
                path: "/explore",
                icon: <RiSearchLine />,
            },
            {
                id: "navItem-notifications",
                path: "/notifications",
                icon: <RiNotification4Line />,
            },
            {
                id: "navItem-messages",
                path: "/messages",
                icon: <FiMail />,
            },
        ],
    };

    handleRefresh = () => {
        this.forceUpdate();
    };

    render() {
        return (
            <div
                className="border-top"
                style={{
                    alignItems: "center",
                    backgroundColor: "white",
                    bottom: 0,
                    display: "flex",
                    justifyContent: "space-around",
                    height: "65px",
                    position: "fixed",
                    width: "100%",
                }}
            >
                {this.state.navItems.map((navItem) => {
                    return (
                        <NavBottomItem
                            navItem={navItem}
                            key={navItem.id}
                            onRefresh={this.handleRefresh}
                        />
                    );
                })}
            </div>
        );
    }
}

export default NavBottom;
