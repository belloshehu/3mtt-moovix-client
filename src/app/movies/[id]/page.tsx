"use client";

import Loader from "@/components/Loader";
import Genre from "@/components/movie/Genre";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useGetSingleMovieById } from "@/hooks/service-hooks/movie.hook";
import { Banknote, Clock, Heart, List, ThumbsUp } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function MovieDetailPage() {
	const { id } = useParams();
	const { data, isLoading } = useGetSingleMovieById({
		id: parseInt(id as string),
	});
	if (isLoading) return <Loader className="h-[50vh] pt-20" />;
	if (!data)
		return (
			<div className="h-[50vh] flex items-center justify-center">
				<h2>Failed to get detail for movie with id {id}</h2>
			</div>
		);
	const {
		title,
		poster_path,
		release_date,
		genres,
		vote_count,
		runtime,
		overview,
		budget,
		production_companies,
		production_countries,
	} = data;
	return (
		<div className="relative flex flex-col md:flex-row items-start justify-start gap-10 w-full p-2 pt-10 md:p-20 text-center h-fit h-min-[50vh]  rounded-md ">
			<Image
				src={
					poster_path
						? "http://image.tmdb.org/t/p/w500" + poster_path
						: "/movie-placeholder.jpg"
				}
				height={400}
				width={300}
				alt={title}
				className="w-full md:w-fit h-[300px] md:h-[400px] object-cover rounded-md"
			/>
			<div className="flex flex-col items-start justify-start gap-5 w-full">
				<h2 className="font-semibold md:text-2xl">
					{title}({release_date.split("-")[0]})
				</h2>
				<section className="flex items-center gap-5">
					<div className="flex items-center gap-2 bg-black p-2 text-white rounded-md">
						<ThumbsUp /> <span>{vote_count}</span>
					</div>
					<div className="flex items-center gap-2 bg-black p-2 text-white rounded-md">
						<Clock /> <span>{runtime} minutes</span>
					</div>
					<div className="flex items-center gap-2 bg-black p-2 text-white rounded-md">
						<Banknote /> <span>${Math.ceil(budget / 1000000)}m</span>
					</div>
				</section>
				<section className="flex gap-2 items-center flex-wrap justify-start">
					<Button>
						<Heart />
					</Button>
					<Button>
						<List />
					</Button>
				</section>
				<div className="flex items-start justify-start flex-wrap gap-2 w-fit  bg-black p-2 rounded-md">
					{genres.map((item) => (
						<Badge className="p-4 py-0 bg-amber-200 text-black" key={item.id}>
							{item.name}
						</Badge>
					))}
				</div>

				<section className="text-left">
					<h2 className="font-semibold mb-2">Overview</h2>
					<p>{overview}</p>
				</section>
				{production_companies && production_companies.length > 0 && (
					<section className="text-left">
						<h2 className="font-semibold mb-2">Produced By</h2>
						<ol className="list-disc px-5">
							{production_companies.map((item) => (
								<li key={item.id}>{item.name}</li>
							))}
						</ol>
					</section>
				)}
			</div>
		</div>
	);
}
