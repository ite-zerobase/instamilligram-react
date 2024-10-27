import { Input, Button } from 'antd';
import { EllipsisOutlined, SmileOutlined } from '@ant-design/icons';

function PostPreview() {
  return (
    <div className="container">
      <div className="outline1">
        {/* 게시글 정보 및 프로필 */}
        <div className="outline2 flex">
          <div className="outline3">
            프로필
          </div>
          <div className="outline3">
            <div className="outline4 flex">
              <div className="outline5">
                아이디
              </div>
              <div className="outline5">
                게시글 작성시간
              </div>
            </div>
            <div className="outline4">
              위치 또는 오디오
            </div>
          </div>
          <div className="outline3">
            <EllipsisOutlined />
          </div>
        </div>
        <div className="outline2">
          사진
        </div>
        <div className="outline2">
          좋아요
        </div>
        <div className="outline2 flex">
          <div className="outline3">
            아이디
          </div>
          <div className="outline3">
            게시글 더보기
          </div>
        </div>
        <div className="outline2">
          <div className="outline3">
            댓글 n개 더보기
          </div>
          <div className="outline3 flex">
            <div className="outline4">
            <Input
              style={{
                border: "none",
                borderBottom: "1px solid #d9d9d9",
                borderRadius: 0,
              }}
              placeholder="댓글 달기..."
            />
            </div>
            <div className="outline4">
              <Button type="link">게시</Button>
            </div>
            <div className="outline4">
              <SmileOutlined />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostPreview;
