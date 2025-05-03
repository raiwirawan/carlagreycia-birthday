import Button from "./button";

export default function RsvpSection() {
	return (
		<section className="relative flex min-h-screen flex-col items-center justify-center p-4">
			<video
				autoPlay
				loop
				muted
				playsInline
				className="absolute inset-0 w-full h-full object-cover z-[-1]"
				src="/rspv_video.mp4"
			/>
			<div className="relative flex items-center justify-center flex-col z-10 text-start text-yellow-300 w-full h-full">
				<div className="uppercase text-4xl max-w-full mb-5">
					I REALLY HAPPY TO SEE YOU IN MY #CARLAGREYSHOW SWEET 17 PARTY
				</div>
				<div className="uppercase text-4xl max-w-full my-10">
					PLEASE MAKE RSVP TO BOOK YOUR SEAT
				</div>
				<div>
					<Button
						text={"RSVP HERE"}
						href="https://wa.me/6287871161346?text=Halo%20Sugi,%20I%27m%20ready%20to%20come"
						className="rounded-full"
					/>
				</div>
			</div>
		</section>
	);
}
