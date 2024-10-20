import { Modal } from 'antd';
import styles from '../../@common/components/CreatePostModal.module.css';
import { CloseOutlined } from '@ant-design/icons';

function PostModal(props) {
  return (
    <Modal
      open={props.open}
      onCancel={props.onCancel}
      centered
      footer={null}
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
  );
}
export default PostModal;
