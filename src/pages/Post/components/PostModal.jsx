import { Modal } from 'antd';
import styles from '../../@common/components/CreatePostModal.module.css';
import { CloseOutlined } from '@ant-design/icons';

function PostModal({ children, show, onCancel }) {
  return (
    <Modal
      open={show}
      onCancel={onCancel}
      centered
      footer={null}
      closable={false}
      transitionName={null}
      className="post-modal"
      width={'auto'}
      styles={{ content: { padding: 0 } }}
    >
      <button className={styles.closeButton} onClick={onCancel}>
        <CloseOutlined style={{ color: 'white' }} />
      </button>
      {children}
    </Modal>
  );
}

export default PostModal;
