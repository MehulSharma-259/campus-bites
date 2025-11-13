/**
 * Handles all API calls related to fetching menu items.
 */
import axios, { isAxiosError } from "axios";
import { API_BASE_URL } from "../constants";
import { MenuItem, ApiError } from "../types";

export const menuService = {
  /**
   * Fetches the full list of menu items from the backend.
   */
  getMenuItems: async (): Promise<MenuItem[]> => {
    // In a real app, you'd fetch from your backend.
    // We'll return mock data for now, matching your Home.tsx structure.
    console.log("Fetching menu items...");
    try {
      const response = await axios.get<MenuItem[]>(`${API_BASE_URL}/content`);
      console.log(response.data)
      return response.data;
    } catch (error) {
      if(isAxiosError(error) && error.response) {
        const apiError = error.response.data as ApiError;
        throw new Error(apiError.message || "Failed to get items")
      }
      throw new Error("an unknown error occurred")
    }

    // --- Mock Data ---
    // Using the images you already imported in Home.tsx
    // const mockData: MenuItem[] = [
    //   { id: "1", title: "Chola Bhatoora", price: 35, image: "/src/assets/foods/north indian.png", category: "north_indian" },
    //   { id: "2", title: "Paneer Butter Masala", price: 120, image: "/src/assets/foods/north indian.png", category: "north_indian" },
    //   { id: "3", title: "Noodles", price: 50, image: "/src/assets/foods/chineseFood.png", category: "chinese" },
    //   { id: "4", title: "Manchurian", price: 70, image: "/src/assets/foods/chineseFood.png", category: "chinese" },
    //   { id: "5", title: "Chocolate Scoop", price: 40, image: "/src/assets/foods/ice cream.png", category: "ice_cream" },
    //   { id: "6", title: "Oreo Ice Cream", price: 60, image: "/src/assets/foods/dark-ice-cream.png", category: "ice_cream" },
    //   { id: "7", title: "Chocolate Shake", price: 50, image: "/src/assets/foods/beverages.png", category: "beverages" },
    //   { id: "8", title: "Samosa", price: 15, image: "/src/assets/foods/north indian.png", category: "other" },
    // ];

    // return Promise.resolve(mockData);
    // --- End Mock Data ---
  },
};