import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

function getPxFromSize(size) {
  switch (size) {
    case 'xs':
      return 12;
    case 'md':
      return 16;
    case 'lg':
      return 18;
    case 'xl':
      return 20;
    default:
      return 14;
  }
}
function getColorCode(color) {
  switch (color) {
    case 'secondary':
      return '#EFEFEF';
    default:
      return '#0095F6';
  }
}
function getFontColorCode(color) {
  switch (color) {
    case 'secondary':
      return '#000000';
    default:
      return '#FFFFFF';
  }
}
function getSpinColorCode(color) {
  switch (color) {
    case 'secondary':
      return '#3f3f3f';
    default:
      return '#FFFFFF';
  }
}
function getHoverColorCode(color) {
  switch (color) {
    case 'secondary':
      return '#DBDBDB';
    default:
      return '#1877F2';
  }
}
function Button({
  text,
  children,
  onClick,
  color = 'primary',
  loading = false,
  size = 'sm',
}) {
  return (
    <button
      onClick={onClick}
      className="zerobase-button relative cursor-pointer"
      style={{
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 7,
        paddingBottom: 7,
        borderRadius: 8,
        backgroundColor: getColorCode(color),
        '--hover-background-color': getHoverColorCode(color),
        '--active-opacity': 0.7,
      }}
      disabled={loading}
    >
      <div
        className="button-inner-wrapper "
        style={{
          fontSize: getPxFromSize(size),
          color: getFontColorCode(color),
        }}
      >
        <div
          style={{
            opacity: loading ? 0 : 1,
            lineHeight: '18px',
          }}
        >
          {text ? text : children}
        </div>
      </div>
      {loading && (
        <Spin
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          indicator={
            <LoadingOutlined
              style={{
                fontSize: getPxFromSize(size) + 8,
                color: getSpinColorCode(color),
              }}
              spin
            />
          }
        />
      )}
    </button>
  );
}

export default Button;