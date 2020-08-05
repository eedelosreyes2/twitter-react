import React, { Component } from "react";

export class BlueButton extends Component {
    state = {
        backgroundColor: this.props.isActive
            ? "var(--twitter-blue)"
            : "#92d0f9",
    };

    handleMouseEnter = (isActive) => {
        if (isActive) {
            this.setState({ backgroundColor: "#1a8cd3" });
        }
    };

    handleMouseLeave = (isActive) => {
        if (isActive) {
            this.setState({ backgroundColor: "var(--twitter-blue)" });
        }
    };

    render() {
        const {
            title,
            height,
            shadow,
            width,
            float,
            isActive,
            event,
        } = this.props;

        return (
            <button
                onClick={event}
                onMouseEnter={() => this.handleMouseEnter(isActive)}
                onMouseLeave={() => this.handleMouseLeave(isActive)}
                style={{
                    backgroundColor: this.state.backgroundColor,
                    border: "none",
                    borderRadius: "50px",
                    boxShadow: shadow ? "1px 1px 3px gray" : "",
                    color: "white",
                    float: float,
                    fontWeight: "bold",
                    height: height,
                    outline: "none",
                    width: width,
                }}
            >
                {title}
            </button>
        );
    }
}

export default BlueButton;
