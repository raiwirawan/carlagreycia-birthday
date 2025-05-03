"use client";

import { Suspense } from "react";
import WelcomeSection from "@/components/welcome-section";

export default function Home() {
	return (
		<Suspense
			fallback={
				<div
					style={{
						textAlign: "center",
						padding: "50px",
						fontFamily: "'Poppins', cursive",
						color: "#333",
					}}
				>
					<h1 style={{ fontSize: "3rem" }}>Loading...</h1>
				</div>
			}
		>
			<main>
				<WelcomeSection />
			</main>
		</Suspense>
	);
}
