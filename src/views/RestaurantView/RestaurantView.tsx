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

export const RestaurantView = () => {
  return (
    <S.Layout>
      <S.Header imageUrl="https://loremflickr.com/640/480/cuisine">
        <S.HeaderContent>
          <Link href="/" passHref>
            <S.BackButton>Voltar</S.BackButton>
          </Link>

          <S.RestaurantLogo>
            <Image
              src="https://loremflickr.com/500/500/logo"
              alt="Restaurante"
              width={500}
              height={500}
              objectFit="fill"
            />
          </S.RestaurantLogo>
          <S.RestaurantInfo direction="vertical" size="middle">
            <h1>Restaurante 1</h1>
            <p>(11) 3210-9876</p>
            <p>http://www.mammamia.com.br</p>
          </S.RestaurantInfo>
        </S.HeaderContent>
      </S.Header>

      <S.Content>
        <InfoBox
          size="lg"
          title="Descrição"
          description="O Mamma Mia é um restaurante especializado em culinária italiana e vinhos."
        />
        <InfoBox title="Faixa de preço" description="De R$40 a R$70 por pessoa" />

        <Divider style={{ margin: '0 auto 2.4rem' }} />

        <InfoBox
          title="Horários de Funcionamento"
          description="De terça à domingo, das 17:00 ãs 23:00."
        />

        <InfoBox title="Formas de pagamento" description="Dinheiro, cartão de crédito e débito." />
      </S.Content>
    </S.Layout>
  );
};
