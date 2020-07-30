import React, { Component } from "react";
import { Post } from "../Reusable/Post";

export class Feed extends Component {
    state = {
        posts: [
            {
                created_at: "Wed Oct 10 20:19:24 +0000 2018",
                id: 0,
                text:
                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas quia ut ullam, fugiat atque et sint dolore aliquam impedit aperiam, omnis fugit molestias modi explicabo, ea nam eaque distinctio minima.",
                user: {
                    id: 0,
                    handle: "@user_handle",
                    username: "Username",
                    image:
                        "https://pbs.twimg.com/profile_images/857089270414233601/H5OtJMkD_400x400.jpg",
                    isVerified: false,
                },
                comments: 9,
                retweets: 8,
                likes: 727,
            },
            {
                created_at: "Fri Oct 12 20:19:24 +0000 2018",
                id: 1,
                text:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolore enim recusandae aliquid mollitia odio molestias, obcaecati non quasi, quia reiciendis rerum illum modi deserunt fugit porro incidunt. Repellat, dignissimos?",
                user: {
                    id: 0,
                    handle: "@user_handle",
                    username: "Username",
                    image:
                        "https://pbs.twimg.com/profile_images/857089270414233601/H5OtJMkD_400x400.jpg",
                    isVerified: false,
                },
                comments: 6,
                retweets: 2,
                likes: 7,
            },
            {
                created_at: "Fri Oct 12 20:19:24 +0000 2018",
                id: 2,
                text:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolore enim recusandae aliquid mollitia odio molestias, obcaecati non quasi, quia reiciendis rerum illum modi deserunt fugit porro incidunt. Repellat, dignissimos?",
                user: {
                    id: 0,
                    handle: "@user_handle",
                    username: "Username",
                    image:
                        "https://pbs.twimg.com/profile_images/857089270414233601/H5OtJMkD_400x400.jpg",
                    isVerified: false,
                },
                comments: 99,
                retweets: 80,
                likes: 727,
            },
            {
                created_at: "Fri Oct 12 20:19:24 +0000 2018",
                id: 3,
                text:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolore enim recusandae aliquid mollitia odio molestias, obcaecati non quasi, quia reiciendis rerum illum modi deserunt fugit porro incidunt. Repellat, dignissimos?",
                user: {
                    id: 0,
                    handle: "@user_handle",
                    username: "Username",
                    image:
                        "https://pbs.twimg.com/profile_images/857089270414233601/H5OtJMkD_400x400.jpg",
                    isVerified: false,
                },
                comments: 9,
                retweets: 8,
                likes: 77,
            },
        ],
    };

    render() {
        return (
            <div>
                {this.state.posts.map((post) => {
                    return <Post key={post.id} post={post} />;
                })}
            </div>
        );
    }
}

export default Feed;
