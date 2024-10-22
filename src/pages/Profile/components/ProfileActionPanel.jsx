import { useState } from 'react';
import { Button } from '../../@common/components';
import { SimilarAccountsOutlined } from '../../@common/icons';

function ProfileActionPanel({ username, isFollowing }) {
  return (
    <>
      <div className="flex">
        <div className="text-xl mr-5">{username}</div>
        <div className="flex gap-2">
          <Button
            onClick={() => console.log('팔로우 클릭')}
            loading={false}
            text={'팔로우'}
            color={'primary'}
          />
          <Button
            onClick={() => console.log('메시지 보내기 클릭')}
            loading={false}
            text="메시지 보내기"
            color="secondary"
          />
          <Button
            onClick={() => console.log('추천친구 클릭')}
            loading={false}
            icon={<SimilarAccountsOutlined />}
            color="secondary"
          />
        </div>
      </div>
    </>
  );
}

export default ProfileActionPanel;
