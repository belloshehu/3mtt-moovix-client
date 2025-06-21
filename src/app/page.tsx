import Hero from "@/components/landing/Hero";
import MovieGroup from "@/components/movie/MoviesGroup";

export default function Home() {
	return (
		<main className="relative flex flex-col items-start justify-start  gap-40 py-72 pb-20 md:gap-0 w-full md:p-0 text-center">
			<Hero />
			<MovieGroup groupTitle="trending" />
			<MovieGroup groupTitle="popular" />
		</main>
	);
}
