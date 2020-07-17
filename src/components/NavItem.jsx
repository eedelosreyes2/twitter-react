import React, { Component } from "react";
import { IconContext } from "react-icons";

export class NavItem extends Component {
    render() {
        const { id, href, icon, title } = this.props.navItem;

        return (
            <a
                onClick={() => this.props.onActive(id)}
                className={this.getClasses()}
                id={id}
                href={href}
                data-toggle="pill"
                role="tab"
            >
                <IconContext.Provider
                    value={{
                        size: "1.25em",
                        style: { margin: "5px 15px" },
                    }}
                >
                    {icon}
                </IconContext.Provider>
                {title}
            </a>
        );
    }

    getClasses = () => {
        let className = "h5 nav-link font-weight-bold text-";
        if (this.props.navItem.isActive === "true") {
            className += "primary";
        } else {
            className += "body";
        }

        return className;
    };
}

export default NavItem;
