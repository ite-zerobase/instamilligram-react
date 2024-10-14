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
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<HomeView />} />
          <Route path="/:username" element={<ProfileView />} />
          <Route path="/p/:postId" element={<PostView />} />
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
