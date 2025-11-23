/**
 * Shared TypeScript types for the entire application.
 */

// Represents a user after authentication
export interface User {
  id: string;
  name: string;
  email: string;
  universityId: string;
}

// The response from a successful authentication API call
export interface AuthResponse {
  token: string;
  user: User;
}

// A generic API error response
export interface ApiError {
  message: string;
}

// Represents a single item on the menu
export interface MenuItem {
  id: string; 
  title: string;
  price: number;
  image: string;
  category: 'north_indian' | 'chinese' | 'ice_cream' | 'beverages' | 'other';
}

// Represents an item that has been added to the cart
export interface CartItem extends MenuItem {
  quantity: number;
}

export interface OrderItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  images?: string;
}

export interface Order {
  id: string;
  totalPrice: number;
  status: "PENDING" | "CANCELLED" | "COMPLETED";
  createdAt: string;
  items: OrderItem[];
}