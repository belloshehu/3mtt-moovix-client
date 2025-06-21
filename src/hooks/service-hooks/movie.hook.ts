import MovieserviceAPI from "@/services/movie.service";
import { useQuery } from "@tanstack/react-query";
import { useAxios } from "../use-axios";
import { GroupType } from "@/components/movie/MoviesGroup";

export const useGetMovies = ({
	group,
	page,
}: {
	group: GroupType;
	page: number;
}) => {
	const { publicTMDBRequest } = useAxios();
	return useQuery({
		queryFn: () => MovieserviceAPI.getMovies({ group, page }),
		queryKey: ["Movies", group, page],
		staleTime: 1000 * 60 * 60, // 5 minutes
	});
};
