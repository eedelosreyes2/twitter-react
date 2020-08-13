import React, { Component } from "react";
import { v4 as uuid4 } from "uuid";
import BlueButton from "./BlueButton";
import { IconContext } from "react-icons";
import { MdClose } from "react-icons/md";
import { IoIosArrowRoundBack } from "react-icons/io";
import { AiOutlineGif } from "react-icons/ai";
import { BsImage } from "react-icons/bs";
import { GrEmoji } from "react-icons/gr";
import { RiBarChart2Line, RiCalendarLine } from "react-icons/ri";

export class TweetComponent extends Component {
    state = {
        items: [
            { id: 0, component: <BsImage /> },
            { id: 1, component: <AiOutlineGif /> },
            { id: 2, component: <RiBarChart2Line /> },
            { id: 3, component: <GrEmoji /> },
            { id: 4, component: <RiCalendarLine /> },
        ],
    };

    handleTweetClick = () => {
        var text = document.getElementById("myInput").value;

        if (text.trim() !== "") {
            this.props.onAddPost({
                id: uuid4(),
                createdAt: Date.now(),
                user: {
                    handle: "@handle",
                    username: "Username",
                    userImg:
                        "https://pbs.twimg.com/profile_images/875168307585794048/yuE68O2__400x400.jpg",
                    isVerified: false,
                },
                text,
                comments: 0,
                media: null,
                retweets: 0,
                likes: 0,
            });
            document.getElementById("myInput").value = "";
            window.history.back();
        }
    };

    render() {
        const { sizes } = this.props;
        const { userImg } = this.props.currentUser;

        const tweetcomponent = (
            <div>
                <img
                    className="user-image mt-2"
                    src={userImg}
                    alt="User"
                    style={{
                        float: "left",
                        marginLeft: "15px",
                    }}
                />
                <div style={{ float: "left", width: "75%" }}>
                    <textarea
                        id="myInput"
                        type="text"
                        className="form-control-lg"
                        style={{
                            border: "none",
                            outline: "none",
                            paddingTop: "15px",
                            paddingBottom: "170px",
                            resize: "none",
                            width: "110%",
                        }}
                        placeholder="What's happening?"
                    />
                    {/* <div
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
                    </div> */}
                    {sizes.smallTablet ? null : (
                        <div
                            style={{
                                display: "inline-block",
                                paddingRight: "20px",
                                position: "fixed",
                                right: 0,
                            }}
                        >
                            <BlueButton
                                title="Tweet"
                                height="37.5px"
                                width="80px"
                                float="right"
                                isActive={true}
                                event={() => this.handleTweetClick()}
                                path={null}
                            />
                        </div>
                    )}
                </div>
            </div>
        );

        return (
            <React.Fragment>
                {sizes.smallTablet ? (
                    <div
                        style={{
                            backgroundColor: "white",
                            bottom: 0,
                            display: "flex",
                            flexDirection: "column",
                            height: "100%",
                            left: 0,
                            margin: 0,
                            overflow: "auto",
                            overscrollBehavior: "none",
                            position: "absolute",
                            right: 0,
                            top: 0,
                            width: "100vw",
                            zIndex: 10,
                        }}
                    >
                        <div
                            style={{
                                borderBottom: "2px solid",
                                borderColor: "#e6ecf0",
                                height: "55px",
                                padding: "10px",
                                width: "100%",
                            }}
                        >
                            <div className="icon-wrapper p-1">
                                <IconContext.Provider
                                    value={{
                                        className: "twitter-blue",
                                        size: "2em",
                                    }}
                                >
                                    <IoIosArrowRoundBack
                                        onClick={() => window.history.back()}
                                    />
                                </IconContext.Provider>
                            </div>
                            <BlueButton
                                title="Tweet"
                                height="30px"
                                width="80px"
                                float="right"
                                isActive={true}
                                event={() => this.handleTweetClick()}
                                path="/"
                            />
                        </div>
                        {tweetcomponent}
                    </div>
                ) : (
                    <React.Fragment>
                        <div
                            onClick={() => window.history.back()}
                            style={{
                                backgroundColor: "rgba(0, 0, 0, 0.5)",
                                display: "flex",
                                justifyContent: "center",
                                filter: "blur(50%)",
                                height: "100vh",
                                left: 0,
                                position: "absolute",
                                width: "100vw",
                                zIndex: 10,
                            }}
                        />
                        <div
                            style={{
                                backgroundColor: "white",
                                borderRadius: "15px",
                                height: "295px",
                                left: "50%",
                                marginTop: "35px",
                                position: "absolute",
                                transform: "translate(-50%, -50%)",
                                top: "21%",
                                width: "600px",
                                zIndex: 11,
                            }}
                        >
                            <div
                                style={{
                                    borderBottom: "2px solid",
                                    borderColor: "#e6ecf0",
                                    height: "55px",
                                    padding: "10px",
                                }}
                            >
                                <div className="icon-wrapper p-1">
                                    <IconContext.Provider
                                        value={{
                                            className: "twitter-blue",
                                            size: "1.5em",
                                            style: { margin: "4px" },
                                        }}
                                    >
                                        <MdClose
                                            onClick={() =>
                                                window.history.back()
                                            }
                                        />
                                    </IconContext.Provider>
                                </div>
                            </div>
                            {tweetcomponent}
                        </div>
                    </React.Fragment>
                )}
            </React.Fragment>
        );
    }
}

export default TweetComponent;
