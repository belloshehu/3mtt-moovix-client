import MovieserviceAPI from "@/services/movie.service";
import { useQuery } from "@tanstack/react-query";

export const useGetMovies = ({ page }: { page: number }) => {
	return useQuery({
		queryFn: () => MovieserviceAPI.getMovies({ page }),
		queryKey: ["Movies", page],
		staleTime: 1000 * 60 * 60, // 5 minutes
	});
};

export const useGetPopularMovies = ({ page }: { page: number }) => {
	return useQuery({
		queryFn: () => MovieserviceAPI.getPopularMovies({ page }),
		queryKey: ["Movies", "popular", page],
		staleTime: 1000 * 60 * 60, // 5 minutes
	});
};

export const useSearchMovies = ({
	page,
	query,
}: {
	page: number;
	query: string;
}) => {
	return useQuery({
		queryFn: () =>
			MovieserviceAPI.searchMovies({ page, query, sort_by: "popularity" }),
		queryKey: ["Movies", query, page],
	});
};
