function SaveOutlined({ color = '#000000' }) {
  return (
    <svg
      aria-label="저장"
      fill={color}
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <title>저장</title>
      <polygon
        fill="none"
        points="20 21 12 13.44 4 21 4 3 20 3 20 21"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      ></polygon>
    </svg>
  );
}
export default SaveOutlined;
