import { Avatar, Button } from 'antd';
import { deepOrange } from '@mui/material/colors';
import { RightCircleFilled, LeftCircleFilled } from '@ant-design/icons';
import {
  CommentOutlined,
  HeartFilled,
  HeartOutlined,
  SaveOutlined,
  ShareOutlined,
} from '../../@common/icons';
import TextareaAutosize from 'react-textarea-autosize';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// 하트 <HeartFilled color="#ff3040" />

const arrowStyles = {
  position: 'absolute',
  zIndex: 2,
  top: 'calc(50% - 15px)',
  width: 30,
  height: 30,
  cursor: 'pointer',
};

function CarouselNextArrow(onClickHandler, hasNext) {
  return (
    hasNext && (
      <Button
        type="text"
        style={{ ...arrowStyles, right: 5 }}
        onClick={onClickHandler}
        icon={<RightCircleFilled className="text-[#FFFFFFE4]" />}
      />
    )
  );
}
function CarouselPrevArrow(onClickHandler, hasPrev) {
  return (
    hasPrev && (
      <Button
        type="text"
        style={{ ...arrowStyles, left: 5 }}
        onClick={onClickHandler}
        icon={<LeftCircleFilled className="text-[#FFFFFFE4]" />}
      />
    )
  );
}

function CarouselIndicator(onClick, isSelected) {
  return (
    <div
      style={{
        width: 6,
        height: 6,
        backgroundColor: isSelected ? '#FFFFFF' : '#FFFFFF80',
        display: 'inline-block',
        margin: '0 2px',
        borderRadius: '50%',
      }}
    ></div>
  );
}

function PostPreview() {
  function onCarouselChange(c) {
    console.log(c);
  }
  return (
    <article className="home-post-preview text-sm ">
      {/* 상단 프로필 섹션 */}
      <section className="flex items-center ml-1 mb-3">
        <Avatar
          className="border-[#00000066] mr-2"
          size={32}
          src="https://d2v80xjmx68n4w.cloudfront.net/gigs/F1zfb1718452618.jpg"
        />
        <div>
          <div className="flex h-[18px] items-center">
            <span className="font-semibold">zerobase.ite</span>
            <span className="mx-[6px] text-xs text-neutral-500">•</span>
            <span className="text-neutral-500">5일</span>
          </div>
        </div>
      </section>
      <section className="border-[1px] border-neutral-200 rounded-sm ">
        <Carousel
          showArrows={true}
          showStatus={false}
          transitionTime={250}
          showThumbs={false}
          onChange={(c) => onCarouselChange(c)}
          renderArrowNext={CarouselNextArrow}
          renderArrowPrev={CarouselPrevArrow}
          renderIndicator={CarouselIndicator}
        >
          <div className="flex items-center h-full bg-black">
            <img
              draggable="false"
              style={{ userSelect: 'none' }}
              src="http://placehold.it/350x150"
            />
          </div>
          <div className="flex items-center h-full bg-black">
            <img
              draggable="false"
              style={{ userSelect: 'none' }}
              src="http://placehold.it/255x150"
            />
          </div>
          <div className="flex items-center h-full bg-black">
            <img
              draggable="false"
              style={{ userSelect: 'none' }}
              src="http://placehold.it/295x150"
            />
          </div>
        </Carousel>
        {/* {<RightCircleOutlined />}
            {<LeftCircleOutlined />}  */}
      </section>
      <div>
        <section className="flex h-10 my-1">
          <div className="grow flex ">
            <div className="p-2 pl-0 cursor-pointer">
              <HeartOutlined />
            </div>
            <div className="p-2 cursor-pointer">
              <CommentOutlined />
            </div>
            <div className="p-2 cursor-pointer">
              <ShareOutlined />
            </div>
          </div>
          <div className="grow flex justify-end items-center ">
            <div className="cursor-pointer">
              <SaveOutlined />
            </div>
          </div>
        </section>
        <section>
          <div className="text-start">
            <span className="font-semibold h-[18]">
              좋아요 <span>3.1만</span>개
            </span>
          </div>
        </section>
        <section className="pt-2 flex flex-col items-start">
          <div className="flex">
            <span className="font-semibold mr-1">zerobase.ite</span>
            <span>테스트글입니당</span>
            <div>
              <span className="mr-1">...</span>
              <span className="text-neutral-500 cursor-pointer">더보기</span>
            </div>
          </div>
          <div className="text-neutral-500 cursor-pointer mt-2">
            댓글 <span>540</span>개 모두 보기
          </div>
        </section>
        <section className="mt-2 flex w-full">
          <div className="flex w-full">
            <TextareaAutosize
              placeholder="댓글 달기..."
              className="outline-none w-auto grow"
              minRows={1}
              maxRows={4}
              style={{ resize: 'none' }}
            />
            <div className="w-7 mx-2 text-[#0095f6] hover:text-[#00376b] cursor-pointer font-semibold">
              <span className="">게시</span>
            </div>
          </div>
        </section>
      </div>
      <div className="w-full border-b-[1px] pb-4 mb-5 border-neutral-200 border-solid"></div>
    </article>
  );
}

export default PostPreview;
