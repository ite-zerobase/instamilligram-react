import { TagOutlined, PostRectOutlined } from '../../@common/icons';
import ProfilePostGridItem from './ProfilePostGridItem.jsx';

function ProfilePostGrid({ username }) {
  const thumbnailUrls = [
    'https://t1.daumcdn.net/cafeattach/1D7bO/b116283b090d29d2647feb81f6814f51cffb8eab',
    'https://t1.daumcdn.net/cafeattach/1D7bO/6e240d5d1855e7a67aab66d890ea73b60aae441b',
    'https://t1.daumcdn.net/cafeattach/1D7bO/8199f6933127d7e758977caa78b45589ecec5478',
    'https://t1.daumcdn.net/cafeattach/1D7bO/902ab1b120f974a0970e9d164a2f308cc2bfa3e3',
    'https://t1.daumcdn.net/cafeattach/1D7bO/408961cc28c42010c17e64168f07c6e5c1d7f4fb',
    'https://t1.daumcdn.net/cafeattach/1D7bO/8c5280899cf274f568f200828cfd7c077f197efa',
  ];
  return (
    <div>
      <div className="border-t-[1px] h-[52px]">
        <div className="flex items-center justify-center gap-[60px] h-full">
          <div className="flex items-center h-full border-t-[1px] border-black cursor-pointer">
            <PostRectOutlined />
            <span className="ml-[6px]">게시물</span>
          </div>
          <div className="flex items-center h-full cursor-pointer">
            <TagOutlined color="#737373" />
            <span className="text-neutral-500 ml-[6px]">태그됨</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1">
        <ProfilePostGridItem
          imageUrl={thumbnailUrls[0]}
          likeCount={6780}
          commentCount={231}
        />
        <ProfilePostGridItem
          imageUrl={thumbnailUrls[1]}
          likeCount={180}
          commentCount={14}
        />
        <ProfilePostGridItem
          imageUrl={thumbnailUrls[2]}
          likeCount={230}
          commentCount={84}
        />
        <ProfilePostGridItem
          imageUrl={thumbnailUrls[3]}
          likeCount={421}
          commentCount={52}
        />
      </div>
    </div>
  );
}
export default ProfilePostGrid;
