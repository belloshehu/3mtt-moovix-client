import { MovieType } from "@/types/movie.types";
import Movie from "../movie/Movie";
import { alfa_Slab_One } from "@/app/fonts";

export default function PopularMovies() {
	const movies: MovieType[] = [];
	return (
		<section className="w-full flex flex-col items-center justify-center gap-5 p-5">
			<h2 className={`${alfa_Slab_One.className} text-2xl font-semibold`}>
				Popular Movies
			</h2>
			<p className="text-gray-500">
				Check out the most popular movies right now!
			</p>
			{/* Placeholder for movie cards */}
			{movies && movies.length === 0 ? (
				<p className="text-gray-500">
					No popular movies available at the moment.
				</p>
			) : (
				<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full">
					{/* Movie cards will go here */}
					{movies.map((movie) => (
						<Movie key={movie.id} {...movie} />
					))}
				</div>
			)}
		</section>
	);
}
