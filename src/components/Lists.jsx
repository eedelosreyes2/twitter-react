import React, { Component } from "react";
import { Pane1 } from "./Pane1";

export class Lists extends Component {
    render() {
        return (
            <div>
                <div className="center-col">
                    <div className="h5 font-weight-bold border-bottom pb-3 pl-3 pt-3">
                        Lists
                    </div>
                </div>
                <div className="right-col">
                    <Pane1 />
                </div>
            </div>
        );
    }
}

export default Lists;
