import Image from "next/image";

export default function VenueSection() {
	return (
		<section className="relative flex min-h-screen flex-col items-center justify-start bg-[url('/city.jpg')] bg-center bg-cover">
			<div className="absolute inset-0 bg-black/50 z-[-1]" />
			<div className="relative z-10 bg-black/50 w-full h-full flex items-center justify-center flex-col flex-1">
				<div className="mt-10 mb-2">
					<Image
						src={"/venue_title.png"}
						width={400}
						height={200}
						alt="Venue Title Image"
					/>
				</div>
				<div className="relative flex items-center justify-center flex-col lg:flex-row z-10 text-center text-yellow-300">
					<div className="my-3">
						<Image
							src={"/venue/the_gate.jpg"}
							height={150}
							width={300}
							alt="Venue - Red Carpet Indoor"
							className="rounded-2xl"
						/>
					</div>
					<div className="my-3">
						<Image
							src={"/venue/red_carpet_indoor.jpg"}
							height={150}
							width={300}
							alt="Venue - Red Carpet Indoor"
							className="rounded-2xl"
						/>
					</div>
					<div className="my-3">
						<Image
							src={"/venue/hrcb-frontview.jpg"}
							height={150}
							width={300}
							alt="Venue - HRBC Frontview"
							className="rounded-2xl"
						/>
					</div>
					<div className="my-3">
						<Image
							src={"/venue/panggung.jpg"}
							height={150}
							width={300}
							alt="Venue - Panggung"
							className="rounded-2xl"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
