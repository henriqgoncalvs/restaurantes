import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { RestaurantsList } from '@/components/restaurants-list';
import { getRestaurants } from '@/services/restaurants';
import useDebounce from '@/hooks/use-debounce';

import * as S from './home-view.style';
import { RestaurantsConsumer, RestaurantsProvider } from '@/contexts/restaurants-provider';

export const HomeView = () => {
  return (
    <RestaurantsProvider>
      <S.Layout>
        <S.Header>
          <S.HeaderContent>
            <S.Logo />
            <S.HeaderTextWrapper>
              <S.HeaderTitle>Descubra novos sabores</S.HeaderTitle>
              <S.HeaderSubtitle>Aqui eu converso com você sobre nossa proposta.</S.HeaderSubtitle>
            </S.HeaderTextWrapper>
          </S.HeaderContent>
        </S.Header>

        <S.Content>
          <RestaurantsConsumer>
            {(value) => (
              <S.Search
                placeholder="Encontre um restaurante"
                prefix={<S.SearchIcon />}
                onChange={(e) => {
                  if (e.target.value) {
                    value.setSearch(e.target.value);
                    value.setPage(1);
                  }
                }}
              />
            )}
          </RestaurantsConsumer>

          <RestaurantsList />
        </S.Content>
      </S.Layout>
    </RestaurantsProvider>
  );
};
