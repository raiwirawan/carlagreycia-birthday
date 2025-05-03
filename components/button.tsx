"use client";

import { cn } from "@/lib/util";
import { useAudio } from "@/lib/audio-context";
import { useRouter } from "next/navigation";

export type ButtonProps = {
	text: string;
} & React.ComponentPropsWithoutRef<"a">;

export default function Button({
	text,
	href = "/rundown",
	className,
}: ButtonProps) {
	const { togglePlay, isPlaying } = useAudio();
	const router = useRouter();

	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault(); // Prevent default <a> navigation
		if (!isPlaying) {
			togglePlay(); // Start music if not playing
		}
		router.push(href); // Navigate to the landing page
	};

	return (
		<a
			href={href}
			onClick={handleClick}
			className={cn(
				"py-3 px-6 bg-[#ff4a99] hover:bg-[#b565a7] rounded inline-block",
				className
			)}
		>
			{text}
		</a>
	);
}
