import { Avatar } from 'antd';
import { CommentHeartOutlined } from '../../@common/icons/index.js';
import CommentHeartFilled from '../../@common/icons/CommentHeartFilled.jsx';
import { useState } from 'react';

function Comment({
  type = 'comment',
  commentId,
  profileUrl,
  username,
  postDate,
  likeCount,
  replyCount,
  isLiked,
  content,
  parentId,
  replies=[],
  onProfileClick,
  onReplyClick,       /*답글 달기*/
  onLikeClick,        /*좋아요 하트모양 */
  onShowReplyClick,   /*답글 보기 */
}) {

  const [replyShow, setReplyShow] = useState(false);
  const [replyLoading, setReplyLoading] = useState(false);

  function isComment() {
    return type === 'comment';
  } 

  return (
    <div className="flex justify-between mb-4">
      <div
        className="flex"
        style={{ width: type === 'comment' ? 'calc(100% - 5px)' : '100%' }}
      >
        <div>
          <Avatar
            onClick={onProfileClick}
            className="border-[#00000066] mr-2 cursor-pointer"
            size={32}
            src={`http://image.zerobase-ite.site/api/zerobase/file/${profileUrl}`}
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
                  <div
                    className="font-semibold cursor-pointer"
                  >
                    좋아요 <span>{likeCount}</span>개
                  </div>
              )}
              <span
                onClick={()=>onReplyClick(username, commentId)}
                className="font-semibold cursor-pointer"
              >
                답글 달기
              </span>
            </div>
          </div>
          {replyCount > 0 &&  (
              <button
                onClick={()=>{
                  setReplyShow(!replyShow);
                  if(!replyLoading)
                    onShowReplyClick(commentId);
                  setReplyLoading(true);
                } }
                className="flex items-center ml-2 mt-5 mb-2 gap-3"
              >
                <div className="border-b-[1px] border-neutral-400 w-6"></div>
                <div className="text-xs font-semibold text-neutral-500">
                  {replyShow ? '답글 숨기기': `답글 보기(${replyCount}개)`}
                </div>
              </button>
          )}
         
          {replyShow && replies && replies.map(reply =>
              <Comment key={reply.commentId} 
                type='comment'
                commentId={reply.commentId}
                profileUrl={reply.profilePictureUrl}
                parentId={reply.parentId}
                username={reply.createdBy}
                // postDate={reply.createdAt}
                likeCount={reply.likeCount}
                isLiked={reply.liked}
                content={reply.commentText} 
                onReplyClick={()=>onReplyClick(reply.createdBy,reply.parentId)} 
                onLikeClick={()=>onLikeClick(reply.commentId, reply.liked, reply.parentId)}  />
          )}
        </div>
      </div>
      {isComment() && (
        <div onClick={()=>onLikeClick(commentId, isLiked, parentId)} className="flex mt-2 cursor-pointer">
          {isLiked ? <CommentHeartFilled /> : < CommentHeartOutlined />}
        </div>
      )}
    </div>
  );
}

export default Comment;
