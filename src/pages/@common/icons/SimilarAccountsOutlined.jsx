function SimilarAccountsOutlined({ color = '#000000' }) {
  return (
    <svg
      style={{ display: 'inline-block' }}
      aria-label="비슷한 계정"
      fill={color}
      height="16"
      role="img"
      viewBox="0 0 24 24"
      width="16"
    >
      <title>비슷한 계정</title>
      <path
        d="M19.006 8.252a3.5 3.5 0 1 1-3.499-3.5 3.5 3.5 0 0 1 3.5 3.5Z"
        fill="none"
        stroke={color}
        stroke-miterlimit="10"
        stroke-width="2"
      ></path>
      <path
        d="M22 19.5v-.447a4.05 4.05 0 0 0-4.05-4.049h-4.906a4.05 4.05 0 0 0-4.049 4.049v.447"
        fill="none"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      ></path>
      <line
        fill="none"
        stroke={color}
        stroke-linecap="round"
        stroke-miterlimit="10"
        stroke-width="2"
        x1="5.001"
        x2="5.001"
        y1="7.998"
        y2="14.003"
      ></line>
      <line
        fill="none"
        stroke={color}
        stroke-linecap="round"
        stroke-miterlimit="10"
        stroke-width="2"
        x1="8.004"
        x2="2.003"
        y1="11"
        y2="11"
      ></line>
    </svg>
  );
}
export default SimilarAccountsOutlined;
