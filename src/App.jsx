import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BaseLayout } from './pages';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:username" element={<Dummy />} />
          <Route path="/p/:postId" element={<Dummy />} />
        </Routes>
      </BaseLayout>
    </BrowserRouter>
  );
};
export default App;

function Home() {
  return <h1 style={{ height: '100vh' }}>Home Component</h1>;
}

function Dummy() {
  return <h1 style={{ height: '100vh' }}>Dummy Component</h1>;
}
