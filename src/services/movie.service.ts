import { GroupType } from "@/components/movie/MoviesGroup";
import { MovieListResponse } from "@/types/movie.types";
import axios, { AxiosInstance } from "axios";

class MovieServiceAPI {
	static async getMovies({
		group,
		page = 1,
	}: {
		group: GroupType;
		page?: number;
	}) {
		const { data } = await axios.get<MovieListResponse>("/api/movies");
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
