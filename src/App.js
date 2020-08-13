import React, { Component } from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import NavSide from "./components/Nav/NavSide";
import NavBottom from "./components/Nav/NavBottom";
import TweetComponent from "./components/Reusable/TweetComponent";
import Home from "./components/Home/Home";
import Explore from "./components/Explore/Explore";
import Notifications from "./components/Notifications";
import Messages from "./components/Messages/Messages";
import Bookmarks from "./components/Bookmarks";
import Lists from "./components/Lists";
import Profile from "./components/Profile/Profile";

export class App extends Component {
    state = {
        windowWidth: 0,
        windowHeight: 0,
        currentUser: {
            handle: "@handle",
            username: "Username",
            userImg:
                "https://pbs.twimg.com/profile_images/875168307585794048/yuE68O2__400x400.jpg",
            headerImg:
                "https://64.media.tumblr.com/95ff024ccc5563db3afa1ac6d2cdbf35/510ee8c665eda2db-e2/s640x960/5ab783f55f32dd813e512edbe4e9cbf8ed2272fd.jpg",
            numTweets: 2,
            isVerified: false,
            bio:
                "This is not a real Twitter account, but you can make posts on this app and they will also show up here!",
            location: "Bay Area, CA",
            link: "eedelosreyes2.github.io",
            dateJoined: "July 2020",
            following: 0,
            followers: 0,
        },
        posts: [
            {
                id: 0,
                createdAt: Date.now(),
                user: {
                    handle: "@handle",
                    username: "Username",
                    userImg:
                        "https://pbs.twimg.com/profile_images/875168307585794048/yuE68O2__400x400.jpg",
                    isVerified: false,
                },
                text:
                    "Welcome to Twitter React App v1.0 😀  Make a post and they will show up here and on the profile page!",
                comments: 0,
                media: null,
                retweets: 0,
                likes: 1,
            },
            {
                id: 1,
                createdAt: Date.now() + 1,
                user: {
                    handle: "@handle",
                    username: "Username",
                    userImg:
                        "https://pbs.twimg.com/profile_images/875168307585794048/yuE68O2__400x400.jpg",
                    isVerified: false,
                },
                text:
                    "If you need help or want to know something about this app, click on the 'Help' tab on the left!",
                comments: 0,
                media: null,
                retweets: 0,
                likes: 0,
            },
        ],
    };

    componentDidMount = () => {
        this.updateDimensions();
        this.getPosts();
        window.addEventListener("resize", this.updateDimensions);
        window.addEventListener("load", this.getPosts);
        window.addEventListener("beforeunload", this.setPosts);
    };

    componentWillUnmount = () => {
        this.setPosts();
        window.removeEventListener("resize", this.updateDimensions);
        window.removeEventListener("load", this.getPosts);
        window.removeEventListener("beforeunload", this.setPosts);
    };

    updateDimensions = () => {
        let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
        let windowHeight =
            typeof window !== "undefined" ? window.innerHeight : 0;

        this.setState({ windowWidth, windowHeight });
    };

    getPosts = () => {
        const posts = JSON.parse(sessionStorage.getItem("posts"));
        if (posts) this.setState({ posts });
    };

    setPosts = () => {
        sessionStorage.setItem("posts", JSON.stringify(this.state.posts));
    };

    handleProfileClick = () => {
        const navSide = document.getElementById("navSide");
        if (navSide.style.display === "none") {
            navSide.style.display = "block";
        } else {
            navSide.style.display = "none";
        }
    };

    handleAddPost = (post) => {
        const posts = [...this.state.posts, post];
        this.setState({ posts });
    };

    handleRetweetPost = (id) => {
        const posts = [
            ...this.state.posts.map((post) => {
                if (post.id === id) {
                    if (post.retweets > 0) {
                        post.retweets--;
                    } else {
                        post.retweets++;
                    }
                }
                return post;
            }),
        ];

        this.setState({ posts });
    };

    handleLikePost = (id) => {
        const posts = [
            ...this.state.posts.map((post) => {
                if (post.id === id) {
                    if (post.likes > 0) {
                        post.likes--;
                    } else {
                        post.likes++;
                    }
                }
                return post;
            }),
        ];

        this.setState({ posts });
    };

    render() {
        const { windowWidth, windowHeight, currentUser, posts } = this.state;
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
                        <div>
                            <NavBottom />
                            <NavSide
                                currentUser={currentUser}
                                onProfileClick={this.handleProfileClick}
                            />
                        </div>
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
                                path="/compose/tweet"
                                render={() => (
                                    <TweetComponent
                                        sizes={sizes}
                                        currentUser={currentUser}
                                        onAddPost={this.handleAddPost}
                                    />
                                )}
                            />
                            <Route
                                path="/home"
                                render={() => (
                                    <Home
                                        sizes={sizes}
                                        currentUser={currentUser}
                                        posts={posts}
                                        onProfileClick={this.handleProfileClick}
                                        onRetweetPost={this.handleRetweetPost}
                                        onAddPost={this.handleAddPost}
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
                                        onProfileClick={this.handleProfileClick}
                                    />
                                )}
                            />
                            <Route
                                path="/notifications"
                                render={() => (
                                    <Notifications
                                        sizes={sizes}
                                        currentUser={currentUser}
                                        onProfileClick={this.handleProfileClick}
                                    />
                                )}
                            />
                            <Route
                                path="/messages"
                                render={() => (
                                    <Messages
                                        sizes={sizes}
                                        currentUser={currentUser}
                                        onProfileClick={this.handleProfileClick}
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
                                        posts={posts}
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
