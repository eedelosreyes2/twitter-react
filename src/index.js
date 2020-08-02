import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// Twitter Scraper stuff
// require("dotenv").config();
require("dotenv").config({ path: __dirname + "/.env" });

const Twitter = require("twitter");
const client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});
// console.log("hey " + process.env.TWITTER_CONSUMER_KEY);
const tweets = scrape("sfchronicle");

function scrape(screen_name) {
    return client.get("statuses/user_timeline", {
        screen_name: screen_name,
        tweet_mode: "extended",
        count: 20,
    });
}

ReactDOM.render(
    <React.StrictMode>
        <App tweets={tweets} />
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
