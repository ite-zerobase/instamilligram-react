import { useState } from 'react';
import { Button } from '../../@common/components';
import { SimilarAccountsOutlined } from '../../@common/icons';

function ProfileActionPanel({ username, isFollowing }) {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <button onClick={() => setLoading(!loading)}>로딩</button>
      <div className="flex">
        <div className="text-xl mr-5">{username}</div>
        <div className="flex gap-2">
          <Button loading={loading} text="팔로우" />
          <Button loading={loading} text="메시지 보내기" color="secondary" />
          <Button
            loading={loading}
            text={<SimilarAccountsOutlined />}
            color="secondary"
          />
        </div>
      </div>
    </>
  );
}

export default ProfileActionPanel;
