import axios, { AxiosResponse } from "axios";
import { Movies } from "../types/Movie";
import { API_URL, CONFIG } from "../types/Utils";
import { MovieDetail } from "../types/MovieDetail";

export const getMovies = async (
  term: string,
  page: number
): Promise<Movies> => {
  try {
    const response: AxiosResponse<Movies> = await axios.get<Movies>(
      `${API_URL}/movie/${term}?language=es-PE&page=${page}`,
      CONFIG
    );
    return response.data;
  } catch (error) {
    throw new Error("Error al obtener la lista de películas");
  }
};

export const getMovieDetail = async (movieId: number): Promise<MovieDetail> => {
  try {
    const response: AxiosResponse<MovieDetail> = await axios.get<MovieDetail>(
      `${API_URL}/movie/${movieId}?language=es-PE`,
      CONFIG
    );
    return response.data;
  } catch (error) {
    throw new Error("Error al obtener el detalle de la película");
  }
};
