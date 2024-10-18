import './PostView.css';

function PostView() {
  return (
    <>
      <div className="container flex">
        <div className="outline1">사진리스트</div>
        <div className="outline1">
          <div className="outline2">상단프로필</div>
          <div className="outline2 flex">
            <div className="outline3">프로필사진</div>
            <div className="outline3">
              <div className="outline4">아이디 내용</div>
              <div className="outline4">해시태그</div>
              <div className="outline4">게시글 작성시간</div>
            </div>
          </div>
          <div className="outline2">댓글리스트</div>
          <div className="outline2">
            <div className="outline3 flex">
              <div className="outline4"> 하트 </div>
              <div className="outline4"> 댓글 </div>
              <div className="outline4"> DM</div>
            </div>
            <div className="outline3">좋아요 갯수</div>
            <div className="outline3">게시글 작성시간</div>
          </div>
          <div className="outline2">댓글달기</div>
        </div>
      </div>
    </>
  );
}

export default PostView;
