import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  BaseLayout,
  LoginLayout,
  LoginView,
  HomeView,
  ProfileView,
  PostView,
  SignupView,
  CommentList,
  SearchView,
  NotificationView,
} from './pages';
import './App.css';

const App = () => {
  const time = new Date().toLocaleString();

  const timeAgo = (timestamp) => {
    const now = new Date();
    const postTime = new Date(timestamp); // timestamp를 Date 객체로 변환
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

  const posts = [
    {
      userId: 'myeongji',
      userProfileImage:
        'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d',
      imageUrl: 'https://images.unsplash.com/photo-1516117172878-fd2c41f4a759',
      location: '서울',
      content: '인생 첫 게시물\n신난다~!',
      hashtags: ['인생', '첫', '게시물'],
      timestamp: timeAgo(new Date(Date.now() - 40 * 60 * 1000).toISOString()), // 40분 전 으로 임의 세팅
      likes: 100,
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<HomeView />} />
          <Route path="/:username" element={<ProfileView />} />
          <Route path="/p/:postId" element={<PostView post={posts[0]} />} />
          <Route path="/comments" element={<CommentList />} />
          <Route path="/notification" element={<NotificationView />} />
          <Route path="/search" element={<SearchView />} />
        </Route>
        <Route element={<LoginLayout />}>
          <Route path="login" element={<LoginView />} />
          <Route path="signup" element={<SignupView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
