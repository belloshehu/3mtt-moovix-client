"use client";

import InvalidDataMessage from "@/components/InvalidDataMessage";
import Loader from "@/components/Loader";
import MovieList from "@/components/movie/MovieList";
import { Button } from "@/components/ui/button";
import { useGetWatchlist } from "@/hooks/service-hooks/watchlist.hook";

import { Heart } from "lucide-react";

export default function WatclistPage() {
	const { data, isLoading } = useGetWatchlist();
	return (
		<div className="relative flex flex-col items-start justify-start gap-10 w-full md:p-0 text-center">
			<header className="p-2 rounded-md shadow-2xl bg-white/30 border-2 w-full h-[100px] gap-2 flex items-center justify-center">
				<Heart size={30} />
				<h1 className="text-3xl font-bold">Watchlist</h1>
			</header>
			<Button>Clear watchlist</Button>

			<div className="w-full flex flex-col items-start justify-start gap-5">
				{isLoading ? (
					<Loader className="w-full" />
				) : data && data?.movies?.length > 0 ? (
					<MovieList movies={data.movies} />
				) : (
					<InvalidDataMessage className="mx-auto w-fit bg-white/0" />
				)}
				{/* <ScrollArea className="w-full h-[200px] p-2 rounded-md border-[1px] ">
					<div>
						<p className="text-gray-500">No favorites added yet.</p>
					</div>
				</ScrollArea> */}
			</div>
		</div>
	);
}
