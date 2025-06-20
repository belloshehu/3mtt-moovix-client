"use client";
import { useForm } from "react-hook-form";
// import { producCategoryAndFilterSchema } from "@/schemas/product.validation.schema";
import { Form } from "@/components/ui/form";
import SearchInput from "@/components/form-fields/SearchInput";

export default function Searchbar() {
	const form = useForm({
		// resolver: zodResolver(),
		defaultValues: {
			category: "all",
			sortBy: undefined,
		},
	});
	const { handleSubmit } = form;
	const onSubmit = (data: any) => {};

	return (
		<header className="w-full flex justify-center items-center h-fit">
			<Form {...form}>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex justify-center items-center gap-4 p-5 w-full"
				>
					<div className="flex flex-col-reverse md:flex-row items-center justify-center gap-5 capitalize w-full">
						<div className="flex flex-row items-center gap-4">
							{/* filter here */}
						</div>
						<SearchInput
							placeholder="Search product"
							className="w-full md:w-1/4"
						/>
					</div>
				</form>
			</Form>
		</header>
	);
}
