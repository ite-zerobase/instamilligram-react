import { useNavigate } from 'react-router-dom';
import styles from './LoginView.module.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function SignupView() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.formSection}>
          <div className={styles.logo} />
          <div className={styles.registerDescription}>
            친구들의 사진과 동영상을 보려면 가입하세요.
          </div>
          <div className={styles.inputWrapper}>
            <TextField
              label="사용자 이름"
              autoComplete="none"
              fullWidth
              margin="dense"
            />
            <TextField
              label="비밀번호"
              autoComplete="new-password"
              fullWidth
              margin="dense"
            />
            <TextField
              label="성명"
              autoComplete="none"
              fullWidth
              margin="dense"
            />
          </div>
          <Button
            onClick={() => navigate('/login')}
            variant="contained"
            size="large"
            fullWidth
          >
            가입
          </Button>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.gotoSection}>
          <div>
            계정이 있으신가요?{' '}
            <span
              onClick={() => navigate('/login')}
              className={styles.boldLink}
            >
              로그인
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignupView;
