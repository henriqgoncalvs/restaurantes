import { getRestaurant, getRestaurants } from '@/services/restaurants';
import { Restaurant } from '@/types/restaurant';
import { RestaurantView } from '@/views/restaurant-view';
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
} from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';

const RestaurantPage = ({ restaurant }: { restaurant: Restaurant }) => {
  return (
    <>
      <Head>
        <title>{restaurant.name} - Restaurantes</title>
      </Head>

      <RestaurantView restaurant={restaurant} />
    </>
  );
};

export default RestaurantPage;

interface IParams extends ParsedUrlQuery {
  id: string;
}

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const { id } = ctx.params as IParams;

  try {
    const restaurantResponse = await getRestaurant({ id });

    const restaurant = restaurantResponse.data;

    return {
      props: {
        restaurant,
      },
    };
  } catch {
    return { notFound: true };
  }
};
