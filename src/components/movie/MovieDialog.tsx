import { Heart, HeartOff, List, MoreHorizontal, Star } from "lucide-react";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { MovieType } from "@/types/movie.types";
import {
	useAddToWatchlist,
	useGetWatchlist,
	useRemoveFromWatchlist,
} from "@/hooks/service-hooks/watchlist.hook";
import { useAxios } from "@/hooks/use-axios";
import Loader from "../Loader";
import { useCallback } from "react";

export default function MovieDialog({ movieData }: { movieData: MovieType }) {
	const { mutateAsync: add, isPending: addPending } = useAddToWatchlist();
	const { mutateAsync: remove, isPending: removedPending } =
		useRemoveFromWatchlist();
	const { data: watchlist, isLoading } = useGetWatchlist();
	const { protectedRequest } = useAxios();

	const handleAddToWatchlist = async () => {
		await add({
			payload: movieData,
			protectedRequest,
		});
	};

	const handleRemoveFromWatchlist = async () => {
		await remove({
			movieId: movieData.id,
			protectedRequest,
		});
	};

	const isMovieInWatchlist = useCallback(() => {
		if (!watchlist || !watchlist.movies) return false;
		return watchlist.movies.some((movie) => movie.id === movieData.id);
	}, [watchlist, movieData.id]);

	return (
		<Dialog>
			<DialogTrigger className="absolute top-2 right-2 z-10">
				<MoreHorizontal
					size={30}
					className="text-[#ADF802]  text-3xl p-1 px-2 rounded-full bg-black"
				/>
			</DialogTrigger>

			<DialogContent className="w-[400px] bg-black text-[#ADF802] p-5 rounded-lg">
				<DialogHeader className="text-white text-xl font-semibold">
					{movieData.title}
				</DialogHeader>
				{isLoading ? (
					<Loader />
				) : (
					<div className="flex flex-col items-start justify-start gap-2">
						<Button
							onClick={handleAddToWatchlist}
							disabled={addPending}
							className="w-full flex items-center justify-between  shadow-sm shadow-gray-300/50"
						>
							<span className="text-gray-500">Add to WatchButtonst</span>
							<List size={20} className="text-[#ADF802]" />
						</Button>
						{!isMovieInWatchlist() ? (
							<Button
								onClick={handleAddToWatchlist}
								disabled={addPending}
								className="w-full flex items-center justify-between  shadow-sm shadow-gray-300/50"
							>
								<span className="text-gray-500">Add to favorites</span>
								<Heart size={20} className="text-[#ADF802]" />
							</Button>
						) : (
							<Button
								onClick={handleRemoveFromWatchlist}
								disabled={removedPending}
								className="w-full flex items-center justify-between  shadow-sm shadow-gray-300/50"
							>
								<span className="text-gray-500">Remove to Favorites</span>
								<HeartOff size={20} className="text-[#ADF802]" />
							</Button>
						)}
						<Button className="w-full flex items-center justify-between  shadow-sm shadow-gray-300/50">
							<span className="text-gray-500">Your rating</span>
							<Star size={20} className="text-[#ADF802]" />
						</Button>
						<Button className="w-full flex items-center justify-between shadow-sm shadow-gray-300/50">
							<span className="text-gray-500">Add to Custom list</span>
							<List size={20} className="text-[#ADF802]" />
						</Button>
					</div>
				)}
			</DialogContent>
		</Dialog>
	);
}
