import TextareaAutosize from 'react-textarea-autosize';
import { Avatar } from 'antd';
import { useEffect, useState } from 'react';

function SubmitComment({ onSubmit, showProfile, profileUrl, replyInfo={} }) {

  //const [editContent, setEditContent] = useState('');
  const [commentContent, setCommentContent] = useState('');

  useEffect(()=>{
    setCommentContent(replyInfo.receiver ? `@${replyInfo.receiver} `: '');
  },[replyInfo])

  const handleEditComment = (content) => {
    setCommentContent(content);
  }

  return (

    <div className="mt-2 flex w-full">
      <div className="flex w-full items-center">
        {showProfile && (
          <Avatar
            className="border-[#00000066] mr-3"
            size={32}
            src={profileUrl}
          />
        )}
        <TextareaAutosize
          placeholder="댓글 달기..."
          className="outline-none w-auto grow"
          minRows={1}
          maxRows={4}
          style={{ resize: 'none' }}
          value={commentContent}
          onChange={e=>handleEditComment(e.target.value)}
        />
        <div
          onClick={() => onSubmit(commentContent)}
          className="w-7 mx-2 text-[#0095f6] hover:text-[#00376b] active:text-[#00376b90] cursor-pointer font-semibold"
        >
          <span>게시</span>
        </div>
      </div>
    </div>
  );
}

export default SubmitComment;
