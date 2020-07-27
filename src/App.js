import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Explore from "./components/Explore";
import Notifications from "./components/Notifications";
import Messages from "./components/Messages";
import Bookmarks from "./components/Bookmarks";
import Lists from "./components/Lists";
import Profile from "./components/Profile";

function App() {
    const currentUser = {
        handle: "@currentUser",
        username: "Current User",
        userImg:
            "https://pbs.twimg.com/profile_images/857089270414233601/H5OtJMkD_400x400.jpg",
        headerImg:
            "https://pbs.twimg.com/profile_banners/26270913/1583071044/1500x500",
        numTweets: 0,
        isVerified: false,
    };

    return (
        <div className="App row" style={{ width: "100vw" }}>
            <Router>
                <Nav currentUser={currentUser} />
                <Switch>
                    <Redirect exact from="/" to="/home" />
                    <Route
                        path="/home"
                        render={() => <Home currentUser={currentUser} />}
                    />
                    <Route path="/explore" component={Explore} />
                    <Route path="/notifications" component={Notifications} />
                    <Route path="/messages" component={Messages} />
                    <Route
                        path="/bookmarks"
                        render={() => <Bookmarks currentUser={currentUser} />}
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

export default App;
