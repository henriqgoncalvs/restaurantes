import axios from '@/lib/axios';
import { Restaurant } from '@/types/restaurant';

type GetRestaurantsParams = {
  page: number;
  search?: string;
  limit?: number;
};

export type GetRestaurantsResponse = {
  success: boolean;
  pagination: {
    total: number;
    per_page: number;
  };
  data: Restaurant[];
};

export const getRestaurants = async ({
  limit = 10,
  ...params
}: GetRestaurantsParams): Promise<GetRestaurantsResponse> => {
  const response = await axios.get('/restaurants', {
    params: { ...params, limit },
  });
  return response.data;
};

type GetRestaurantParams = {
  id: string;
};

export type GetRestaurantResponse = {
  success: boolean;
  data: Restaurant[];
};

export const getRestaurant = async ({
  id,
}: GetRestaurantParams): Promise<GetRestaurantResponse> => {
  const response = await axios.get(`/restaurants/${id}`);
  return response.data;
};
