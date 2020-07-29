import React, { Component } from "react";

export class CenterCol extends Component {
    render() {
        const { sizes } = this.props;

        return (
            <div
                style={{
                    borderRight: "1px solid",
                    borderColor: "#dee2e3",
                    display: "inline-block",
                    height: "100%", // fix
                    width: sizes.smallTablet
                        ? sizes.showNav
                            ? window.innerWidth - 70
                            : "100vw"
                        : "600px",
                }}
            >
                {this.props.component}
            </div>
        );
    }
}

export default CenterCol;
