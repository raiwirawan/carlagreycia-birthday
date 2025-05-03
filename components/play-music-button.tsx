"use client";

import { useState, useEffect } from "react";
import { useAudio } from "@/lib/audio-context";

export default function PlayMusicButton() {
	const { isPlaying, togglePlay } = useAudio();
	const [isBouncing, setIsBouncing] = useState(false);

	// Bounce animation effect
	useEffect(() => {
		const bounceInterval = setInterval(() => {
			setIsBouncing(true);

			// Reset bouncing state after animation completes
			setTimeout(() => {
				setIsBouncing(false);
			}, 500); // Animation duration
		}, 2000); // Bounce every 2 seconds

		return () => clearInterval(bounceInterval);
	}, []);

	return (
		<div className="fixed bottom-6 right-6 z-50">
			<button
				onClick={togglePlay}
				className={`
          flex items-center justify-center
          w-12 h-12 rounded-full
          bg-indigo-600 text-white
          shadow-lg hover:bg-indigo-700
          transition-all duration-300
          ${isBouncing ? "animate-bounce" : ""}
        `}
				aria-label={isPlaying ? "Pause music" : "Play music"}
			>
				{isPlaying ? (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="animate-pulse"
					>
						<rect x="14" y="4" width="4" height="16" rx="1"></rect>
						<rect x="6" y="4" width="4" height="16" rx="1"></rect>
					</svg>
				) : (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<circle cx="8" cy="18" r="4"></circle>
						<path d="M12 18V2l7 4"></path>
					</svg>
				)}
			</button>

			{/* Optional: Display status text */}
			<div className="absolute -top-8 right-0 text-xs font-medium text-gray-700 bg-white px-2 py-1 rounded shadow-sm">
				{isPlaying ? "Now Playing" : "Play Music"}
			</div>
		</div>
	);
}
