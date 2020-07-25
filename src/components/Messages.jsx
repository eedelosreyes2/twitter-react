import React, { Component } from "react";
import { RiMailAddLine } from "react-icons/ri";
import { SearchBar } from "./SearchBar";

export class Messages extends Component {
    render() {
        return (
            <div>
                <div className="center-col-sm">
                    <div className="header1 border-bottom pb-2 pl-3 pr-2 pt-2 mt-1">
                        Messages
                        <div className="riMailAddLine-wrapper">
                            {/* <IconContext.Provider> */}
                            <RiMailAddLine />
                            {/* </IconContext.Provider> */}
                        </div>
                    </div>
                    <div className="border-bottom" style={{ height: "60px" }}>
                        <SearchBar />
                    </div>
                </div>
            </div>
        );
    }
}

export default Messages;
