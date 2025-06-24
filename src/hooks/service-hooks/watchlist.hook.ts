import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAxios } from "../use-axios";
import WatchlistServiceAPI from "@/services/watchlist.service";
import { toast } from "sonner";
import { AxiosError } from "axios";

// movie watchlist hooks are not implemented in the client side
export const useAddToWatchlist = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: WatchlistServiceAPI.addToWatchlist,
		onSuccess: () => {
			toast.success("Movie added to watchlist");
			queryClient.invalidateQueries({
				queryKey: ["watchlist"],
			});
		},
		onError: (error: AxiosError<{ message: string }>) => {
			console.error("Failed to add movie to watchlist:", error);
			toast.error(
				error.response?.data.message || "Failed to add movie to watchlist"
			);
		},
	});
};

export const useGetWatchlist = () => {
	const { protectedRequest } = useAxios();
	return useQuery({
		queryFn: () => WatchlistServiceAPI.getWatchlist({ protectedRequest }),
		queryKey: ["watchlist"],
	});
};

export const useRemoveFromWatchlist = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: WatchlistServiceAPI.removeFromWatchlist,
		onSuccess: () => {
			toast.success("Movie removed from watchlist");
			queryClient.invalidateQueries({
				queryKey: ["watchlist"],
			});
		},
		onError: (error: AxiosError<{ message: string }>) => {
			console.error("Failed to add movie to watchlist:", error);
			toast.error(
				error.response?.data.message || "Failed to remove from watchlist"
			);
		},
	});
};

export const useClearWatchlist = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: WatchlistServiceAPI.clearWatchlist,
		onSuccess: () => {
			toast.success("Watchlist cleared");
			queryClient.invalidateQueries({
				queryKey: ["watchlist"],
			});
		},
		onError: () => {
			toast.error("Failed to clear watchlist");
		},
	});
};
