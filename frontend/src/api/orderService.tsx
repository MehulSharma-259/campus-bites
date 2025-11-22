import axios, { isAxiosError } from "axios"
import { API_BASE_URL } from "../constants"
import { ApiError } from "../types";

export const orderService = {
  placeOrder: async (token: string) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/order/place-order`, 
        {},
        {
          headers: {Authorization: `Bearer ${token}`}
        }
      )

      return response.data;
    } catch(error) {
      if(isAxiosError(error) && error.response) {
        const apiError = error.response.data as ApiError
        throw new Error(apiError.message || "failed to fetch cart");
      }
      throw new Error("an unknown error occurred")
    }
  }
}