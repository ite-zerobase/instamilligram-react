import React from 'react';
import {
  HomeOutlined,
  HeartOutlined,
  UserOutlined,
  SearchOutlined,
  PlusSquareOutlined,
  ExperimentOutlined,
} from '@ant-design/icons';

const iconProps = { style: { fontSize: 24 } };
const itemStyle = { margin: '16px auto', padding: '0 12px' };
const navItems = [
  {
    key: '1',
    icon: React.createElement(HomeOutlined, iconProps),
    label: '홈',
    path: '/',
    style: itemStyle,
  },
  {
    key: '2',
    icon: React.createElement(SearchOutlined, iconProps),
    label: '검색',
    path: '/search',
    style: itemStyle,
  },
  {
    key: '3',
    icon: React.createElement(HeartOutlined, iconProps),
    label: '알림',
    path: '/notification',
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
  {
    key: '6',
    icon: React.createElement(ExperimentOutlined, iconProps),
    label: '포스트(개발용)',
    path: '/p/C5NoFttuCm_',
    style: itemStyle,
  },
  {
    key: '7',
    icon: React.createElement(ExperimentOutlined, iconProps),
    label: '댓글(개발용)',
    path: '/comments',
    style: itemStyle,
  },
  {
    key: '8',
    icon: React.createElement(ExperimentOutlined, iconProps),
    label: '로그인(개발용)',
    path: '/login',
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
const menuStyle = {
  fontSize: 16,
  marginTop: 12,
  padding: '0 12px',
};
const footerStyle = {
  textAlign: 'center',
  fontSize: 12,
  color: '#848484',
  margin: '12px 0',
  background: '#ffffff',
};

export {
  iconProps,
  itemStyle,
  navItems,
  siderStyle,
  contentStyle,
  menuStyle,
  footerStyle,
};
