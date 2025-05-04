import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import PlayMusicButton from "@/components/play-music-button";
import { AudioProvider } from "@/lib/audio-context";

const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Carla Greycia's Exclusive Sweet 17 Party Experience | Carla Greycia",
	description: "A Sweet 17 Birth Day Website",
	icons: {
		icon: "/carla_icon_microsize.ico",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${poppins.className} antialiased`}>
				<AudioProvider>
					{children}
					<PlayMusicButton />
				</AudioProvider>
			</body>
		</html>
	);
}
