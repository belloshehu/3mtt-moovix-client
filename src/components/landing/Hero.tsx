"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "motion/react";
import { alfa_Slab_One } from "@/app/fonts";
import Searchbar from "../Searchbar";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Hero() {
	return (
		<section className="flex flex-col items-center rounded-none justify-center h-fit  md:py-10 gap-10 w-full text-center bg-[url(/movie.jpg)] bg-center bg-cover bg-blend-overlay bg-slate-900/50">
			<div className="px-5 md:px-20 rounded-md flex flex-col items-center justify-center w-full h-fit gap-10">
				<div className=" flex flex-col gap-5 items-center text-center  justify-center w-full">
					{/* <motion.h1
						initial={{
							transform: "translateY(-100%)",
							scale: 0.7,
							opacity: 0.4,
						}}
						whileInView={{ transform: "translate(0)", scale: 1, opacity: 1 }}
						exit={{ transform: "translate(-100%)", scale: 0.6, opacity: 0.1 }}
						transition={{ duration: 0.6, type: "spring" }}
						className={cn(
							`${alfa_Slab_One.className} font-extrabold text-3xl md:text-7xl text-[#ADF802] leading-[1.3] text-center w-full capitalize`
						)}
					>
						Movie management with ease
					</motion.h1> */}
					<motion.p
						initial={{ transform: "translateY(-100%)" }}
						whileInView={{ transform: "translate(0)" }}
						exit={{ transform: "translate(-100%), rotate(180deg)" }}
						transition={{ duration: 0.4, type: "spring" }}
						className="text-white"
					>
						Manage your movies, watchlists, and more with our intuitive
						platform.
					</motion.p>
				</div>
				<Searchbar />
			</div>
		</section>
	);
}
