import Image from "next/image";
import Countdown from "./countdown";

export default function HeroSection() {
	return (
		<section className="relative flex min-h-screen flex-col items-center justify-start p-4">
			<div className="mb-10">
				<Image
					src={"/the_invitation.png"}
					width={400}
					height={200}
					alt="The Invitation Title Image"
				/>
			</div>
			<video
				autoPlay
				loop
				muted
				playsInline
				className="absolute inset-0 w-full h-full object-cover z-[-1]"
				src="/lampu_disko.mp4"
			/>
			<div className="relative flex items-center justify-center flex-col z-10 bg-black/50 p-6 rounded-lg text-center text-yellow-300">
				<h1 className="text-4xl font-bold  mb-4">{"You're Invited!"}</h1>
				<div className="mb-5">
					<div>
						{`I'm turning 17 and I'd love to celebrate this special day with you!`}
					</div>
					<div>
						{`Join me at Hard Rock Cafe Bali on May 12th, 2025, for a night full of
					fun, surprises, and unforgettable memories.`}
					</div>
				</div>
				<div className="mb-5">
					<div>{`If you're holding this invitation, it means you're someone truly special to me.`}</div>
					<div>{`Your presence would mean so much, so please come and celebrate with me!`}</div>
				</div>
				<div className="mb-5">
					<div>{`BE ON TIME`}</div>
					<div>{`every moment is planned with love and you won't want to miss a thing!`}</div>
				</div>
				<div className="mb-10">{`Can't wait to see you there!`}</div>
				<div className="mb-2">
					<div>{`With love,`}</div>
					<div>{`Carla Greycia`}</div>
					<div>{`#CarlagreyShow`}</div>
				</div>
			</div>
			<div className="flex flex-col lg:flex-row items-center justify-center mt-10">
				<div className="uppercase px-4">#CARLAGREYSHOW</div>
				<div className="px-4">
					<Countdown date="2025-05-12" time="17:00" />
				</div>
			</div>
		</section>
	);
}
