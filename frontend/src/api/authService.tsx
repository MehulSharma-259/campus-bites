/**
 * Handles all API calls related to user authentication (signin, signup).
 *
 * @format
 */

import axios, {isAxiosError} from "axios";
import {API_BASE_URL} from "../constants";
import {AuthResponse, ApiError} from "../types";

type SignInCredentials = {
  universityId: string;
  password: string;
};

type SignUpData = {
  name: string;
  email: string;
  universityId: string;
  password: string;
};

export const authService = {
  /**
   * Attempts to sign in a user.
   * Throws an error with the backend message on failure.
   */
  signIn: async (credentials: SignInCredentials): Promise<AuthResponse> => {
    try {
      const response = await axios.post<AuthResponse>(
        `${API_BASE_URL}/auth/signin`,
        credentials
      );
      return response.data;
    } catch (error: any) {
      if (isAxiosError(error) && error.response?.data) {
        const ApiError = error.response.data as ApiError;
        throw new Error(ApiError.message || "failed to sign in");
      }
      throw new Error("an unknown error occurred during signin");
    }
  },

  /**
   * Attempts to sign up a new user.
   */
  signUp: async (userData: SignUpData): Promise<AuthResponse> => {
    try {
      const response = await axios.post<AuthResponse>(
        `${API_BASE_URL}/auth/signup`,
        userData
      );
      return response.data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
          const apiError = error.response.data as ApiError;
          throw new Error(apiError.message || "Failed to sign up");
        }
        throw new Error("An unknown error occurred during sign up");
    }
  }
};
