import { Avatar } from 'antd';
import { deepOrange } from '@mui/material/colors';
import { RightCircleOutlined, LeftCircleOutlined } from '@ant-design/icons';
import {
  CommentOutlined,
  HeartFilled,
  HeartOutlined,
  SaveOutlined,
  ShareOutlined,
} from '../../@common/icons';
import TextareaAutosize from 'react-textarea-autosize';
import { Carousel, Button } from 'antd';

// 하트 <HeartFilled color="#ff3040" />

function PostPreview() {
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
          arrows
          infinite={false}
          nextArrow={<Button icon={<RightCircleOutlined />} />}
          prevArrow={<Button icon={<LeftCircleOutlined />} />}
        >
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
        </Carousel>
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
