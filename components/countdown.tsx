"use client";

import React, { useState, useEffect } from "react";

export type CountdownProps = {
	date: string; // Date string, e.g., "2025-05-12" or "12 May 2025"
	time: string; // Time string, e.g., "18:00"
	className?: string; // Tailwind classes for the container
	unitClassName?: string; // Tailwind classes for each time unit
	separator?: string; // Separator between units (default: ":")
	onComplete?: () => void; // Callback when countdown completes
} & React.ComponentPropsWithoutRef<"div">;

const Countdown: React.FC<CountdownProps> = ({
	date,
	time,
	className = "",
	// unitClassName = "",
	separator = ":",
	onComplete,
	...props
}) => {
	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
		isExpired: false,
		isInvalid: false,
	});

	useEffect(() => {
		const parseDateTime = () => {
			try {
				// Combine date and time into a valid ISO-like string (e.g., "2025-05-12T18:00:00")
				const dateTimeString = `${date}T${time}:00`;
				const target = new Date(dateTimeString).getTime();

				// Check if the date is valid
				if (isNaN(target)) {
					return { isInvalid: true };
				}

				return { target };
			} catch {
				return { isInvalid: true };
			}
		};

		const calculateTimeLeft = () => {
			const parsed = parseDateTime();
			if (parsed.isInvalid) {
				return {
					days: 0,
					hours: 0,
					minutes: 0,
					seconds: 0,
					isExpired: false,
					isInvalid: true,
				};
			}

			const now = new Date().getTime();
			const difference = parsed.target! - now;

			if (difference <= 0) {
				return {
					days: 0,
					hours: 0,
					minutes: 0,
					seconds: 0,
					isExpired: true,
					isInvalid: false,
				};
			}

			return {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / (1000 * 60)) % 60),
				seconds: Math.floor((difference / 1000) % 60),
				isExpired: false,
				isInvalid: false,
			};
		};

		// Run immediately to avoid 1-second delay
		setTimeLeft(calculateTimeLeft());

		const interval = setInterval(() => {
			const newTimeLeft = calculateTimeLeft();
			setTimeLeft(newTimeLeft);

			if (newTimeLeft.isExpired && onComplete) {
				onComplete();
			}
		}, 1000);

		return () => clearInterval(interval);
	}, [date, time, onComplete]);

	if (timeLeft.isInvalid) {
		return (
			<div className={`text-red-600 ${className}`} {...props}>
				Invalid date or time format
			</div>
		);
	}

	if (timeLeft.isExpired) {
		return (
			<div className={`text-red-600 ${className}`} {...props}>
				Countdown Expired!
			</div>
		);
	}

	const formatTime = (value: number) => value.toString().padStart(2, "0");

	return (
		<div className={`flex items-center gap-2 ${className}`} {...props}>
			<div className="px-1 flex flex-col items-center justify-center font-semibold text-2xl">
				{formatTime(timeLeft.days)}
				<div className="ml-1 uppercase font-normal text-xs">days</div>
			</div>
			<div>{separator}</div>
			<div className="px-1 flex flex-col items-center justify-center font-semibold text-2xl">
				{formatTime(timeLeft.hours)}
				<div className="ml-1 uppercase font-normal text-xs">hours</div>
			</div>
			<div>{separator}</div>
			<div className="px-1 flex flex-col items-center justify-center font-semibold text-2xl">
				{formatTime(timeLeft.minutes)}
				<div className="ml-1 uppercase font-normal text-xs">mins</div>
			</div>
			<div>{separator}</div>
			<div className="px-1 flex flex-col items-center justify-center font-semibold text-2xl">
				{formatTime(timeLeft.seconds)}
				<div className="ml-1 uppercase font-normal text-xs">secs</div>
			</div>
		</div>
	);
};

export default Countdown;
