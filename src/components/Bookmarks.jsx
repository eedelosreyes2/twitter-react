import React, { Component } from "react";
import { CenterCol } from "./Reusable/CenterCol";
import { Pane1 } from "./Reusable/Pane1";
import { IconContext } from "react-icons";
import { IoIosArrowRoundBack } from "react-icons/io";

export class Bookmarks extends Component {
    render() {
        const { sizes } = this.props;

        return (
            <div>
                <CenterCol
                    sizes={sizes}
                    component={
                        <React.Fragment>
                            <div
                                className="border-bottom pl-3 pt-1"
                                style={{ height: "55px" }}
                            >
                                {sizes.showNav ? null : (
                                    <div
                                        className="icon-wrapper"
                                        style={{
                                            padding: "5px",
                                            marginRight: "15px",
                                        }}
                                    >
                                        <IconContext.Provider
                                            value={{
                                                className: "twitter-blue",
                                                size: "2em",
                                            }}
                                        >
                                            <IoIosArrowRoundBack
                                                onClick={() =>
                                                    window.history.back()
                                                }
                                            />
                                        </IconContext.Provider>
                                    </div>
                                )}
                                <p className="header1 pb-1">Bookmarks</p>
                                <p className="sub mt-n4">
                                    {this.props.currentUser.handle}
                                </p>
                            </div>
                            <div className="p-2">
                                <p className="header2 text-center mt-5">
                                    You haven’t added any Tweets to your
                                    Bookmarks yet
                                </p>
                                <p className="sub text-center mt-n2">
                                    When you do, they’ll show up here.
                                </p>
                            </div>
                        </React.Fragment>
                    }
                />
                {this.props.sizes.showRightPane ? <Pane1 /> : null}
            </div>
        );
    }
}

export default Bookmarks;
