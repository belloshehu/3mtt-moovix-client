"use client";

import Hero from "@/components/landing/Hero";
import MovieGroup from "@/components/movie/MoviesGroup";
import {
	useGetMovies,
	useGetPopularMovies,
} from "@/hooks/service-hooks/movie.hook";

export default function Home() {
	const { data, isLoading } = useGetMovies({ page: 1 });
	const { data: popularMovies, isLoading: loading } = useGetPopularMovies({
		page: 1,
	});
	return (
		<main className="relative flex flex-col items-start justify-start gap-5 w-full md:p-0 text-center">
			<Hero />
			<MovieGroup groupTitle="trending" data={data} isLoading={isLoading} />
			<MovieGroup
				groupTitle="popular"
				data={popularMovies}
				isLoading={loading}
			/>
		</main>
	);
}
