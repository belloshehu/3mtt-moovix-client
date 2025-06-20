export default function PopularMovies() {
	return (
		<section className="w-full flex flex-col items-center justify-center gap-5 p-5">
			<h2 className="text-2xl font-semibold">Popular Movies</h2>
			<p className="text-gray-500">
				Check out the most popular movies right now!
			</p>
			<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full">
				{/* Movie cards will go here */}
			</div>
		</section>
	);
}
