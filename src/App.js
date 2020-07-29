import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import NavBottom from "./components/NavBottom";
import Home from "./components/Home";
import Explore from "./components/Explore";
import Notifications from "./components/Notifications";
import Messages from "./components/Messages";
import Bookmarks from "./components/Bookmarks";
import Lists from "./components/Lists";
import Profile from "./components/Profile";

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
                "https://pbs.twimg.com/profile_banners/26270913/1583071044/1500x500",
            numTweets: 0,
            isVerified: false,
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
        const { windowWidth, currentUser } = this.state;
        const navCollapsed = windowWidth < 1260;

        const sizes = {
            showNav: windowWidth > 436,
            navCollapsed,
            navWidth: navCollapsed ? 70 : 270,
            navMargin: navCollapsed ? 0 : 10,
            showRightPane: windowWidth > 1060,
            collapseCenter: windowWidth < 700,
        };

        return (
            <div className="App">
                <div
                    style={{
                        margin: "0px auto",
                        overflow: "auto",
                        height: "100%",
                    }}
                >
                    <Router>
                        {sizes.showNav ? (
                            <Nav sizes={sizes} currentUser={currentUser} />
                        ) : (
                            <NavBottom />
                        )}
                        <div style={{ float: "left" }}>
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
                                <Route
                                    path="/explore"
                                    render={() => <Explore sizes={sizes} />}
                                />
                                <Route
                                    path="/notifications"
                                    render={() => (
                                        <Notifications sizes={sizes} />
                                    )}
                                />
                                <Route
                                    path="/messages"
                                    render={() => <Messages sizes={sizes} />}
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
            </div>
        );
    }
}

export default App;
