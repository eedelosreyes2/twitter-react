import React, { Component } from "react";
import { Link } from "react-router-dom";
import BlueButton from "../Reusable/BlueButton";
import { IconContext } from "react-icons";
import { AiOutlineGif } from "react-icons/ai";
import { BsImage } from "react-icons/bs";
import { GrEmoji } from "react-icons/gr";
import { RiBarChart2Line, RiCalendarLine } from "react-icons/ri";

export class TweetComponentHome extends Component {
    state = {
        items: [
            { id: 0, component: <BsImage /> },
            { id: 1, component: <AiOutlineGif /> },
            { id: 2, component: <RiBarChart2Line /> },
            { id: 3, component: <GrEmoji /> },
            { id: 4, component: <RiCalendarLine /> },
        ],
    };

    render() {
        const { userImg } = this.props.currentUser;
        return (
            <div
                style={{
                    borderBottom: "10px solid",
                    borderColor: "#e6ecf0",
                    height: "120px",
                }}
            >
                <Link to="/profile">
                    <img
                        className="user-image mt-2"
                        src={userImg}
                        alt="User"
                        style={{
                            float: "left",
                            marginLeft: "15px",
                        }}
                    />
                </Link>
                <div
                    style={{
                        float: "left",
                        width: "82.5%",
                    }}
                >
                    <input
                        type="text"
                        className="form-control-lg border-0 pt-3 ml-n2"
                        style={{
                            backgroundColor: "unset",
                            width: "100%",
                            marginBottom: "12px",
                        }}
                        placeholder="What's happening?"
                    />
                    <div
                        style={{
                            display: "inline-block",
                            marginLeft: "5px",
                            overflow: "hidden",
                        }}
                    >
                        {this.state.items.map((item) => {
                            const { id, component } = item;
                            return (
                                <button className="icon-wrapper" key={id}>
                                    <IconContext.Provider
                                        value={{
                                            className: "twitter-blue",
                                            size: "1.35em",
                                        }}
                                    >
                                        {component}
                                    </IconContext.Provider>
                                </button>
                            );
                        })}
                    </div>
                    <BlueButton
                        title="Tweet"
                        height="37.5px"
                        width="75px"
                        float="right"
                        isActive={false}
                        event={null}
                        path="/"
                    />
                </div>
            </div>
        );
    }
}

export default TweetComponentHome;
