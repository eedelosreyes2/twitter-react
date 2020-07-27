import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import BottomBar from "./components/BottomBar";
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
            navWidth: navCollapsed ? 100 : 300,
            showRightPane: windowWidth > 1060,
        };

        return (
            <div
                className="App row"
                style={{
                    width: "100vw",
                }}
            >
                <Router>
                    {sizes.showNav ? (
                        <Nav sizes={sizes} currentUser={currentUser} />
                    ) : (
                        <BottomBar />
                    )}
                    <Switch>
                        <Redirect exact from="/" to="/home" />
                        <Route
                            path="/home"
                            render={() => (
                                <Home sizes={sizes} currentUser={currentUser} />
                            )}
                        />
                        <Route path="/explore" component={Explore} />
                        <Route
                            path="/notifications"
                            component={Notifications}
                        />
                        <Route path="/messages" component={Messages} />
                        <Route
                            path="/bookmarks"
                            render={() => (
                                <Bookmarks currentUser={currentUser} />
                            )}
                        />
                        <Route
                            path="/lists"
                            render={() => <Lists currentUser={currentUser} />}
                        />
                        <Route
                            path="/profile"
                            render={() => <Profile currentUser={currentUser} />}
                        />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
