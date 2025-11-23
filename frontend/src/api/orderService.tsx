/** @format */

import axios, {isAxiosError} from "axios";
import {API_BASE_URL} from "../constants";
import {ApiError, Order} from "../types";

export const orderService = {
  getOrders: async (token: string) => {
    try {
      const response = await axios.get<Order[]>(`${API_BASE_URL}/order`, {
        headers: {Authorization: `Bearer ${token}`},
      });

      return response.data;
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        const apiError = error.response.data as ApiError;
        throw new Error(apiError.message || "Failed to fetch orders");
      }
      throw new Error("An unknown error occurred");
    }
  },
  placeOrder: async (token: string) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/order/place-order`,
        {},
        {
          headers: {Authorization: `Bearer ${token}`},
        }
      );

      return response.data;
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        const apiError = error.response.data as ApiError;
        throw new Error(apiError.message || "failed to fetch cart");
      }
      throw new Error("an unknown error occurred");
    }
  },
};
