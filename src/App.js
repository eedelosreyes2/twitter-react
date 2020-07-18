import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
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
    return (
        <div className="App row" style={{ width: "100vw" }}>
            <Nav />
            <Router>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/explore" component={Explore} />
                    <Route path="/notifications" component={Notifications} />
                    <Route path="/messages" component={Messages} />
                    <Route path="/bookmarks" component={Bookmarks} />
                    <Route path="/lists" component={Lists} />
                    <Route path="/profile" component={Profile} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
