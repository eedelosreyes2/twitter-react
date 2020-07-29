import React, { Component } from "react";
import { IconContext } from "react-icons";
import { RiSearchLine } from "react-icons/ri";
import "./SearchBar.css";

export class SearchBar extends Component {
    render() {
        const { sizes } = this.props;

        return (
            <div
                className={this.getBarClasses()}
                style={{ width: this.getWidth(sizes) }}
            >
                <div className="ml-3">
                    <IconContext.Provider
                        value={{
                            color: "#6b7b8a",
                            size: "1.25em",
                            style: { marginBottom: "2px" },
                        }}
                    >
                        <RiSearchLine />
                    </IconContext.Provider>
                    <input
                        type="text"
                        className={this.getInputClasses()}
                        placeholder={this.getPlaceholder()}
                    />
                </div>
            </div>
        );
    }

    getBarClasses = () => {
        let className = "search-bar search-bar";
        className += this.props.type;
        return className;
    };

    getInputClasses = () => {
        let className = "form-control-md search-input search-input";
        className += this.props.type;
        return className;
    };

    getWidth = (sizes) => {
        const type = this.props.type;
        let width;
        if (type === "1") {
            width = "350px";
        } else if (type === "2") {
            width = sizes.collapseCenter ? "65vw" : "510px";
        } else {
            width = "unset";
        }
        return width;
    };

    getPlaceholder = () => {
        const type = this.props.type;
        if (type === "1" || type === "2") {
            return "Search Twitter";
        } else {
            return "Search for people and groups";
        }
    };
}

export default SearchBar;
