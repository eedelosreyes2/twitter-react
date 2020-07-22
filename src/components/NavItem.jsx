import React, { Component } from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";

export class NavItem extends Component {
    render() {
        const { id, href, icon, title } = this.props.navItem;

        return (
            <Link
                to={href}
                onClick={() => this.props.onRefresh()}
                onMouseEnter={() => this.props.onActive(id)}
                onMouseLeave={() => this.props.onInactive(id)}
                className={this.getClasses(href)}
                id={id}
                data-toggle="pill"
            >
                <IconContext.Provider
                    value={{
                        size: "1.25em",
                        style: { margin: "5px 15px 7.5px 15px" },
                    }}
                >
                    {icon}
                </IconContext.Provider>
                {title}
            </Link>
        );
    }

    getClasses = (href) => {
        let className = "nav-item h5 nav-link font-weight-bold ";
        if (
            window.location.pathname.includes(href) ||
            this.props.navItem.isActive === true
        ) {
            className += "twitter-blue";
        } else {
            className += "text-body";
        }

        return className;
    };
}

export default NavItem;
