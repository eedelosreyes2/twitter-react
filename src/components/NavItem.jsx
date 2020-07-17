import React, { Component } from "react";

export class NavItem extends Component {
    render() {
        const { id, href, title } = this.props.navItem;

        return (
            <a
                onClick={() => this.props.onActive(id)}
                className={this.getClasses()}
                id={id}
                href={href}
                data-toggle="pill"
                role="tab"
            >
                {title}
            </a>
        );
    }

    getClasses = () => {
        console.log("what");
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
