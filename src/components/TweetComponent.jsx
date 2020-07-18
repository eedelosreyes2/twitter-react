import React, { Component } from "react";
import { IconContext } from "react-icons";
import { AiOutlineGif } from "react-icons/ai";
import { BsImage } from "react-icons/bs";
import { GrEmoji } from "react-icons/gr";
import { RiBarChart2Line, RiCalendarLine } from "react-icons/ri";

export class WhatsHappening extends Component {
    render() {
        return (
            <div className="border-bottom" style={{ height: "110px" }}>
                <div className="input-group mb-3 pl-3">
                    <img
                        src="https://pbs.twimg.com/profile_images/857089270414233601/H5OtJMkD_400x400.jpg"
                        alt="User"
                        style={{
                            borderRadius: "50%",
                            height: "50px",
                            marginLeft: "2px",
                            marginRight: "2px",
                            width: "50px",
                        }}
                    />
                    <input
                        type="text"
                        className="form-control-lg border-0"
                        placeholder="What's happening?"
                    />
                </div>
                <div style={{ paddingLeft: "72.5px" }}>
                    <IconContext.Provider
                        value={{
                            color: "DodgerBlue",
                            size: "1.5em",
                            style: { float: "left", marginLeft: "13px" },
                        }}
                    >
                        <BsImage />
                        <AiOutlineGif />
                        <RiBarChart2Line />
                        <GrEmoji />
                        <RiCalendarLine />
                    </IconContext.Provider>
                    <button
                        type="button"
                        className="btn btn-block btn-primary rounded-pill mr-3 mt-n1"
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
