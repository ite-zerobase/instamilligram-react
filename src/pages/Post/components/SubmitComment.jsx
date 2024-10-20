import TextareaAutosize from 'react-textarea-autosize';
import { Avatar } from 'antd';

function SubmitComment({ onSubmit, showProfile, profileUrl }) {
  const val = '댓글 게시버튼 클릭';
  return (
    <div className="mt-2 flex w-full">
      <div className="flex w-full items-center">
        <Avatar
          className="border-[#00000066] mr-3"
          size={32}
          src={profileUrl}
        />
        <TextareaAutosize
          placeholder="댓글 달기..."
          className="outline-none w-auto grow"
          minRows={1}
          maxRows={4}
          style={{ resize: 'none' }}
        />
        <div
          onClick={() => onSubmit(val)}
          className="w-7 mx-2 text-[#0095f6] hover:text-[#00376b] active:text-[#00376b90] cursor-pointer font-semibold"
        >
          <span>게시</span>
        </div>
      </div>
    </div>
  );
}

export default SubmitComment;
