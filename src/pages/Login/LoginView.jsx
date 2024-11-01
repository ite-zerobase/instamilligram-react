import { useNavigate } from 'react-router-dom';
import styles from './LoginView.module.css';
import Button from '@mui/material/Button';

import { TextField, InputLabel } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';

const textFieldProps = {
  input: { style: { fontSize: 14 } },
  htmlInput: { style: { fontSize: 14 } },
  inputLabel: { style: { fontSize: 14 } },
};

function LoginView() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameValidationText, setUsernameValidationText] = useState('');
  const [passwordValidationText, setPasswordValidationText] = useState('');
  const [loginErrorText, setLoginErrorText] = useState('');

  const onLogin = () => {
    if (username.trim().length === 0) {
      setUsernameValidationText('사용자명을 입력해주세요.');
      return;
    }
    setUsernameValidationText('');
    if (password.trim().length === 0) {
      setPasswordValidationText('비밀번호를 입력해주세요.');
      return;
    }
    setPasswordValidationText('');
    axios
      .post('http://apis.zerobase-ite.site/login', {
        username,
        password,
      })
      .then((res) => {
        if (!res.data?.accessToken) {
          setLoginErrorText('오류가 발생했습니다. 관리자에게 문의해주세요.');
          console.error('토큰 없음');
          console.error(res);
          return;
        }
        window.localStorage.setItem('accessToken', res.data.accessToken);
        navigate('/');
      })
      .catch((error) => {
        if (error.response?.data?.message) {
          setLoginErrorText(error.response.data?.message);
        } else {
          setLoginErrorText('오류가 발생했습니다. 관리자에게 문의해주세요.');
          console.error(error);
        }
      });
  };
  return (
    <div className="flex items-center justify-center w-full mb-5 h-[80vh]">
      <div className="h-[450px] mr-8">
        <img
          className="h-full"
          alt=""
          src="src/assets/images/login-screenshot.png"
        />
      </div>
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
                error={usernameValidationText.length > 0}
                helperText={usernameValidationText}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                type="password"
                slotProps={textFieldProps}
                label="비밀번호"
                fullWidth
                margin="dense"
                error={passwordValidationText.length > 0}
                helperText={passwordValidationText}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button
              onClick={onLogin}
              variant="contained"
              size="large"
              fullWidth
            >
              로그인
            </Button>
            {loginErrorText.length > 0 && (
              <InputLabel className="mt-1">
                <div className="text-[#d32f2f] text-center text-sm">
                  <span>{loginErrorText}</span>
                </div>
              </InputLabel>
            )}
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
    </div>
  );
}

export default LoginView;
