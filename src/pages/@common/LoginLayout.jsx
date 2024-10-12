import { Layout } from 'antd';
const { Content, Footer } = Layout;
import { Outlet } from 'react-router-dom';

const footerMenu = [
  'Zerobase',
  '소개',
  '블로그',
  '채용',
  '정보',
  '도움말',
  'API',
  '개인정보처리방침',
  '약관',
  '위치',
  '연락처',
  '업로드',
  'Zerobase Verified',
];

const footerStyle = {
  textAlign: 'center',
  fontSize: 12,
  color: '#848484',
  margin: '12px 0',
  background: '#ffffff',
  width: '100%',
};
function LoginLayout() {
  return (
    <Layout
      style={{
        background: '#ffffff',
      }}
    >
      <Content>
        <Outlet />
      </Content>
      <Footer style={footerStyle}>
        <div
          style={{
            display: 'flex',
            gap: '8px',
            justifyContent: 'center',
            whiteSpace: 'nowrap',
          }}
        >
          {footerMenu.map((m) => (
            <span key={m}>{m}</span>
          ))}
        </div>
        <div>© 2024 Instamilligram from Zerobase</div>
      </Footer>
    </Layout>
  );
}

export default LoginLayout;
