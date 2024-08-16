// src/slices/apiSlices.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants";

// Configure the base query with the base URL
const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

// Create the API slice
export const apiSlice = createApi({
  reducerPath: "api", // Key for the API reducer in the Redux store
  baseQuery, // Base query function for making API requests
  tagTypes: ["Product", "Order", "User"], // Define tag types for cache invalidation
  endpoints: (builder) => ({}), // Placeholder for defining endpoints
});

export default apiSlice;
