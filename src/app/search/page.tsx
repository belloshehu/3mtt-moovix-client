"use client";
import MovieGroup from "@/components/movie/MoviesGroup";
import Searchbar from "@/components/Searchbar";
import { useSearchMovies } from "@/hooks/service-hooks/movie.hook";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SearchPage() {
	const searchTerm = useSearchParams();
	const [sortBy, setSortBy] = useState<
		"popularity" | "rating" | "release_date"
	>("release_date");

	const { data, isLoading } = useSearchMovies({
		query: searchTerm.toString().slice(0, -1),
		page: 1,
	});

	const handleChange = (event: any) => {
		event.preventDefault();
		const { value } = event.target;
		// Handle the change event for sorting or filtering
		setSortBy(value as "popularity" | "rating" | "release_date");
	};
	return (
		<div className="relative flex flex-col items-start justify-start gap-10 w-full pt-10 md:pt-20 text-center">
			<header className="p-2 rounded-md  w-full flex flex-col gap-2 items-center justify-center">
				<Searchbar />
			</header>

			<div className="w-full grid grid-cols-1 md:grid-cols-4 gap-5 p-5 md:px-10">
				<div className="w-full h-fit md:h-[50vh] bg-white rounded-md p-5 flex flex-col items-start justify-start gap-5 col-span-1 border-[1px]">
					<h2 className="text-lg font-semibold mb-2">Filters</h2>
					{/* Placeholder for filters, if any */}

					<form className="flex flex-col w-full items-start justify-start">
						<label>
							<input
								type="radio"
								name="sort_by"
								value={"release_date"}
								className="m-2"
								onChange={handleChange}
							/>
							Release Date
						</label>
						<label>
							<input
								type="radio"
								name="sort_by"
								value={"popularity"}
								className="m-2"
								onChange={handleChange}
							/>
							Popularity
						</label>
						<label>
							<input
								type="radio"
								name="sort_by"
								value={"vote_count"}
								className="m-2"
								onChange={handleChange}
							/>
							Rating
						</label>
					</form>
				</div>
				<MovieGroup
					data={data}
					isLoading={isLoading}
					groupTitle={searchTerm.toString().slice(0, -1)}
					className="col-span-3"
				/>
			</div>
		</div>
	);
}
