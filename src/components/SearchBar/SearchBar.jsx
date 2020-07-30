import React, { Component } from "react";
import { IconContext } from "react-icons";
import { RiSearchLine } from "react-icons/ri";
import "./SearchBar.css";

export class SearchBar extends Component {
    state = {
        backgroundColor: "#e6ecf0",
        border: "unset",
        borderColor: "#e6ecf0",
        iconColor: "#6b7b8a",
    };

    handleFocus = () => {
        this.setState({
            backgroundColor: "white",
            border: "1px solid",
            borderColor: "var(--twitter-blue)",
            iconColor: "var(--twitter-blue)",
        });
    };

    handleFocusOut = () => {
        this.setState({
            backgroundColor: "#e6ecf0",
            border: "unset",
            borderColor: "unset",
            iconColor: "#6b7b8a",
            showClose: false,
        });
    };

    render() {
        const { placeholder } = this.props;
        const { height, width } = this.props.style;
        const { backgroundColor, border, borderColor, iconColor } = this.state;

        return (
            <div
                style={{
                    alignItems: "center",
                    backgroundColor: backgroundColor,
                    border: border,
                    borderColor: borderColor,
                    borderRadius: "50px",
                    display: "flex",
                    height: height,
                    margin: "10px auto",
                    width: width,
                    verticalAlign: "middle",
                }}
            >
                <div
                    style={{
                        paddingLeft: "20px",
                        width: "100%",
                    }}
                >
                    <IconContext.Provider
                        value={{
                            color: iconColor,
                            display: "inline-block",
                            size: "1.25em",
                            style: { marginBottom: "2px" },
                        }}
                    >
                        <RiSearchLine />
                    </IconContext.Provider>
                    <input
                        id="input"
                        type="text"
                        placeholder={placeholder}
                        onFocus={this.handleFocus}
                        onBlur={this.handleFocusOut}
                        style={{
                            border: "unset",
                            display: "inline-block",
                            marginLeft: "10px",
                            width: "80%",
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default SearchBar;
