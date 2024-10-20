function PostContentPreview({
  username,
  postContent,
  commentCount,
  onMorePostContentClick,
  onShowAllCommentClick,
}) {
  return (
    <div className="pt-2 flex flex-col items-start">
      <div className="flex">
        <span className="font-semibold mr-1">{username}</span>
        <span>{postContent}</span>
        <div>
          <span className="mr-1">...</span>
          <span
            className="text-neutral-500 cursor-pointer"
            onClick={onMorePostContentClick}
          >
            더보기
          </span>
        </div>
      </div>
      <div
        onClick={onShowAllCommentClick}
        className="text-neutral-500 cursor-pointer mt-2"
      >
        댓글 <span>{commentCount}</span>개 모두 보기
      </div>
    </div>
  );
}

export default PostContentPreview;
