import { Avatar } from 'antd';
import ProfileActionPanel from './components/ProfileActionPanel';
import ProfileMetrics from './components/ProfileMetrics';

function ProfileView() {
  const profileUrl =
    'https://img.freepik.com/free-photo/adorable-portrait-pomeranian-dog_23-2151771743.jpg';
  return (
    <>
      <div className="max-w-[975px] pt-[30px] px-[20px] mx-auto">
        <div className="flex">
          <section className="mr-7">
            <Avatar className="cursor-pointer" size={150} src={profileUrl} />
          </section>
          <div className="outline2">
            <section>
              <ProfileActionPanel username={'bomzzip'} isFollowing={false} />
            </section>
            <section>
              <ProfileMetrics
                postCount={398}
                followerCount={'2.8만'}
                followCount={143}
              />
            </section>
            <section className="outline3">
              <div className="outline4">이름</div>
              <div className="outline4">프로필</div>
            </section>
          </div>
        </div>
        <div className="outline1">사진리스트</div>
      </div>
    </>
  );
}

export default ProfileView;
