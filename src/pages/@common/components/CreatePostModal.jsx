import { Modal, Divider } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

import styles from './CreatePostModal.module.css';

function Title() {
  return (
    <div>
      <div className={styles['modal-title']}>새 게시물 만들기</div>
      <Divider style={{ margin: 0 }} />
    </div>
  );
}

function CreatePostModal(props) {
  return (
    <>
      <Modal
        open={props.open}
        onCancel={props.onCancel}
        centered
        footer={null}
        title={<Title />}
        closable={false}
        transitionName={null}
        className="create-post-modal"
        width={'auto'}
      >
        <button className={styles.closeButton} onClick={props.onCancel}>
          <CloseOutlined style={{ color: 'white' }} />
        </button>
        <div className={styles.modal}>
          내용내용내용내용내용내용내용내용내용내용
        </div>
      </Modal>
    </>
  );
}

export default CreatePostModal;
