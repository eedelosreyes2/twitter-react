import React, { Component } from "react";
import { Pane1 } from "./Pane1";

export class Bookmarks extends Component {
    render() {
        return (
            <div>
                <div className="center-col">
                    {/* <div className="h5 font-weight-bold border-bottom pb-3 pl-3"> */}
                    <div
                        className="border-bottom pl-3 pt-1"
                        style={{ height: "55px" }}
                    >
                        <p className="header1 pb-1">Bookmarks</p>
                        <p className="sub mt-n4">
                            {this.props.currentUser.handle}
                        </p>
                    </div>
                    <p className="header2 text-center mt-5">
                        You haven’t added any Tweets to your Bookmarks yet
                    </p>
                    <p className="sub text-center mt-n2">
                        When you do, they’ll show up here.
                    </p>
                </div>
                <div className="right-col">
                    <Pane1 />
                </div>
            </div>
        );
    }
}

export default Bookmarks;
