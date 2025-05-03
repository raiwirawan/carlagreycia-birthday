import { cn } from "@/lib/util";

export type ButtonProps = {
	text: string;
} & React.ComponentPropsWithoutRef<"a">;

export default function Button({ text, href, className }: ButtonProps) {
	return (
		<a
			href={href}
			className={cn(
				"py-3 px-6 bg-[#ff4a99] hover:bg-[#b565a7] rounded",
				className
			)}
		>
			{text}
		</a>
	);
}
