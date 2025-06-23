import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export default function Genre({
	handleClick,
	name,
	id,
	selected,
}: {
	handleClick: (id: number) => void;
	name: string;
	id: number;
	selected?: boolean;
}) {
	return (
		<Button
			onClick={() => handleClick(id)}
			className={cn(
				"bg-[#ADF802] text-black px-4 py-2 rounded-full hover:bg-[#ADF802]/80 transition-colors",
				{
					"bg-black hover:bg-black/80 text-[#ADF802]": selected,
				}
			)}
		>
			{name}
		</Button>
	);
}
