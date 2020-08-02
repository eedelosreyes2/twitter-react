import React, { Component } from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import NavBottom from "./components/Nav/NavBottom";
import Home from "./components/Home/Home";
import Explore from "./components/Explore/Explore";
import Notifications from "./components/Notifications/Notifications";
import Messages from "./components/Messages/Messages";
import Bookmarks from "./components/Bookmarks";
import Lists from "./components/Lists/Lists";
import Profile from "./components/Profile/Profile";

export class App extends Component {
    state = {
        windowWidth: 0,
        windowHeight: 0,
        currentUser: {
            handle: "@currentUser",
            username: "Current User",
            userImg:
                "https://pbs.twimg.com/profile_images/857089270414233601/H5OtJMkD_400x400.jpg",
            headerImg:
                "https://pbs.twimg.com/media/EZHM3yNXYAUzlkm?format=jpg&name=small",
            numTweets: 0,
            isVerified: false,
            bio: "Temporary bio",
            location: "Bay Area, CA",
            link: "eedelosreyes2.github.io",
            dateJoined: "July 2020",
            following: 1,
            followers: 0,
        },
    };

    componentDidMount = () => {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);
    };

    componentWillUnmount = () => {
        window.removeEventListener("resize", this.updateDimensions);
    };

    updateDimensions = () => {
        let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
        let windowHeight =
            typeof window !== "undefined" ? window.innerHeight : 0;

        this.setState({ windowWidth, windowHeight });
    };

    render() {
        const { windowWidth, windowHeight, currentUser } = this.state;
        const showNav = windowWidth > 500;
        const navCollapsed = windowWidth < 1260;
        const showRightPane = windowWidth > 1060;
        const smallTablet = windowWidth < 670;
        let height = "100vh";
        let width = 1280;

        if (navCollapsed) {
            width = 1080;
        }
        if (!showRightPane) {
            width = 670;
        }
        if (smallTablet) {
            height = windowHeight;
            width = windowWidth;
        }
        if (windowWidth < 500) {
            width = "100vw";
        }

        const sizes = {
            showNav,
            navCollapsed,
            showRightPane,
            smallTablet,
            width,
            centerColWidth: navCollapsed ? windowWidth - 70 : 600,
            navWidth: navCollapsed ? 70 : 285,
            navMargin: navCollapsed ? 0 : 10,
        };

        return (
            <div
                style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    height: height,
                    width: width,
                }}
            >
                <Router>
                    {sizes.showNav ? (
                        <Nav sizes={sizes} currentUser={currentUser} />
                    ) : (
                        <NavBottom />
                    )}
                    <div
                        style={{
                            display: "inline-block",
                            verticalAlign: "top",
                        }}
                    >
                        <Switch>
                            <Redirect exact from="/" to="/home" />
                            <Route
                                path="/home"
                                render={() => (
                                    <Home
                                        sizes={sizes}
                                        currentUser={currentUser}
                                    />
                                )}
                            />
                            <Redirect
                                exact
                                from="/explore"
                                to="/explore/tabs/for-you"
                            />
                            <Route
                                path="/explore"
                                render={() => (
                                    <Explore
                                        sizes={sizes}
                                        currentUser={currentUser}
                                    />
                                )}
                            />
                            <Route
                                path="/notifications"
                                render={() => (
                                    <Notifications
                                        sizes={sizes}
                                        currentUser={currentUser}
                                    />
                                )}
                            />
                            <Route
                                path="/messages"
                                render={() => (
                                    <Messages
                                        sizes={sizes}
                                        currentUser={currentUser}
                                    />
                                )}
                            />
                            <Route
                                path="/bookmarks"
                                render={() => (
                                    <Bookmarks
                                        sizes={sizes}
                                        currentUser={currentUser}
                                    />
                                )}
                            />
                            <Route
                                path="/lists"
                                render={() => (
                                    <Lists
                                        sizes={sizes}
                                        currentUser={currentUser}
                                    />
                                )}
                            />
                            <Route
                                path="/profile"
                                render={() => (
                                    <Profile
                                        sizes={sizes}
                                        currentUser={currentUser}
                                    />
                                )}
                            />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
