import {
  ActionButtons,
  LikeCount,
  PhotoSwiper,
  PostProfile,
  SubmitComment,
} from '../../Post/index.js';
import PostContentPreview from '../../Post/components/PostContentPreview.jsx';

import axios from 'axios';
import { useEffect, useState } from 'react';

function PostPreview({ postId }) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      .get('zerbase.com', { postId: { postId } })
      .then((res) => {
        console.log('hi');
        setPost(res.data); 
      })
      .catch((e) => {
        console.error(e);
      });
  }, [ postId ]);

  const imageUrls = [
    'https://image.yes24.com/momo//TopCate4020/MidCate004/401939797.jpg',
    'https://image.yes24.com/momo//TopCate4020/MidCate004/401939798.jpg',
    'https://image.yes24.com/momo//TopCate4020/MidCate004/401939806.jpg',
    'https://image.yes24.com/momo//TopCate4020/MidCate004/401939810.jpg',
    'https://image.yes24.com/momo//TopCate4020/MidCate004/401939814.jpg',
    'https://image.yes24.com/momo//TopCate4020/MidCate004/401939818.jpg',
    'https://image.yes24.com/momo//TopCate4020/MidCate004/401939819.jpg',
    'https://image.yes24.com/momo//TopCate4020/MidCate004/401939823.jpg',
  ];
  return (
    <article className="home-post-preview text-sm">
      <section>
        <div className="ml-1 mb-3">
          <PostProfile
            profileUrl={
              'https://d2v80xjmx68n4w.cloudfront.net/gigs/F1zfb1718452618.jpg'
            }
            username={post.writer.username}
            postDate={post.createdAt}
            showDate
            showFollow={post.following}
            onProfileClick={() => console.log('프로필 클릭')}
            onFollowClick={() => console.log('팔로우 클릭')}
          />
        </div>
      </section>
      <section className="border-[1px] border-neutral-200 rounded-sm overflow-hidden">
        <PhotoSwiper imageUrls={imageUrls} />
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
          <LikeCount count={post.likeCount} />
        </section>
        <section>
          <PostContentPreview
            username={post.writer.username}
            postContent={post.postContent}
            commentCount={post.commentCount}
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
