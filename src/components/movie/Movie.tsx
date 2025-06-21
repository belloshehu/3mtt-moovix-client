import { formatDate } from "@/lib/timedate";
import { cn } from "@/lib/utils";
import { MovieType } from "@/types/movie.types";
import { Vote } from "lucide-react";
import Image from "next/image";
import MovieDialog from "./MovieDialog";

interface MovieProps extends MovieType {
	// Define any props that Movie component might need
	className?: string;
}
export default function Movie({
	className,
	title,
	poster_path,
	release_date,
	vote_count,
}: MovieProps) {
	return (
		<div
			className={cn(
				"w-[200px] flex flex-col items-start justify-start gap-1 relative",
				className
			)}
		>
			<Image
				src={
					poster_path
						? "http://image.tmdb.org/t/p/w500" + poster_path
						: "/movie-placeholder.jpg"
				}
				alt={title}
				width={200}
				height={200}
				className="w-full rounded-lg h-full shadow-md object-cover"
			/>
			<MovieDialog title={title} />
			{/* Movie details will be displayed here */}
			<div className="w-full flex flex-col items-start justify-start gap-1 text-left">
				<h2 className=" ">{title}</h2>
			</div>
			<div className="w-full flex  items-center justify-between gap-1">
				<small className="text-gray-400 text-sm">
					{formatDate(release_date)}
				</small>
				<div className="absolute top-2 left-2 flex items-center gap-1 text-black bg-[#ADF802] bg-opacity-10 px-2 py-1 rounded-md">
					<Vote size={20} /> <small> {vote_count}</small>
				</div>
			</div>
		</div>
	);
}
