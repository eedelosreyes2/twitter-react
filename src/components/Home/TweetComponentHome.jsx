import React, { Component } from 'react';
import { v4 as uuid4 } from 'uuid';
import { Link } from 'react-router-dom';
import BlueButton from '../Reusable/BlueButton';
// import { IconContext } from "react-icons";
import { AiOutlineGif } from 'react-icons/ai';
import { BsImage } from 'react-icons/bs';
import { GrEmoji } from 'react-icons/gr';
import { RiBarChart2Line, RiCalendarLine } from 'react-icons/ri';

export class TweetComponentHome extends Component {
  state = {
    items: [
      { id: 0, component: <BsImage /> },
      { id: 1, component: <AiOutlineGif /> },
      { id: 2, component: <RiBarChart2Line /> },
      { id: 3, component: <GrEmoji /> },
      { id: 4, component: <RiCalendarLine /> },
    ],
  };

  handleTweetClick = () => {
    var text = document.getElementById('myInput').value;

    if (text.trim() !== '') {
      this.props.handleAddPost({
        id: uuid4(),
        createdAt: Date.now(),
        user: {
          handle: '@handle',
          username: 'Username',
          userImg: '../twitter_logo.jpg',
          isVerified: false,
        },
        text,
        comments: 0,
        media: null,
        isRetweet: false,
        retweets: 0,
        likes: 0,
      });
      document.getElementById('myInput').value = '';
    }
  };

  render() {
    const { userImg } = this.props.currentUser;
    return (
      <div
        style={{
          borderBottom: '10px solid',
          borderColor: '#e6ecf0',
          height: '120px',
        }}
      >
        <Link to="/profile">
          <img
            className="user-image mt-2"
            src={userImg}
            alt="User"
            style={{
              float: 'left',
              marginLeft: '15px',
            }}
          />
        </Link>
        <div
          style={{
            float: 'left',
            width: '82.5%',
          }}
        >
          <textarea
            id="myInput"
            type="text"
            className="form-control-lg border-0 pt-3 ml-n2"
            style={{
              backgroundColor: 'unset',
              border: 'none',
              height: 'auto',
              marginBottom: '12px',
              outline: 'none',
              resize: 'none',
              width: '90%',
            }}
            placeholder="What's happening?"
          />
          {/* <div
                        style={{
                            display: "inline-block",
                            marginLeft: "5px",
                            overflow: "hidden",
                        }}
                    >
                        {this.state.items.map((item) => {
                            const { id, component } = item;
                            return (
                                <button className="icon-wrapper" key={id}>
                                    <IconContext.Provider
                                        value={{
                                            className: "twitter-blue",
                                            size: "1.35em",
                                        }}
                                    >
                                        {component}
                                    </IconContext.Provider>
                                </button>
                            );
                        })}
                    </div> */}
          <div style={{ marginRight: '-25px', marginTop: '-35px' }}>
            <BlueButton
              title="Tweet"
              height="37.5px"
              width="75px"
              float="right"
              isActive={true}
              event={() => this.handleTweetClick()}
              path={null}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TweetComponentHome;
