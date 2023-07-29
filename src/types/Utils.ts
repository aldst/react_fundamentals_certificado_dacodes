import { AxiosRequestConfig } from "axios";
import { Genre } from "./MovieDetail";

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

export const getYear = (fechaString: Date): string => {
  const fecha = new Date(fechaString);
  const year = fecha.getFullYear();
  return year.toString();
};

export const getGenresName = (genres: Genre[]): string => {
  const valores = genres.map((genre: { name: string }) => genre.name);
  return valores.join("/");
};

export const getMovieDuration = (minutes: number): string => {
  const horas: number = Math.floor(minutes / 60);
  const minutosRestantes: number = minutes % 60;

  if (horas > 0) return `${horas}h ${minutosRestantes}m`;
  return `${minutosRestantes}m`;
};

export const getRatedValue = (average: number): number => {
  const ratedValue: number = average / 2;
  return ratedValue;
};
