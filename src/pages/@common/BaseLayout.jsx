import React from 'react';
import {
  HomeOutlined,
  HeartOutlined,
  UserOutlined,
  SearchOutlined,
  PlusSquareOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
const { Content, Footer, Sider } = Layout;
import './BaseLayout.css';
import { useNavigate } from 'react-router-dom';
const iconProps = { style: { fontSize: 24 } };

const itemStyle = { margin: '16px auto', padding: '0 12px' };
const navItems = [
  {
    key: '1',
    icon: React.createElement(HomeOutlined, iconProps),
    label: '홈',
    path: '',
    style: itemStyle,
  },
  {
    key: '2',
    icon: React.createElement(SearchOutlined, iconProps),
    label: '검색',
    path: null,
    style: itemStyle,
  },
  {
    key: '3',
    icon: React.createElement(HeartOutlined, iconProps),
    label: '알림',
    path: null,
    style: itemStyle,
  },
  {
    key: '4',
    icon: React.createElement(PlusSquareOutlined, iconProps),
    label: '만들기',
    path: null,
    style: itemStyle,
  },
  {
    key: '5',
    icon: React.createElement(UserOutlined, iconProps),
    label: '프로필',
    path: '/danielchoi1115',
    style: itemStyle,
  },
];
const siderStyle = {
  background: '#ffffff',
  overflow: 'auto',
  height: '100vh',
  position: 'fixed',
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: 'thin',
  scrollbarColor: 'unset',
};
const contentStyle = {
  padding: 24,
  textAlign: 'center',
  background: '#ffffff',
};
function BaseLayout(props) {
  const navigate = useNavigate();

  const handleMenuClick = ({ key }) => {
    const item = navItems.find((it) => it.key === key);
    if (item.path == null) {
      return;
    }
    navigate(item.path);
  };

  return (
    <Layout hasSider>
      <Sider width={204} style={siderStyle}>
        <div className="sider-logo"></div>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          items={navItems}
          onClick={handleMenuClick}
          itemIcon
          style={{
            fontSize: 16,
            marginTop: 12,
            padding: '0 12px',
          }}
        />
      </Sider>
      <Layout style={{ marginInlineStart: 200 }}>
        <Content>
          <div style={contentStyle}>{props.children}</div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
            fontSize: 12,
            color: '#848484',
            margin: '12px 0',
          }}
        >
          <div>
            Zerobase 소개 블로그 채용 정보 도움말 API 개인정보처리방침 약관 위치
            연락처 업로드 & 비사용자 Zerobase Verified
          </div>
          <div>© 2024 Instamilligram from Zerobase</div>
        </Footer>
      </Layout>
    </Layout>
  );
}

export default BaseLayout;
