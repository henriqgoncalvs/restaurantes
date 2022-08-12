import { getRestaurant, getRestaurants } from '@/services/restaurants';
import { Restaurant } from '@/types/restaurant';
import { RestaurantView } from '@/views/restaurant-view';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
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

export const getStaticPaths: GetStaticPaths = async () => {
  const restaurantsResponse = await getRestaurants({ page: 1, limit: -1 });

  const paths = restaurantsResponse.data.map((restaurant) => ({
    params: {
      id: restaurant.id,
    },
  }));

  return { paths, fallback: false };
};

interface IParams extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps = async (ctx: GetStaticPropsContext) => {
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
