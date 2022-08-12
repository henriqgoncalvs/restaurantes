import { RestaurantsList } from '@/components/RestaurantsList';

import * as S from './HomeView.style';

export const HomeView = () => {
  return (
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
        <S.Search placeholder="Encontre um restaurante" prefix={<S.SearchIcon />} />

        <RestaurantsList />
      </S.Content>
    </S.Layout>
  );
};
