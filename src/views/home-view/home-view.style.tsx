import { Layout as AntLayout, Input as AntInput } from 'antd';
import { SearchOutlined as AntSearchOutlined } from '@ant-design/icons';
import LogoSvg from '~/svg/logo.svg';
import styled from 'styled-components';
import media from 'styled-media-query';

export const Layout = styled(AntLayout)`
  background: ${({ theme }) => theme.colors.white};
`;

export const Header = styled(AntLayout.Header)`
  min-height: max(18rem, 20vh);
  padding: 0 2rem;

  background: url('/images/start-header.webp') repeat-x center 85%;
  background-size: 50% auto;

  ${media.lessThan('medium')`
    background-size: 100%;
  `}

  ${media.lessThan('small')`
    background-size: 120%;
    background-position: center bottom;
  `}
`;

export const HeaderContent = styled.div`
  position: relative;

  max-width: ${({ theme }) => theme.breakpoints.xl};
  width: 100%;
  height: 100%;
  margin: 0 auto;

  padding: 1rem;

  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const Logo = styled(LogoSvg)`
  width: 5rem;
  height: 2rem;

  position: absolute;
  top: 2rem;
  left: 0;

  ${media.lessThan('medium')`
    display: none;
  `}
`;

export const Search = styled(AntInput)`
  width: min(100%, 30rem);

  border-radius: ${({ theme }) => theme.rounded.sm};
  padding: 0.7rem 1.2rem;

  margin-bottom: 4rem;

  ${media.lessThan('small')`
    margin-bottom: 2rem;
  `}

  .ant-input-prefix span svg {
    width: 1.3rem;
    height: auto;
  }

  input {
    padding: 0 0 0 0.3rem !important;
    border: none !important;
  }
`;

export const SearchIcon = styled(AntSearchOutlined)`
  color: ${({ theme }) => theme.colors.primary};
`;

export const HeaderTextWrapper = styled.div`
  position: absolute;
  top: 2rem;
  right: 0;

  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  text-align: right;

  ${media.lessThan('medium')`
    align-items: flex-start;
    text-align: left;
    right: initial;
    left: 0;
  `}
`;

export const HeaderTitle = styled.h1`
  margin: 0;

  ${media.lessThan('medium')`
    line-height: ${({ theme }) => theme.font.size.heading['1'] / 1.4};
  `}
`;

export const HeaderSubtitle = styled.h2`
  font-size: ${({ theme }) => theme.font.size.p};
  font-weight: normal;
  line-height: 1.2rem;

  width: 70%;

  ${media.lessThan('small')`
    width: 85%;
  `}
`;

export const Content = styled(Layout.Content)`
  max-width: ${({ theme }) => theme.breakpoints.md};
  width: 100%;
  min-height: 80vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2rem;
  margin: -7rem auto 0;

  ${({ theme }) => `
    border-top-left-radius: ${theme.rounded.lg};
    border-top-right-radius: ${theme.rounded.lg};
  `}

  ${media.lessThan('small')`
    background: ${({ theme }) => theme.colors.white};
    margin-top: -5rem;
  `}
`;
