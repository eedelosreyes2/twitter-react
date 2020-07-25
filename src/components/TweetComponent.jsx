import React, { Component } from "react";
import { IconContext } from "react-icons";
import { AiOutlineGif } from "react-icons/ai";
import { BsImage } from "react-icons/bs";
import { GrEmoji } from "react-icons/gr";
import { RiBarChart2Line, RiCalendarLine } from "react-icons/ri";

export class WhatsHappening extends Component {
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
        const { imageSrc } = this.props.currentUser;

        return (
            <div className="tweet-cmp">
                <div className="input-group mb-3 pl-3">
                    <img className="user mt-2" src={imageSrc} alt="User" />
                    <input
                        type="text"
                        className="tweet form-control-lg border-0 pt-4 ml-n2"
                        style={{ backgroundColor: "unset" }}
                        placeholder="What's happening?"
                    />
                </div>
                <div style={{ paddingLeft: "72.5px" }}>
                    {this.state.items.map((item) => {
                        const { id, component } = item;
                        return (
                            <div className="tweet-item-wrapper" key={id}>
                                <IconContext.Provider
                                    value={{
                                        className: "twitter-blue",
                                        size: "1.25em",
                                    }}
                                >
                                    {component}
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
