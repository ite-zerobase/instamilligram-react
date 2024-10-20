import { Avatar } from 'antd';
import { CommentHeartOutlined } from '../../@common/icons/index.js';
import CommentHeartFilled from '../../@common/icons/CommentHeartFilled.jsx';

function Comment({
  type = 'comment',
  profileUrl,
  username,
  postDate,
  likeCount,
  replyCount,
  isLiked,
  content,
  onProfileClick,
  onReplyClick,
  onLikeClick,
  onShowReplyClick,
}) {
  function isComment() {
    return type === 'comment';
  }
  return (
    <div className="flex justify-between">
      <div
        className="flex"
        style={{ width: type === 'comment' ? 'calc(100% - 28px)' : '100%' }}
      >
        <div>
          <Avatar
            onClick={onProfileClick}
            className="border-[#00000066] mr-2 cursor-pointer"
            size={32}
            src={profileUrl}
          />
        </div>
        <div>
          <div className="text-left">
            <div>
              <span
                onClick={onProfileClick}
                className="font-semibold cursor-pointer active:text-[#00000090] mr-1 select-none"
              >
                {username}
              </span>
              <span>{content}</span>
            </div>
            <div>
              <span className="text-xs text-neutral-500">{postDate}</span>
            </div>
          </div>
        </div>
      </div>
      {isComment() && (
        <div onClick={onLikeClick} className="flex mt-2 cursor-pointer">
          {isLiked ? <CommentHeartOutlined /> : <CommentHeartFilled />}
        </div>
      )}
    </div>
  );
}

export default Comment;
