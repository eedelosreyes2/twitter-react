# Twitter React App

I created a replica of [Twitter](https://twitter.com/)! The purpose of making this app is to learn the fundamentals of [React](https://reactjs.org/) by creating reusable and reactive components, implementing basic post, retweet, and like functionality, integrating [React-Router-Dom](https://www.npmjs.com/package/react-router-dom), [Bootstrap](https://www.npmjs.com/package/react-router-dom), session storage, and responsive optimizations for all devices.

## Live Demo

https://twitter-react-woad.vercel.app

## Version

1.0

## Features

- Rich, interactive, user-friendly web app UI that looks identical to Twitter.com
- Optimization for desktop, tablet, and phone (try them all out!)
- Basic post, retweet, and like functionality
- Simulates being logged in to Twitter for a single user

## Specs

- App is intended to look as close to [Twitter](https://twitter.com/) as possible
- Post data is saved in [session storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage) and is deleted once the tab is closed
- Not all icons are the same as real Twitter - all icons used in this app are imported from [react-icons](https://react-icons.github.io/react-icons/)
- Not every single functionality from Twitter is implemented
  - Components that don't have functionality yet:
    - Homepage: Searchbar
    - Explore page: Searchbar, Settings button, Explore tabs
    - Notifications page: Settings button, Searchbar
    - Messages page: New message icon, Searchbar, Start a conversation, New message
    - Bookmarks page: Searchbar
    - Lists page: New List, Settings, Create a List, Searchbar
    - Profile page: Following and Followers
    - What's Happening and Who to follow values are hardcoded (I made them up) for display purposes, show more button in Who to follow
  - Posts allow text only
  - I will add Dim + Lights out mode!

## Browser Support

- Safari: yes
- Chrome: yes (best on MacOS)
- Firefox: kinda (some features not working as intended)
- Internet Explorer: no

## Bugs

- Session storage is deleted on refresh for iPhones (Safari)
- Tweet component does not close after creating post for iPhones (Safari)
- Flipping device to lansdcape then back to portrait doesn't resize correctly (Andriod), fixed with refresh

## Feedback

I'd love any feedback, comments, questions, help with bugs, job offers 😉 - [My Website](https://elijahdr.vercel.app/)
