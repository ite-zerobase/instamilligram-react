import PostPreview from './components/PostPreview';
import './HomeView.css';

import axios from 'axios';
import { useEffect, useState } from 'react';

function HomeView() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  const listParams = { page: '1', size: '10' };
  function loadPostList() {
    axios
      .get('zerbase.com', { page: '1', size: '10' })
      .then((res) => {
        console.log('hi');
        console.log(res);
      })
      .catch((e) => {
        console.error(e);
      });
  }

  useEffect(() => {
    loadPostList();
  }, []);

  return (
    <>
      <div className="home-container">
        <PostPreview />
      </div>
    </>
  );
}

export default HomeView;
