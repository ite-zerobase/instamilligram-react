function LikeCount({ count }) {
  return (
    <div className="text-start">
      <span className="font-semibold h-[18]">
        좋아요 <span>{count}</span>개
      </span>
    </div>
  );
}

export default LikeCount;
