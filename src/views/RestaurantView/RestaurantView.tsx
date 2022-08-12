import { Restaurant } from '@/types/restaurant';
import { Divider } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import * as S from './RestaurantView.style';

type InfoBoxP = {
  title: string;
  description: string;
  size?: 'md' | 'lg';
};

const InfoBox = ({ title, description, size = 'md' }: InfoBoxP) => {
  return (
    <S.InfoBoxContainer direction="vertical">
      <h3>{title}</h3>
      <S.InfoBoxDescription size={size}>{description}</S.InfoBoxDescription>
    </S.InfoBoxContainer>
  );
};

export const RestaurantView = ({ restaurant }: { restaurant: Restaurant }) => {
  return (
    <S.Layout>
      <S.Header imageUrl={restaurant.image}>
        <S.HeaderContent>
          <Link href="/" passHref>
            <S.BackButton>Voltar</S.BackButton>
          </Link>

          <S.RestaurantLogo>
            <Image
              src={restaurant.logo}
              alt={`Logo do ${restaurant.name}`}
              width={500}
              height={500}
              objectFit="fill"
            />
          </S.RestaurantLogo>
          <S.RestaurantInfo direction="vertical" size="middle">
            <h1>{restaurant.name}</h1>
            <p>{restaurant.telephone}</p>
            <a href={restaurant.website} rel="noreferrer">
              {restaurant.website}
            </a>
          </S.RestaurantInfo>
        </S.HeaderContent>
      </S.Header>

      <S.Content>
        <InfoBox size="lg" title="Descrição" description={restaurant.description} />
        <InfoBox title="Faixa de preço" description={restaurant.price_range} />

        <Divider style={{ margin: '0 auto 2.4rem' }} />

        <InfoBox title="Horários de Funcionamento" description={restaurant.opening_hours} />

        <InfoBox title="Formas de pagamento" description={restaurant.payment_methods} />
      </S.Content>
    </S.Layout>
  );
};
