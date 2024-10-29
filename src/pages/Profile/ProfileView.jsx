import { Avatar } from 'antd';
import ProfileActionPanel from './components/ProfileActionPanel';
import ProfileMetrics from './components/ProfileMetrics';
import ProfileBio from './components/ProfileBio.jsx';
import ProfilePostGrid from './components/ProfilePostGrid.jsx';

function ProfileView() {
  const profileUrl =
    'https://img.freepik.com/free-photo/adorable-portrait-pomeranian-dog_23-2151771743.jpg';
  return (
    <>
      <div className="max-w-[975px] pt-[30px] px-[20px] mx-auto">
        <div className="flex">
          <section className="mr-7 grow-[3]">
            <Avatar className="cursor-pointer" size={150} src={profileUrl} />
          </section>
          <div className="grow-[7]">
            <section className="mb-4 ">
              <ProfileActionPanel username={'bomzzip'} isFollowing={false} />
            </section>
            <section>
              <ProfileMetrics
                postCount={398}
                followerCount={'2.8만'}
                followCount={143}
              />
            </section>
            <section className="mb-11">
              <ProfileBio
                nickname={'꼬똥드툴레아 토르'}
                job={'동영상 크리에이터'}
                bio={'귀염뽀작 꼬똥 토르 ♥️\n' + '2024.04.18 🎂'}
              />
            </section>
          </div>
        </div>
        <section>
          <ProfilePostGrid username={'bomzzip'} />
        </section>
      </div>
    </>
  );
}

export default ProfileView;
