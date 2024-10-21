import { Comment } from './index.js';

function CommentList() {
  return (
    <>
      <div className="">
        <Comment
          type="comment"
          profileUrl={
            'https://d2v80xjmx68n4w.cloudfront.net/gigs/F1zfb1718452618.jpg'
          }
          postDate={'3일'}
          username={'zerobase.ite'}
          content={
            '댓글이야!\n' +
            '오늘도 여름에 가볍게 입을만한 코디 보여줄게!\n' +
            '점점 더워지지만 아직 긴팔은 버틸만해서 ㅎㅎ\n' +
            '셔츠로 색감 포인트 내고싶어서 민트색 입어써\n' +
            '프린팅으로 포멀한 포인트 주는 것도 잊지 않구\n' +
            '재밌게 봐줘~!!!🙃🙃'
          }
          likeCount={24}
          replyCount={1}
          isLiked={false}
          onProfileClick={() => console.log('프로필 클릭')}
          onLikeClick={() => console.log('좋아요 클릭')}
          onShowReplyClick={() => console.log('답글 보기 클릭')}
          onReplyClick={() => console.log('답글 달기 클릭')}
        />
        <Comment
          type="comment"
          profileUrl={
            'https://d2v80xjmx68n4w.cloudfront.net/gigs/F1zfb1718452618.jpg'
          }
          postDate={'3일'}
          username={'zerobase.ite'}
          content={'롸저뎃ㅋㅋ'}
          likeCount={2400}
          replyCount={5}
          isLiked={false}
          onProfileClick={() => console.log('프로필 클릭')}
          onLikeClick={() => console.log('좋아요 클릭')}
          onShowReplyClick={() => console.log('답글 보기 클릭')}
          onReplyClick={() => console.log('답글 달기 클릭')}
        />
        <Comment
          type="comment"
          profileUrl={
            'https://d2v80xjmx68n4w.cloudfront.net/gigs/F1zfb1718452618.jpg'
          }
          postDate={'3일'}
          username={'zerobase.ite'}
          content={
            '댓글이야!\n' +
            '오늘도 여름에 가볍게 입을만한 코디 보여줄게!\n' +
            '점점 더워지지만 아직 긴팔은 버틸만해서 ㅎㅎ\n' +
            '셔츠로 색감 포인트 내고싶어서 민트색 입어써\n' +
            '프린팅으로 포멀한 포인트 주는 것도 잊지 않구\n' +
            '재밌게 봐줘~!!!🙃🙃'
          }
          likeCount={24}
          isLiked={false}
          onProfileClick={() => console.log('프로필 클릭')}
          onLikeClick={() => console.log('좋아요 클릭')}
          onShowReplyClick={() => console.log('답글 보기 클릭')}
          onReplyClick={() => console.log('답글 달기 클릭')}
        />
      </div>
    </>
  );
}

export default CommentList;
