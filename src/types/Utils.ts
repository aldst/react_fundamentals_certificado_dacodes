import { AxiosRequestConfig } from "axios";

export const API_URL = "https://api.themoviedb.org/3";
export const CONFIG: AxiosRequestConfig = {
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWRhYzU2MTE2MTE0Y2NmYjJkYjMxZGE2OGViZDMwNSIsInN1YiI6IjYxYjZiZWU0ZjkxODNhMDA2MTMyZGRkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p1JVxCvC6ZgX38UjfGpxZit1-Mag6jTD0oi8UgZ2BvQ",
  },
};

export const moviesPerPage = 20;

export const convertMinutesToHoursAndMinutes = (totalMinutes: number) => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return { hours, minutes };
};
