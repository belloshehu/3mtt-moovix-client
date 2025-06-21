import { Heart, List, MoreHorizontal, Star } from "lucide-react";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";

export default function MovieDialog({ title }: { title: string }) {
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
					{title}
				</DialogHeader>
				<div className="flex flex-col items-start justify-start gap-2">
					<Button className="w-full flex items-center justify-between  shadow-sm shadow-gray-300/50">
						<span className="text-gray-500">Add to WatchButtonst</span>
						<List size={20} className="text-[#ADF802]" />
					</Button>
					<Button className="w-full flex items-center justify-between  shadow-sm shadow-gray-300/50">
						<span className="text-gray-500">Add to Favorites</span>
						<Heart size={20} className="text-[#ADF802]" />
					</Button>
					<Button className="w-full flex items-center justify-between  shadow-sm shadow-gray-300/50">
						<span className="text-gray-500">Your rating</span>
						<Star size={20} className="text-[#ADF802]" />
					</Button>
					<Button className="w-full flex items-center justify-between shadow-sm shadow-gray-300/50">
						<span className="text-gray-500">Add to Buttonst</span>
						<List size={20} className="text-[#ADF802]" />
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	);
}
