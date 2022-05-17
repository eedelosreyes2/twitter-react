import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class WhatsHappening extends Component {
  state = {
    stories: [
      {
        id: 0,
        title: 'React.js is changing the game for front-end web development',
        category: 'Technology',
        status: 'Trending',
        tweets: '10K',
        image: '/img-src.jpg',
      },
      {
        id: 1,
        title: 'Trump says *something stupid*',
        category: 'USA',
        status: 'Trending since 2016',
        tweets: '99K',
        image: null,
      },
      {
        id: 2,
        title: "People in the United States still aren't social distancing",
        category: 'COVID-19',
        status: 'Trending in the United States',
        tweets: '19K',
        image: '/img-src.jpg',
      },
      {
        id: 3,
        title: 'Eli is a great developer 🤓',
        category: null,
        status: 'Trending in SF, CA',
        tweets: null,
        image: null,
      },
    ],
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: '#f5f8fa',
          borderRadius: '15px',
          margin: '10px auto',
          width: '350px',
        }}
      >
        <div className="header1 pb-1 pl-3 pt-2">What's Happening</div>
        <hr className="hr-sm" />
        {this.state.stories.map((story) => {
          const { category, status, title, tweets } = story;
          return (
            <div key={story.id}>
              <div className="hoverable pl-3 pb-1 pt-1">
                {category ? (
                  <span className="sub">
                    {category} · {status}
                  </span>
                ) : (
                  <span className="sub">{status}</span>
                )}
                <br />
                <span className="story-title">{title}</span>
                {tweets ? (
                  <span className="sub">
                    <br />
                    {/* TODO: parse */}
                    {tweets} Tweets
                  </span>
                ) : null}
              </div>
              <hr className="hr-sm" />
            </div>
          );
        })}
        <Link to="/explore">
          <div className="show-more twitter-blue p-3">Show more</div>
        </Link>
      </div>
    );
  }
}

export default WhatsHappening;
