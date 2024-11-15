import {
  CommentOutlined,
  HeartOutlined,
  SaveOutlined,
  ShareOutlined,
  HeartFilled,
} from '../../@common/icons/index.js';

function ActionButtons({
  onHeartClick,
  onCommentClick,
  onShareClick,
  onSaveClick,
  liked,
}) {
  return (
    <div className="flex h-10 my-1">
      <div className="grow flex">
        <div onClick={onHeartClick} className="p-2 pl-0 cursor-pointer">
          {liked ? <HeartFilled /> : <HeartOutlined />}
        </div>
        <div onClick={onCommentClick} className="p-2 cursor-pointer">
          <CommentOutlined />
        </div>
        <div onClick={onShareClick} className="p-2 cursor-pointer">
          <ShareOutlined />
        </div>
      </div>
      <div className="grow flex justify-end items-center ">
        <div onClick={onSaveClick} className="cursor-pointer">
          <SaveOutlined />
        </div>
      </div>
    </div>
  );
}

export default ActionButtons;
