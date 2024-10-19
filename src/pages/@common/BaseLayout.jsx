import { useState } from 'react';
import { Layout, Menu, Modal } from 'antd';
const { Content, Footer, Sider } = Layout;
import styles from './BaseLayout.module.css';
import { Outlet, useNavigate } from 'react-router-dom';
import {
  navItems,
  siderStyle,
  contentStyle,
  menuStyle,
  footerStyle,
} from './data/BaseLayoutData';
import CreatePostModal from './components/CreatePostModal';

function BaseLayout() {
  const navigate = useNavigate();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  function openCreatePost() {
    setIsCreateModalOpen(true);
  }
  function closeCreatePost() {
    setIsCreateModalOpen(false);
  }

  const handleMenuClick = ({ key }) => {
    const item = navItems.find((it) => it.key === key);
    if (item.path) {
      navigate(item.path);
    }
    if (item.label === '만들기') {
      openCreatePost();
    }
  };

  return (
    <Layout hasSider>
      <Sider className="z-50" width={204} style={siderStyle}>
        <div className={styles['sider-logo']}></div>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          items={navItems}
          onClick={handleMenuClick}
          itemIcon
          style={menuStyle}
        />
      </Sider>
      <Layout style={{ marginInlineStart: 200 }}>
        <Content>
          <div style={contentStyle}>
            <Outlet />
          </div>
        </Content>
        <Footer style={footerStyle}>
          <div>
            Zerobase 소개 블로그 채용 정보 도움말 API 개인정보처리방침 약관 위치
            연락처 업로드 & 비사용자 Zerobase Verified
          </div>
          <div>© 2024 Instamilligram from Zerobase</div>
        </Footer>
      </Layout>
      <CreatePostModal open={isCreateModalOpen} onCancel={closeCreatePost} />
    </Layout>
  );
}

export default BaseLayout;
