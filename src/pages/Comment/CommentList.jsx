import { useCallback, useEffect, useState } from 'react';
import { Comment } from './index.js';
import axios from 'axios';
import { SubmitComment } from '../Post/index.js';

function CommentList() {

  const accessToken = localStorage.getItem("accessToken")

  const [commentList, setCommentList] = useState([]);
  const [replyInfo, setReplyInfo] = useState({});
  
  // 답글달기 버튼
  const handleReplyButton = (receiver, commentId) => {
    setReplyInfo({receiver: receiver, commentId: commentId});
  };

  // 댓글 제출 버튼
  const handleSubmitContent = useCallback((content) => {

    const commentArr = content.split(' ', 2);  // 첫 번째 공백 기준으로 두 부분만 나눔 : 사용자태그와 댓글내용 분리

    const result = commentArr[0].match(/@(.+)/);  // @ 뒤의 모든 문자 캡처 : 사용자계정 추출

    if(content === null || content === '' || content === undefined){
      setReplyInfo({});
      return;
    }

    if (result && result[1] === replyInfo.receiver) {
      setReplyInfo({...replyInfo, content: content});
    }
    else {
      setReplyInfo({commentId:null, content: content});
    }
    
    axios.post("http://apis.zerobase-ite.site/posts/1/comments",{
      commentText: content,
      parentId: replyInfo.commentId,
    },{
      headers:{"Authorization":`Bearer ${accessToken}`}
    }).then(({data})=>{
      console.log(data);
      setCommentList(commentList.map(comment=>comment.commentId===data.parentId ? {...comment, replyCount: comment.replyCount + 1} : comment))
      
      //setCommentList([...commentList, data]);
    }).catch(err=>{
      console.log(err.message);
    })

  },[commentList, replyInfo]);

  // 전체 댓글 리스트
  useEffect(() => {
    axios.get('http://apis.zerobase-ite.site/posts/1/comments',{
        headers:{"Authorization": `Bearer ${accessToken}`}})
    .then(res => {
      console.log(res.data);
      setCommentList(res.data);
    })
    .catch(err => console.log(err));
  }, []);


  // 좋아요 버튼
  const handleLikeButton = useCallback((commentId, isLiked) => {

    // 좋아요
    if(!isLiked){
      axios.post(`http://apis.zerobase-ite.site/comments/${commentId}/like`, null, {
        headers: {Authorization: `Bearer ${accessToken}`
        }
      }).then(()=>{
          setCommentList(commentList.map((comment)=> comment.commentId === commentId ? {...comment, likeCount: comment.likeCount+1, liked:!isLiked} : comment));
      }).catch(err=>console.log(err.message))
      return;
    }

    // 좋아요 취소
    axios.delete(`http://apis.zerobase-ite.site/comments/${commentId}/like`, {headers: {
      Authorization: `Bearer ${accessToken}`
      }
    }).then(()=>{
        setCommentList(commentList.map((comment)=> comment.commentId === commentId ? {...comment, likeCount: comment.likeCount-1,liked:!isLiked} : comment));
    }).catch(err=>console.log(err.message))
  },[commentList]);


  // 답글보기 버튼
  const handleShowReplyButton = useCallback((commentId) => {

    axios.get(`http://apis.zerobase-ite.site/comments/${commentId}/replies`,{
      headers:{
          "Authorization": `Bearer ${accessToken}`
      }
    }).then((res)=>{
      const replies = res.data
      setCommentList([...commentList, ...replies]);
    }).catch(err=>console.log(err.message))
  },[commentList]);


  return (
    <>
      {commentList && commentList.map(item=>{
        if(item.parentId === null){
          return <Comment key={item.commentId}
                    commentId = {item.commentId}
                    type="comment"
                    profileUrl={item.profilePictureUrl}
                    postDate={item.postDate}
                    username={item.createdBy}
                    content={item.commentText}
                    likeCount={item.likeCount}
                    replyCount={item.replyCount}
                    parentId={item.parentId}
                    isLiked={item.liked}
                    replies={commentList.filter((comment)=> comment.parentId===item.commentId)}
                    onLikeClick={handleLikeButton}
                    onProfileClick={() => console.log('프로필 클릭')}
                    onShowReplyClick={handleShowReplyButton}
                    onReplyClick={handleReplyButton}
                />
          }
        })}
        <SubmitComment replyInfo={replyInfo} onSubmit={handleSubmitContent}/>
    </>
  );
}

export default CommentList;
