function ProfileMetrics({ postCount, followerCount, followCount }) {
  return (
    <ul className="text-base flex gap-8 mb-5">
      <li>
        게시물 <span className="font-semibold">{postCount}</span>
      </li>
      <li>
        팔로워 <span className="font-semibold">{followerCount}</span>
      </li>
      <li>
        팔로우 <span className="font-semibold">{followCount}</span>
      </li>
    </ul>
  );
}

export default ProfileMetrics;
