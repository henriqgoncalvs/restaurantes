import { Space as AntSpace, Card } from 'antd';
import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};

  width: 100%;
  height: 100%;
`;

export const Heading = styled.h3`
  font-size: ${({ theme }) => theme.font.size.lead};

  margin-bottom: 2rem;
`;

export const Space = styled(AntSpace)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

export const RestaurantCard = styled(Card)`
  position: relative;
  overflow: hidden;

  border-radius: ${({ theme }) => theme.rounded.md};
  padding: 1rem;

  min-height: 150px;

  background: blue;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }

  p {
    position: absolute;
    bottom: 0.5rem;
    left: 1.5rem;

    line-height: ${({ theme }) => theme.font.size.sm};

    font-size: ${({ theme }) => theme.font.size.sm};
    font-weight: bold;

    color: ${({ theme }) => theme.colors.white};
  }
`;
