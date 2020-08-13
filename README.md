# Twitter React App

I created a replica of [Twitter](https://twitter.com/)! The purpose of making this app is to learn the fundamentals of [React](https://reactjs.org/) by creating reusable and reactive components, implementing basic post, retweet, and like functionality, integrating [React-Router-Dom](https://www.npmjs.com/package/react-router-dom), [Bootstrap](https://www.npmjs.com/package/react-router-dom), session storage, and responsive optimizations for all devices.

## Live Demo

https://eedelosreyes2.github.io/twitter-react/

## Version

1.0

## Features
- Rich, interactive, user-friendly web app UI that looks identical to Twitter.com
- Optimization for desktop, tablet, and phone (try them all out!)
- Basic post, retweet, and like functionality
- Simulates being logged in to Twitter for a single user

## Specs

-   App is intended to look as close to [Twitter](https://twitter.com/) as possible
-   Post data is saved in [session storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage) and is deleted once the tab is closed
-   Not all icons are the same as real Twitter - all icons used in this app are imported from [react-icons](https://react-icons.github.io/react-icons/)
-   Not every single functionality from Twitter is implemented
    -   Components that don't have functionality yet:
        -   Homepage: Sparkle button, Searchbar
        -   Explore page: Searchbar, Settings button, Explore tabs
        -   Notifications page: Settings button, Searchbar
        -   Messages page: New message icon, Searchbar, Start a conversation, New message
        -   Bookmarks page: Searchbar
        -   Lists page: New List, Settings, Create a List, Searchbar
        -   Profile page: Following and Followers
        -   What's Happening and Who to follow values are hardcoded (I made them up), show more button in Who to follow
        -   Compose Tweet: image, gif, poll, emoji, and schedule buttons
    -   I will add Dim + Lights out mode

## Changelog

-   v1.0 - MVP released

## Bugs

- Session storage is deleted on refresh for iPhones (Safari) and idk why

## Feedback

I'd love any feedback on my code, comments, questions, job offers 😉 - [My Website](https://eedelosreyes2.github.io)
