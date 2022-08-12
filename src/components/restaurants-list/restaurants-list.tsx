import Link from 'next/link';
import { Pagination, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { useQuery } from '@tanstack/react-query';
import { useRef } from 'react';

import { useRestaurantsContext } from '@/contexts/restaurants-provider';

import * as S from './restaurants-list.style';
import { getRestaurants, GetRestaurantsResponse } from '@/services/restaurants';

export const RestaurantsList = () => {
  const { search, page, setPage } = useRestaurantsContext();
  const headingRef = useRef<null | HTMLDivElement>(null);

  const { data: restaurantsData, isLoading } = useQuery<GetRestaurantsResponse>(
    ['restaurants', { search, page }],
    () => getRestaurants({ search, page }),
    { keepPreviousData: true },
  );

  return (
    <S.Wrapper>
      <S.HeadingWrapper ref={headingRef}>
        <S.Heading>Restaurantes</S.Heading>

        {search && (
          <S.SearchWrapper>
            <p>Resultados para</p>
            <p>{search}</p>
          </S.SearchWrapper>
        )}
      </S.HeadingWrapper>

      {isLoading ? (
        <span>
          Carregando...
          <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
        </span>
      ) : (
        <S.Space direction="vertical" size="middle">
          {restaurantsData?.data.map((restaurant) => (
            <Link href={`/restaurante/${restaurant.id}`} passHref key={restaurant.id}>
              <a>
                <S.RestaurantCard size="small" imageurl={restaurant.image}>
                  <p>{restaurant.name}</p>
                </S.RestaurantCard>
              </a>
            </Link>
          ))}
        </S.Space>
      )}

      {restaurantsData && (
        <Pagination
          defaultCurrent={1}
          // Está sempre retornando 30, por isso está limitando a paginação e no search mostrando 3 páginas
          total={restaurantsData?.pagination?.total}
          pageSize={restaurantsData?.pagination?.per_page}
          current={page}
          onChange={(page) => {
            if (headingRef?.current) {
              headingRef.current.scrollIntoView({ behavior: 'smooth' });
            }

            setPage(page);
          }}
          style={{ marginTop: '2rem' }}
        />
      )}
    </S.Wrapper>
  );
};
