import { GroupType } from "@/components/movie/MoviesGroup";
import { MovieListResponse } from "@/types/movie.types";
import axios, { AxiosInstance } from "axios";

class MovieServiceAPI {
	static async getMovies({
		publicTMDBRequest,
		group,
		page = 1,
	}: {
		publicTMDBRequest: AxiosInstance;
		group: GroupType;
		page?: number;
	}) {
		const api_key = process.env.TBDM_API_KEY;
		const { data } = await axios.get<MovieListResponse>("/api/movies");
		console.log(data);
		return data.data;
	}
	static async getMovieById({
		protectedRequest,
		id,
	}: {
		protectedRequest: AxiosInstance;
		id: string;
	}) {
		const { data } = await protectedRequest.get(`/movies/${id}`);
		return data.data;
	}
}

export default MovieServiceAPI;
