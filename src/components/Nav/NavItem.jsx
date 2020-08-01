import React, { Component } from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import "./Nav.css";

export class NavItem extends Component {
    render() {
        const { sizes } = this.props;
        const { id, path, icon, title } = this.props.navItem;

        return (
            <div className="row">
                <Link
                    to={path}
                    onMouseEnter={() => this.props.onActive(id)}
                    onMouseLeave={() => this.props.onInactive(id)}
                    onClick={() => this.props.onRefresh()}
                    className={this.getClasses(path)}
                    id={id}
                    data-toggle="pill"
                    style={
                        sizes.navCollapsed
                            ? { marginLeft: "17.5px", width: "48px" }
                            : null
                    }
                >
                    <IconContext.Provider
                        value={{
                            size: "1.25em",
                            style: {
                                margin: sizes.navCollapsed
                                    ? "5px 15px 7.5px 10px"
                                    : "5px 15px 7.5px 15px",
                            },
                        }}
                    >
                        {icon}
                    </IconContext.Provider>
                    {sizes.navCollapsed ? null : title}
                </Link>
            </div>
        );
    }

    getClasses = (path) => {
        const { isActive } = this.props.navItem;
        const href = window.location.href;

        let className = "nav-item h5 nav-link font-weight-bold ";
        if (href.includes(path) || isActive === true) {
            className += "twitter-blue";
        } else {
            className += "text-body";
        }

        return className;
    };
}

export default NavItem;
