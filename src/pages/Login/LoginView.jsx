import { useNavigate } from 'react-router-dom';
import styles from './LoginView.module.css';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
const textFieldProps = {
  input: { style: { fontSize: 14 } },
  htmlInput: { style: { fontSize: 14 } },
  inputLabel: { style: { fontSize: 14 } },
};
function LoginView() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.formSection}>
          <div className={styles.logo} />
          <div className={styles.inputWrapper}>
            <TextField
              label="전화번호, 사용자 이름 또는 이메일"
              autoComplete="none"
              fullWidth
              slotProps={textFieldProps}
              margin="dense"
            />
            <TextField
              slotProps={textFieldProps}
              label="비밀번호"
              fullWidth
              margin="dense"
            />
          </div>
          <Button
            onClick={() => navigate('/')}
            variant="contained"
            size="large"
            fullWidth
          >
            로그인
          </Button>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.gotoSection}>
          <div>
            계정이 없으신가요?{' '}
            <span
              onClick={() => navigate('/signup')}
              className={styles.boldLink}
            >
              가입하기
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LoginView;
