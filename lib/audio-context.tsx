"use client";

import React, { createContext, useState, useRef, useCallback } from "react";

export type AudioContextType = {
	isPlaying: boolean;
	togglePlay: () => void;
};

export const AudioContext = createContext<AudioContextType | undefined>(
	undefined
);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [isPlaying, setIsPlaying] = useState(false);
	const audioRef = useRef<HTMLAudioElement | null>(null);

	const togglePlay = useCallback(() => {
		if (!audioRef.current) {
			audioRef.current = new Audio("/tiara_andini_kupu_kupu.mp3");
			audioRef.current.loop = true;
		}

		if (isPlaying) {
			audioRef.current.pause();
		} else {
			audioRef.current.play().catch((error) => {
				console.error("Playback failed:", error);
			});
		}
		setIsPlaying(!isPlaying);
	}, [isPlaying]);

	return (
		<AudioContext.Provider value={{ isPlaying, togglePlay }}>
			{children}
		</AudioContext.Provider>
	);
};

export const useAudio = () => {
	const context = React.useContext(AudioContext);
	if (!context) {
		throw new Error("useAudio must be used within an AudioProvider");
	}
	return context;
};
