import { Avatar, Space, Input, Button } from 'antd';
import { HeartOutlined, CommentOutlined, SendOutlined, FolderOutlined, SmileOutlined } from '@ant-design/icons';

function CommentList() {
  return (
    <div className="container">

      {/* 댓글정보 */}
      <div className="outline1">
        
        {/* 두개는 왼쪽정렬, 좋아요버튼 오른쪽 정렬을 위함 */}
        <div className='outline2 flex' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

          <div style={{ display: 'flex', gap: '8px' }}>

            {/* 프로필사진 */}
            <div className='outline3'>   
              <Space direction="vertical" size={16}>
                <Space wrap size={16}>
                  <Avatar size={48} style={{backgroundColor: '#30a6be', verticalAlign: 'middle'}}>SW</Avatar>
                </Space>
              </Space>
            </div>

            {/* 정보 */}
            <div className="outline3">
              <div className='outline4'>아이디 댓글내용</div>
              <div className='outline4 flex' >
                <div className='outline5'>작성일자</div>
                <div className='outline5'>좋아요 개수</div>
                <div className='outline5'>답글 달기</div>
              </div>
              <div className='outline4'>답글 보기(3개)</div>
            </div>

          </div>

          {/* 댓글 좋아요 */}
          <div className='outline3'><HeartOutlined style={{ fontSize: '30px'}}/></div>

        </div>

      </div>


      {/* 게시물관련 */}
      <div className='outline2'>

        {/* 3개 아이콘 왼쪽, 1개 아이콘 오른쪽으로 정렬하기 위함 */}
        <div className='outline3 flex' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

          {/* 세개 아이콘 왼쪽 정렬하기 위해 묶음 */}
          <div className='outline3 flex'>
            <div className='outline4'><HeartOutlined style={{ fontSize: '30px'}}/></div>
            <div className='outline4'><CommentOutlined style={{ fontSize: '30px'}}/></div>
            <div className='outline4'><SendOutlined style={{ fontSize: '30px'}}/></div>
          </div>
          
          <div className='outline4'><FolderOutlined style={{ fontSize: '30px'}}/></div>

        </div>

        <div className='outline3' style={{textAlign:'start'}}>님 외 22만명이 좋아합니다.</div>
        <div className='outline3' style={{textAlign:'start'}}>작성일자</div>
      </div>


      {/* 댓글달기 */}
      <div className='outline2 flex'>
        
        <div className='outline3'><SmileOutlined style={{ fontSize: '30px'}}/></div>

        <div className='outline3' style={{ flexGrow: 1}} >
          <Space.Compact style={{ width: '100%' }}>
            <Input placeholder="댓글 달기.." />
            <Button>게시</Button>
          </Space.Compact>
        </div>
        
      </div>



    </div>
  );
}

export default CommentList;
