import './PostView.css';
import {
  ActionButtons,
  LikeCount,
  PhotoSwiper,
  PostModal,
  PostProfile,
  SubmitComment,
} from './index.js';
import { Comment, CommentList } from '../Comment/index.js';
import { useEffect, useState } from 'react';
import { Button } from 'antd';

function PostView() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    console.log('close');

    setIsModalOpen(false);
  };
  //모달 사이즈 세팅
  const [imageWidth, setImageWidth] = useState(0);
  const updateImageWidth = () => {
    const height = window.innerHeight;
    setImageWidth(height - 48);
  };
  useEffect(() => {
    window.addEventListener('resize', updateImageWidth);
    updateImageWidth();
    return () => {
      window.removeEventListener('resize', updateImageWidth);
    };
  }, []);

  const profileUrl =
    'https://d2v80xjmx68n4w.cloudfront.net/gigs/F1zfb1718452618.jpg';
  return (
    <>
      <Button onClick={() => setIsModalOpen(true)}>포스트 열기</Button>
      <PostModal show={isModalOpen} onCancel={closeModal}>
        <div className="w-full flex items-center justify-center overflow-hidden rounded-lg">
          <article
            style={{
              height: imageWidth + 'px',
              minHeight: '300px',
            }}
            className="flex justify-between"
          >
            <section className="h-full grow">
              <PhotoSwiper
                imageWidth={imageWidth}
                imageUrls={[
                  'http://placehold.it/480x450',
                  'http://placehold.it/480x450',
                  'http://placehold.it/480x450',
                ]}
              />
            </section>
            <div className="min-w-[400px] w-[400px] flex flex-col">
              <section className="h-[60px] flex items-center py-[14px] px-[16px] border-[1px] border-neutral-200 rounded-sm">
                <PostProfile
                  profileUrl={profileUrl}
                  username={'zerobase.ite'}
                  postDate={'5일'}
                  showFollow
                  onProfileClick={() => console.log('프로필 클릭')}
                  onFollowClick={() => console.log('팔로우 클릭')}
                />
              </section>
              <section className="grow overflow-y-scroll scrollbar-hidden flex flex-col gap-y-3 py-[14px] px-[16px] ">
                <Comment
                  type="post"
                  profileUrl={profileUrl}
                  postDate={'3일'}
                  username={'zerobase.ite'}
                  content={
                    '게시글이야!\n' +
                    '오늘도 여름에 가볍게 입을만한 코디 보여줄게!\n' +
                    '점점 더워지지만 아직 긴팔은 버틸만해서 ㅎㅎ\n' +
                    '셔츠로 색감 포인트 내고싶어서 민트색 입어써\n' +
                    '프린팅으로 포멀한 포인트 주는 것도 잊지 않구\n' +
                    '재밌게 봐줘~!!!🙃🙃'
                  }
                  onProfileClick={() => console.log('프로필 클릭')}
                />
                <CommentList />
              </section>
              <section className="h-[160px] min-h-[160px] flex flex-col justify-center gap-3 border-[1px] border-neutral-200 rounded-sm">
                <div className="px-[16px]">
                  <ActionButtons
                    onHeartClick={() => console.log('Heart')}
                    onCommentClick={() => console.log('Comment')}
                    onShareClick={() => console.log('Share')}
                    onSaveClick={() => console.log('Save')}
                  />
                  <LikeCount count={'3.1만'} />
                  <div className="text-left">
                    <span className="text-xs text-neutral-500">
                      {'10월 12일'}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="w-full border-b-[1px] border-neutral-300 border-solid"></div>
                  <div className="px-[16px]">
                    <SubmitComment
                      showProfile
                      profileUrl={profileUrl}
                      onSubmit={() => console.log('게시버튼 클릭')}
                    />
                  </div>
                </div>
              </section>
            </div>
          </article>
        </div>
      </PostModal>
    </>
  );
}

export default PostView;
