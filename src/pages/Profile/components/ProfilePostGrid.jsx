import { TagOutlined, PostRectOutlined } from '../../@common/icons';
import ProfilePostGridItem from './ProfilePostGridItem.jsx';

function ProfilePostGrid({ username }) {
  const thumbnailUrls = [
    'https://www.fitpetmall.com/wp-content/uploads/2023/10/image-26.png',
    'https://www.fitpetmall.com/wp-content/uploads/2024/02/shutterstock_1472349182.jpg',
    'https://www.fitpetmall.com/wp-content/uploads/2024/02/shutterstock_279847499-1.jpg',
    'https://www.fitpetmall.com/wp-content/uploads/2023/10/shutterstock_2276491285-1.png',
  ];
  return (
    <div>
      <div className="border-t-[1px] h-[52px] mt-5">
        <div className="flex items-center justify-center gap-[60px] h-full">
          <div className="flex items-center h-full border-t-[1px] border-black cursor-pointer">
            <PostRectOutlined />
            <span className="ml-[6px] font-semibold">게시물</span>
          </div>
          <div className="flex items-center h-full cursor-pointer">
            <TagOutlined color="#737373" />
            <span className="text-neutral-500 ml-[6px] font-semibold">
              태그됨
            </span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-x-1">
        <ProfilePostGridItem
          imageUrl={thumbnailUrls[0]}
          likeCount={6780}
          commentCount={231}
          onClick={() => console.log('이미지 클릭')}
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
