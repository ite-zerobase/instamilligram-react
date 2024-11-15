import { useState, useEffect } from 'react';
import { Avatar } from 'antd';
import ProfileActionPanel from './components/ProfileActionPanel';
import ProfileMetrics from './components/ProfileMetrics';
import ProfileBio from './components/ProfileBio.jsx';
import ProfilePostGrid from './components/ProfilePostGrid.jsx';

function ProfileView({ username }) {
  const fileName = `${username}_profile.jpg`;
  const profileUrl = `http://image.zerobase-ite.site/docs${fileName}`;

  const [profileData, setProfileData] = useState(null); // 상태 초기화
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [error, setError] = useState(null); // 에러 상태

  useEffect(() => {
    // API 호출 함수
    const fetchProfileData = async () => {
      try {
        // 템플릿 리터럴을 사용하여 URL에 username 동적으로 넣기
        const response = await fetch(
          `http://apis.zerobase-ite.site/users/${username}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json(); // API에서 받은 데이터
        setProfileData(data); // 데이터를 상태에 저장
      } catch (err) {
        setError(err.message); // 오류 처리
      } finally {
        setLoading(false); // 로딩 상태 변경
      }
    };

    fetchProfileData(); // 컴포넌트가 마운트될 때 API 호출
  }, [username]); // username이 바뀔 때마다 다시 API 호출

  // 로딩 중일 때
  if (loading) return <div>로딩 중...</div>;

  // 에러가 발생했을 때
  if (error) return <div>오류: {error}</div>;

  // 데이터가 없을 경우
  if (!profileData) return <div>프로필 데이터를 찾을 수 없습니다</div>;

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
