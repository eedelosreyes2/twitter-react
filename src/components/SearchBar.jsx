import React, { Component } from "react";
import { IconContext } from "react-icons";
import { RiSearchLine } from "react-icons/ri";

export class SearchBar extends Component {
    render() {
        return (
            <div className={this.getBarClasses()}>
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
                        placeholder="Search Twitter"
                        style={{}}
                    />
                </div>
            </div>
        );
    }

    getBarClasses = () => {
        let className = "search-bar";
        className += this.props.type;
        return className;
    };

    getInputClasses = () => {
        let className = "form-control-md border-0 search-input";
        className += this.props.type;
        return className;
    };
}

export default SearchBar;
