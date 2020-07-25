import React, { Component } from "react";
import { IconContext } from "react-icons";
import { AiOutlineGif } from "react-icons/ai";
import { BsImage } from "react-icons/bs";
import { GrEmoji } from "react-icons/gr";
import { RiBarChart2Line, RiCalendarLine } from "react-icons/ri";

export class WhatsHappening extends Component {
    state = {
        items: [
            <BsImage />,
            <AiOutlineGif />,
            <RiBarChart2Line />,
            <GrEmoji />,
            <RiCalendarLine />,
        ],
    };

    render() {
        return (
            <div className="tweet-cmp">
                <div className="input-group mb-3 pl-3">
                    <img
                        className="user mt-2"
                        src="https://pbs.twimg.com/profile_images/857089270414233601/H5OtJMkD_400x400.jpg"
                        alt="User"
                    />
                    <input
                        type="text"
                        className="tweet form-control-lg border-0 pt-4 ml-n2"
                        style={{ backgroundColor: "unset" }}
                        placeholder="What's happening?"
                    />
                </div>
                <div style={{ paddingLeft: "72.5px" }}>
                    {this.state.items.map((item) => {
                        return (
                            <div className="tweet-item-wrapper">
                                <IconContext.Provider
                                    value={{
                                        className: "twitter-blue",
                                        size: "1.25em",
                                    }}
                                >
                                    {item}
                                </IconContext.Provider>
                            </div>
                        );
                    })}
                    <button
                        type="button"
                        className="btn btn-block btn-primary rounded-pill mr-3 mt-n2"
                        style={{
                            float: "right",
                            height: "37.5px",
                            width: "75px",
                        }}
                    >
                        Tweet
                    </button>
                </div>
            </div>
        );
    }
}

export default WhatsHappening;
