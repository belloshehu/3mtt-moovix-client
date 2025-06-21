"use client";
import { alfa_Slab_One } from "@/app/fonts";
import MovieList from "./MovieList";
import { useGetMovies } from "@/hooks/service-hooks/movie.hook";

export type GroupType =
	| "popular"
	| "top-rate"
	| "upcoming"
	| "now-playing"
	| "trending";
interface MovieGroupProps {
	// Define any props that MovieGroup component might need
	groupTitle: GroupType;
	groupDescription?: string;
}
export default function MovieGroup({
	groupDescription,
	groupTitle,
}: MovieGroupProps) {
	const { data, isLoading } = useGetMovies({ group: groupTitle, page: 1 });

	return (
		<section className="w-full flex flex-col items-start justify-start gap-5 p-5 md:p-10">
			<h2
				className={`${alfa_Slab_One.className} text-2xl font-semibold capitalize border-b-4 border-[#ADF802] pb-2 mb-2 text-[#ADF802]`}
			>
				{groupTitle} ({data?.results?.length || 0})
			</h2>
			<p className="text-gray-500">{groupDescription}</p>
			{/* Placeholder for movie cards */}
			{isLoading ? (
				<p className="text-gray-500">Loading movies...</p>
			) : !data || data?.results?.length === 0 ? (
				<p className="text-gray-500">
					No popular movies available at the moment.
				</p>
			) : (
				<MovieList movies={data?.results!} />
			)}
		</section>
	);
}
