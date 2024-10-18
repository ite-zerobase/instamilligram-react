import SplashScreen from '/src/pages/@common/components/SplashScreen';
import PostPreview from './components/PostPreview';
import './HomeView.css';

function HomeView() {
  return (
    <>
      <div className="home-container">
        <PostPreview />
      </div>
    </>
  );
}

export default HomeView;
