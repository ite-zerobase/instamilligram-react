import { Avatar } from 'antd';

function PostProfile({
  profileUrl,
  postDate,
  username,
  showDate,
  showFollow,
  onProfileClick,
  onFollowClick,
}) {
  return (
    <div className="flex items-center">
      <Avatar
        onClick={onProfileClick}
        className="border-[#00000066] mr-2 cursor-pointer"
        size={32}
        src={profileUrl}
      />
      <div className="select-none">
        <div className="flex h-[18px] items-center">
          <span
            onClick={onProfileClick}
            className="font-semibold cursor-pointer active:text-[#00000090]"
          >
            {username}
          </span>
          {showDate && (
            <>
              <span className="mx-[6px] text-xs text-neutral-500">•</span>
              <span className="text-neutral-500">{postDate}</span>
            </>
          )}
          {showFollow && (
            <>
              <span className="mx-[6px] text-xs text-neutral-500">•</span>
              <div
                onClick={onFollowClick}
                className="text-[#0095f6] hover:text-[#00376b] active:text-[#00376b90] cursor-pointer font-semibold"
              >
                <span>팔로우</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default PostProfile;
