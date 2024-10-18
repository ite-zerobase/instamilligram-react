function ProfileView() {
  return (
    <>
      <div className="container">
        <div className="outline1 flex">
          <div className="outline2">프로필사진</div>
          <div className="outline2">
            <div className="outline3 flex">
              <div className="outline4">아이디</div>
              <div className="outline4">팔로우버튼</div>
              <div className="outline4">메시지보내기</div>
            </div>
            <div className="outline3 flex">
              <div className="outline4">게시물수</div>
              <div className="outline4">팔로워수</div>
              <div className="outline4">팔로잉수</div>
            </div>
            <div className="outline3">
              <div className="outline4">이름</div>
              <div className="outline4">프로필</div>
            </div>
          </div>
        </div>
        <div className="outline1">사진리스트</div>
      </div>
    </>
  );
}

export default ProfileView;
