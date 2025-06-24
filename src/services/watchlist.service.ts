import {
	AddToWatchlistPayloadType,
	WatchlistResponseType,
} from "@/types/watchlist.types";
import { AxiosInstance } from "axios";

class WatchlistServiceAPI {
	static addToWatchlist = async ({
		protectedRequest,
		payload,
	}: {
		protectedRequest: AxiosInstance;
		payload: AddToWatchlistPayloadType;
	}) => {
		const { data } = await protectedRequest.post<WatchlistResponseType>(
			"/watchlists/add",
			payload
		);
		return data.data;
	};

	static getWatchlist = async ({
		protectedRequest,
	}: {
		protectedRequest: AxiosInstance;
	}) => {
		const { data } = await protectedRequest.get<WatchlistResponseType>(
			"/watchlists"
		);
		return data.data;
	};

	static removeFromWatchlist = async ({
		protectedRequest,
		movieId,
	}: {
		protectedRequest: AxiosInstance;
		movieId: number;
	}) => {
		const { data } = await protectedRequest.delete<WatchlistResponseType>(
			`/watchlists/remove/${movieId}`
		);
		return data.data;
	};

	static clearWatchlist = async ({
		protectedRequest,
	}: {
		protectedRequest: AxiosInstance;
	}) => {
		const { data } = await protectedRequest.delete<WatchlistResponseType>(
			"/watchlists/clear"
		);
		return data.data;
	};
}

export default WatchlistServiceAPI;
