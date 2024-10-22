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
    <div className="flex justify-between mb-4">
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
            <div className="mb-2">
              <span
                onClick={onProfileClick}
                className="font-semibold cursor-pointer active:text-[#00000090] mr-1 select-none"
              >
                {username}
              </span>
              <span>{content}</span>
            </div>
            <div className="flex gap-3 text-xs text-neutral-500">
              <span>{postDate}</span>
              {likeCount > 0 && (
                <>
                  <div
                    onClick={onLikeClick}
                    className="font-semibold cursor-pointer"
                  >
                    좋아요 <span>{likeCount}</span>개
                  </div>
                  <span
                    onClick={onReplyClick}
                    className="font-semibold cursor-pointer"
                  >
                    답글 달기
                  </span>
                </>
              )}
            </div>
          </div>
          {replyCount > 0 && (
            <li>
              <button
                onClick={onShowReplyClick}
                className="flex items-center ml-2 mt-5 mb-2 gap-3"
              >
                <div className="border-b-[1px] border-neutral-400 w-6"></div>
                <div className="text-xs font-semibold text-neutral-500">
                  답글 보기({replyCount}개)
                </div>
              </button>
            </li>
          )}
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
