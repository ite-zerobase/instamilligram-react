import { Carousel } from 'react-responsive-carousel';
import { Button } from 'antd';
import { LeftCircleFilled, RightCircleFilled } from '@ant-design/icons';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

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

function PhotoSwiper({ imageUrls }) {
  return (
    <div className="h-full flex items-center bg-black">
      <Carousel
        showArrows={true}
        showStatus={false}
        transitionTime={200}
        showThumbs={false}
        renderArrowNext={CarouselNextArrow}
        renderArrowPrev={CarouselPrevArrow}
        renderIndicator={CarouselIndicator}
      >
        {imageUrls.map((url, index) => (
          <div
            key={index}
            className="h-full flex items-center justify-center bg-black"
          >
            <img
              draggable="false"
              style={{
                userSelect: 'none',
                maxHeight: '100%',
                objectFit: 'contain',
              }}
              src={url}
              alt={url}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
export default PhotoSwiper;
