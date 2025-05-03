import Image from "next/image";
import Countdown from "./countdown";

export default function RundownSection() {
	return (
		<section className="relative flex min-h-screen flex-col items-center justify-start p-4 bg-[url('/city.jpg')] bg-center bg-cover">
			<div className="mt-10 mb-2">
				<Image
					src={"/rundown_carlagreyshow.png"}
					width={400}
					height={200}
					alt="Rundown Title Image"
				/>
			</div>
			<div className="relative flex items-center justify-center flex-col z-10 bg-black/50 p-6 rounded-lg text-center text-yellow-300">
				<h2 className="text-2xl text-white font-bold  mb-4">{"SHOW TIME"}</h2>
				<div className="mb-5">
					<div className="text-white">17.00</div>
					<div>OPEN GATE</div>
				</div>
				<div className="mb-5">
					<div className="text-white">17.00 - 18.00</div>
					<div>
						<div>THE SPECIAL GUEST WALKING ON RED CARPET</div>
						<div>TO ENTERING THE VENUE</div>
					</div>
				</div>
				<div className="mb-5">
					<div className="text-white">18.00</div>
					<div>
						<div>#CARLAGREYSHOW</div>
						<div>START ON TIME</div>
					</div>
				</div>
				<div className="mb-5">
					<div className="text-white">18.00 - 18.20</div>
					<div>
						<div>SPECIAL OPENING PERFORMANCE BY</div>
						<div>CARLA GREYCIA</div>
						<div>{`#DON'T MISS IT!`}</div>
					</div>
				</div>
				<div className="mb-5">
					<div className="text-white">18.20 - 18.25</div>
					<div>OPENING BY MC</div>
				</div>
				<div className="mb-5">
					<div className="text-white">18.25 - 18.30</div>
					<div>SHORT FILM PREMIERE</div>
					<div>{`"CARLA GREYCIA"`}</div>
				</div>
				<div className="mb-5">
					<div className="text-white">18.30 - 18.45</div>
					<div>CUTTING CAKE AND BIRTHDAY CELEBRATION</div>
					<div>SPEECHES FROM FAMILY & FRIENDS</div>
				</div>
				<div className="mb-5">
					<div className="text-white">18.45 - 19.30</div>
					<div>ENJOY DINNER TIME</div>
					<div>SPECIAL FOOD & BEVERAGE FROM</div>
					<div>HARD ROCK CAFE BALI</div>
					<div>SPECIAL PERFORM FROM OUR GUESTSTAR</div>
				</div>
				<div className="mb-5">
					<div className="text-white">19.30 - 20.15</div>
					<div>GAMES TIME</div>
					<div>FUN GAMES WITH SPECIAL GIFT</div>
				</div>
				<div className="mb-5">
					<div className="text-white">20.15 - 20.20</div>
					<div>VERY SPECIAL & SURPRISE SHOW</div>
				</div>
				<div className="mb-5">
					<div className="text-white">20.20 - 22.00</div>
					<div>AFTER PARTY HOSTED BY RADIO TEGANGAN TINGGI</div>
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
