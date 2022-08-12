import { Layout as AntLayout, Space } from 'antd';
import Image from 'next/image';
import styled from 'styled-components';

import media from 'styled-media-query';

export const Layout = styled(AntLayout)`
  background: ${({ theme }) => theme.colors.white};
`;

export const Header = styled(AntLayout.Header)<{ imageurl: string }>`
  position: relative;

  min-height: max(13rem, 15vh);
  padding: 0 2rem;

  background: ${({ imageurl }) => `url(${imageurl}) no-repeat center center`};
  background-size: 100%;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
  }

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
  align-items: center;
  justify-content: center;

  ${media.lessThan('small')`
    flex-direction: column;
  `}
`;

export const BackButton = styled.a`
  width: 5rem;
  height: 2rem;

  position: absolute;
  top: 2rem;
  left: 0;

  color: ${({ theme }) => theme.colors.white};

  font-size: ${({ theme }) => theme.font.size.sm};
`;

export const RestaurantLogo = styled.div`
  width: 8rem;
  height: 8rem;

  margin-right: 2rem;

  border-radius: 100%;
  overflow: hidden;

  ${media.lessThan('small')`
    width: 5rem;
    height: 5rem;
    margin-right: 0rem;
    margin-bottom: 0.5rem;
  `}
`;

export const RestaurantInfo = styled(Space)`
  h1,
  p,
  a {
    margin: 0;
    color: ${({ theme }) => theme.colors.white};
  }

  h1 {
    line-height: 1.4rem;
  }

  p,
  a {
    font-size: 0.8rem;
  }

  line-height: 1rem;

  ${media.lessThan('small')`
    h1 {
      font-size: ${({ theme }) => theme.font.size.heading['3']}rem;
    }

    text-align: center;
  `}
`;

export const Content = styled(Layout.Content)`
  max-width: ${({ theme }) => theme.breakpoints.md};
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2rem;
  margin: 0 auto;

  ${({ theme }) => `
    border-top-left-radius: ${theme.rounded.lg};
    border-top-right-radius: ${theme.rounded.lg};
  `}
`;

export const InfoBoxContainer = styled(Space)`
  width: 100%;

  margin-bottom: 2rem;

  h3 {
    font-size: ${({ theme }) => theme.font.size.sm};
  }
`;

export const InfoBoxDescription = styled.p<{ size: 'md' | 'lg' }>`
  font-size: ${({ theme, size }) => theme.font.size.heading[`${size === 'md' ? '4' : '2'}`]}rem;
  margin: 0;
`;
