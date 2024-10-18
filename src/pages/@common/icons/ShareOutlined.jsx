function ShareOutlined({ color = '#000000' }) {
  return (
    <svg
      aria-label="공유하기"
      fill={color}
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <title>공유하기</title>
      <line
        fill="none"
        stroke={color}
        strokeLinejoin="round"
        strokeWidth="2"
        x1="22"
        x2="9.218"
        y1="3"
        y2="10.083"
      ></line>
      <polygon
        fill="none"
        points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
        stroke={color}
        strokeLinejoin="round"
        strokeWidth="2"
      ></polygon>
    </svg>
  );
}

export default ShareOutlined;
