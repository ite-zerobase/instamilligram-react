import './PostMetric.css';

function PostMetric({ likeCount, commentCount }) {
  return (
    <div className="flex">
      <div className="flex mr-6">
        <span className="mr-[7px] mt-[2px]">
          <div className="post-metric-heart"></div>
        </span>
        <span className="text-base font-semibold">{likeCount}</span>
      </div>
      <div className="flex ">
        <span className="mr-[7px] mt-[2px]">
          <div className="post-metric-comment"></div>
        </span>
        <span className="text-base font-semibold">{commentCount}</span>
      </div>
    </div>
  );
}

export default PostMetric;
