import React, { Component } from "react";
import { BsImage } from "react-icons/bs";
import { AiOutlineGif } from "react-icons/ai";
import { RiBarChart2Line, RiCalendarLine } from "react-icons/ri";
import { GrEmoji } from "react-icons/gr";

export class WhatsHappening extends Component {
    render() {
        return (
            <div className="border-bottom" style={{ height: "15%" }}>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="m-2">avatar</span>
                    </div>
                    <input
                        type="text"
                        className="form-control border-0"
                        placeholder="What's happening?"
                    />
                </div>
                <div>
                    <BsImage />
                    <AiOutlineGif />
                    <RiBarChart2Line />
                    <GrEmoji />
                    <RiCalendarLine />
                </div>
            </div>
        );
    }
}

export default WhatsHappening;
