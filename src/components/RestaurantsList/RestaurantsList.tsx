import Link from 'next/link';
import * as S from './RestaurantsList.style';

export const RestaurantsList = ({ query }: { query?: string }) => {
  return (
    <S.Wrapper>
      <S.HeadingWrapper>
        <S.Heading>Restaurantes</S.Heading>

        {query && (
          <S.QueryWrapper>
            <p>Resultados para</p>
            <p>{query}</p>
          </S.QueryWrapper>
        )}
      </S.HeadingWrapper>

      <S.Space direction="vertical" size="middle">
        <Link href="/restaurante/1" passHref>
          <a>
            <S.RestaurantCard size="small" imageUrl="https://loremflickr.com/640/480/cuisine">
              <p>Restaurante 1</p>
            </S.RestaurantCard>
          </a>
        </Link>
        <S.RestaurantCard size="small" imageUrl="https://loremflickr.com/640/480/cuisine">
          <p>Restaurante 2</p>
        </S.RestaurantCard>
        <S.RestaurantCard size="small" imageUrl="https://loremflickr.com/640/480/cuisine">
          <p>Restaurante 3</p>
        </S.RestaurantCard>
      </S.Space>
    </S.Wrapper>
  );
};
