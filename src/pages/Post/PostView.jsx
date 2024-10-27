import { useState } from 'react';
import './PostView.css';
import {
  HeartOutlined,
  HeartFilled,
  CommentOutlined,
  SendOutlined,
} from '@ant-design/icons';

function PostView({ post }) {
  const [likes, setLikes] = useState(post.likes); // 좋아요 수
  const [isLiked, setIsLiked] = useState(false); // 좋아요 클릭여부

  const handleLike = () => {
    setIsLiked(!isLiked);
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
  };

  return (
    <>
      <div className="container ">PostView</div>
      <div
        className="outline1 flex"
        style={{
          display: 'flex',
          flexDirection: 'row',
          height: '100%',
          width: '100%',
        }}
      >
        <div className="outline1" style={{ flex: 3 }}>
          <img src={post.imageUrl} alt="Post" className="post-image" />
        </div>
        <div className="outline1" style={{ flex: 5 }}>
          <div className="outline5 flex">
            <div>
              <img
                src={post.userProfileImage}
                alt="Profile"
                className="profile-image"
              />
            </div>
            <div style={{ textAlign: 'left' }}>
              <div>{post.userId}</div>
              <div>{post.location}</div>
            </div>
          </div>
          <div className="outline5 flex">
            <div>
              <img
                src={post.userProfileImage}
                alt="Profile"
                className="profile-image"
              />
            </div>
            <div>
              <div style={{ textAlign: 'left' }}>
                {post.userId}&nbsp;
                {post.content.split('\n').map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
              </div>
              <div style={{ textAlign: 'left' }}>
                {post.hashtags.map((tag) => (
                  <span key={tag}>#{tag}</span>
                ))}
              </div>
              <div style={{ textAlign: 'left' }}>{post.timestamp}</div>
            </div>
          </div>
          <div className="outline5">댓글리스트 - 승완</div>
          <div className="outline5">
            <div className="flex">
              <div onClick={handleLike} className="icon">
                {isLiked ? <HeartFilled /> : <HeartOutlined />}
              </div>
              <div className="icon">
                <CommentOutlined />
              </div>
              <div className="icon">
                <SendOutlined />
              </div>
            </div>
            <div style={{ textAlign: 'left' }}>좋아요 {likes}개</div>
            <div style={{ textAlign: 'left' }}>{post.timestamp}</div>
          </div>
          <div className="outline5">댓글달기창 - 승완</div>
        </div>
      </div>
    </>
  );
}

export default PostView;
