import React, { Component } from "react";
import { IconContext } from "react-icons";
import { GrClose } from "react-icons/gr";

export class NavSide extends Component {
    render() {
        return (
            <div
                id="navSide"
                style={{
                    display: "none",
                    height: "100vh",
                    left: 0,
                    position: "fixed",
                    top: 0,
                    transition: "2s",
                    width: "100%",
                    zIndex: 100,
                }}
            >
                <div
                    style={{
                        backgroundColor: "white",
                        float: "left",
                        height: "100%",
                        width: "60vw",
                    }}
                >
                    <div
                        className="header1 border-bottom p-3"
                        style={{
                            alignItems: "center",
                            display: "flex",
                            height: "50px",
                        }}
                    >
                        Account info
                        {/* <IconContext.Provider
                            value={{
                                className: "twitter-blue",
                                size: "2em",
                                style: { float: "right" },
                            }}
                        >
                            <GrClose />
                        </IconContext.Provider> */}
                    </div>
                </div>
                <div
                    onClick={() => this.props.onProfileClick()}
                    style={{
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        filter: "blur(50%)",
                        float: "right",
                        height: "100%",
                        width: "40vw",
                    }}
                ></div>
            </div>
        );
    }
}

export default NavSide;
