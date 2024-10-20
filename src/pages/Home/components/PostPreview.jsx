import {
  ActionButtons,
  LikeCount,
  PhotoSwiper,
  PostProfile,
  SubmitComment,
} from '../../Post/index.js';
import PostContentPreview from '../../Post/components/PostContentPreview.jsx';

function PostPreview() {
  return (
    <article className="home-post-preview text-sm">
      <section>
        <div className="ml-1 mb-3">
          <PostProfile
            profileUrl={
              'https://d2v80xjmx68n4w.cloudfront.net/gigs/F1zfb1718452618.jpg'
            }
            username={'zerobase.ite'}
            postDate={'5일'}
            showDate
            showFollow
            onProfileClick={() => console.log('프로필 클릭')}
            onFollowClick={() => console.log('팔로우 클릭')}
          />
        </div>
      </section>
      <section className="border-[1px] border-neutral-200 rounded-sm overflow-hidden">
        <PhotoSwiper
          imageUrls={[
            'http://placehold.it/470x480',
            'http://placehold.it/470x480',
            'http://placehold.it/470x480',
          ]}
        />
      </section>
      <div>
        <section>
          <ActionButtons
            onHeartClick={() => console.log('Heart')}
            onCommentClick={() => console.log('Comment')}
            onShareClick={() => console.log('Share')}
            onSaveClick={() => console.log('Save')}
          />
        </section>
        <section>
          <LikeCount count={'3.1만'} />
        </section>
        <section>
          <PostContentPreview
            username={'zerobase-ite'}
            postContent={'테스트게시글입니당'}
            commentCount={540}
            onMorePostContentClick={() => console.log('게시글 더보기 클릭')}
            onShowAllCommentClick={() => console.log('댓글 모두보기 클릭')}
          />
        </section>
        <section>
          <SubmitComment onSubmit={console.log} />
        </section>
      </div>
      <div className="w-full border-b-[1px] pb-4 mb-5 border-neutral-200 border-solid"></div>
    </article>
  );
}

export default PostPreview;
