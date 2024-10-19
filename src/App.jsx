import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
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
import { SplashScreen } from '/src/pages/@common/components';

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<SplashScreen />}>
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
      </Suspense>
    </BrowserRouter>
  );
};
export default App;
