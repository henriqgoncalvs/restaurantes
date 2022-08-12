import Link from 'next/link';
import * as S from './RestaurantsList.style';

export const RestaurantsList = () => {
  return (
    <S.Wrapper>
      <S.Heading>Restaurantes</S.Heading>

      <S.Space direction="vertical" size="middle">
        <Link href="/" passHref>
          <a>
            <S.RestaurantCard size="small">
              <p>Restaurante 1</p>
            </S.RestaurantCard>
          </a>
        </Link>
        <S.RestaurantCard size="small">
          <p>Restaurante 2</p>
        </S.RestaurantCard>
        <S.RestaurantCard size="small">
          <p>Restaurante 3</p>
        </S.RestaurantCard>
      </S.Space>
    </S.Wrapper>
  );
};
