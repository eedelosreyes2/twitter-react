import React, { Component } from "react";
import { IconContext } from "react-icons";
import { RiSearchLine } from "react-icons/ri";

export class SearchBar extends Component {
    render() {
        return (
            <div
                className="ml-4 mt-2"
                style={{
                    backgroundColor: "#e6ecf0",
                    borderRadius: "50px",
                    height: "40px",
                    width: "350px",
                }}
            >
                <div className="ml-3">
                    <IconContext.Provider
                        value={{ color: "#6b7b8a", size: "1.25em" }}
                    >
                        <RiSearchLine />
                    </IconContext.Provider>
                    <input
                        type="text"
                        className="form-control-md border-0 mt-1"
                        placeholder="Search Twitter"
                        style={{
                            backgroundColor: "#e6ecf0",
                            paddingLeft: "15px",
                            paddingTop: "2px",
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default SearchBar;
