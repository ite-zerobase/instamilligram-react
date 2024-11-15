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
import { useParams } from 'react-router-dom';
import axios from 'axios';

function PostView() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [post, setPost] = useState(null);
  const [liked, setLiked] = useState(false);
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

  const timeAgo = (postDate) => {
    const now = new Date();
    const postTime = postDate;
    const differenceInSeconds = Math.floor((now - postTime) / 1000); // 초 단위 차이 계산

    if (differenceInSeconds < 60) {
      return `${differenceInSeconds}초 전`;
    } else if (differenceInSeconds < 3600) {
      const minutes = Math.floor(differenceInSeconds / 60);
      return `${minutes}분 전`;
    } else if (differenceInSeconds < 86400) {
      const hours = Math.floor(differenceInSeconds / 3600);
      return `${hours}시간 전`;
    } else {
      const days = Math.floor(differenceInSeconds / 86400);
      return `${days}일 전`;
    }
  };

  const { postId } = useParams(); // postId 가져오기

  useEffect(() => {
    console.log(window.localStorage.getItem('accessToken'));
    axios
      .get(`http://apis.zerobase-ite.site/posts/${postId}`, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('accessToken')}`,
        },
      })
      .then((response) => {
        setPost(response.data);
        setLiked(response.data.liked);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  const profileUrl = post.writer.profilePictureUrl;
  const imageUrls = post.media.map(
    (item) =>
      `http://image.zerobase-ite.site/api/zerobase/file/${item.mediaUrl}`
  );
  const postDate = new Date(post.createdAt.split('.')[0]); // 소수점 이하를 자르고 Date 객체로 변환

  const onHeartClick = () => {
    if (!liked) {
      axios
        .post(`http://apis.zerobase-ite.site/posts/${postId}/like`, {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem('accessToken')}`,
          },
        })
        .then((response) => {
          if (response.status == '200') {
            setLiked(!liked);
            console.log('liked -> ' + liked);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .delete(`http://apis.zerobase-ite.site/posts/${postId}/like`, {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem('accessToken')}`,
          },
        })
        .then((response) => {
          if (response.status == '200') {
            setLiked(!liked);
            console.log('liked -> ' + liked);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

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
              <PhotoSwiper imageWidth={imageWidth} imageUrls={imageUrls} />
            </section>
            <div className="min-w-[400px] w-[400px] flex flex-col">
              <section className="h-[60px] flex items-center py-[14px] px-[16px] border-[1px] border-neutral-200 rounded-sm">
                <PostProfile
                  profileUrl={profileUrl}
                  username={post.writer.username}
                  postDate={timeAgo(postDate)}
                  showFollow
                  onProfileClick={() => console.log('프로필 클릭')}
                  onFollowClick={() => console.log('팔로우 클릭')}
                />
              </section>
              <section className="grow overflow-y-scroll scrollbar-hidden flex flex-col gap-y-3 py-[14px] px-[16px] border-l-[1px] border-neutral-100 rounded-sm ">
                <Comment
                  type="post"
                  profileUrl={profileUrl}
                  postDate={timeAgo(postDate)}
                  username={post.writer.username}
                  content={
                    post.postContent
                    // '게시글이야!\n' +
                    // '오늘도 여름에 가볍게 입을만한 코디 보여줄게!\n' +
                    // '점점 더워지지만 아직 긴팔은 버틸만해서 ㅎㅎ\n' +
                    // '셔츠로 색감 포인트 내고싶어서 민트색 입어써\n' +
                    // '프린팅으로 포멀한 포인트 주는 것도 잊지 않구\n' +
                    // '재밌게 봐줘~!!!🙃🙃'
                  }
                  onProfileClick={() => console.log('프로필 클릭')}
                />
                <CommentList />
              </section>
              <section className="h-[160px] min-h-[160px] flex flex-col justify-center gap-3 border-[1px] border-neutral-200 rounded-sm">
                <div className="px-[16px]">
                  <ActionButtons
                    onHeartClick={() => onHeartClick()}
                    liked={liked}
                    onCommentClick={() => console.log('Comment')}
                    onShareClick={() => console.log('Share')}
                    onSaveClick={() => console.log('Save')}
                  />
                  <LikeCount count={post.likeCount} />
                  <div className="text-left">
                    <span className="text-xs text-neutral-500 ">
                      {`${postDate.getMonth() + 1}월 ${postDate.getDate()}일`}
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
