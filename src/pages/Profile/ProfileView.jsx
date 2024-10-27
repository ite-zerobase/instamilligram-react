function ProfileView() {
  return (
    <>
      {/* <div className="container">ProfileView</div>*/}
      <div className="outline1">
        <div className="outline2 flex">
          <div className="outline3">프로필사진</div>
          <div className="outline3">
            <div className="outline4 flex">
              <div className="outline5">아이디</div>
              <div className="outline5">팔로우버튼</div>
              <div className="outline5">메시지보내기</div>
            </div>
            <div className="outline4 flex">
              <div className="outline5">게시물수</div>
              <div className="outline5">팔로워수</div>
              <div className="outline5">팔로잉수</div>
            </div>
            <div className="outline4">이름</div>
            <div className="outline4">프로필</div>
          </div>
        </div>
        <div className="outline2">사진리스트</div>
      </div>
    </>
  );
}

export default ProfileView;
