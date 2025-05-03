import Countdown from "./countdown";
import Image from "next/image";
import CircleIcon from "./circle-icon";

export default function LineupSecion() {
	return (
		<section className="relative flex min-h-screen flex-col items-center justify-start p-4">
			<div className="mt-10">
				<Image
					src={"/the_line_up.png"}
					width={400}
					height={200}
					alt="Line Up Section Title"
				/>
			</div>
			<video
				autoPlay
				loop
				muted
				playsInline
				className="absolute inset-0 w-full h-full object-cover z-[-1]"
				src="/city_timelapse.mp4"
			/>
			<div className="relative flex items-center justify-center flex-col z-10 text-center text-white">
				<Image
					src={"/lineup_presents.png"}
					width={400}
					height={200}
					alt="Line Presents People"
				/>
				<div className="w-full bg-white text-black py-3 mb-5">
					<h3 className="font-bold text-3xl">CARLAGREYSHOW</h3>
					<h4 className="font-bold">PRESENT</h4>
					<div className="my-1 font-bold text-[0.4rem]">
						<div className="my-2 flex items-center justify-around flex-row">
							<div className="flex flex-row">
								<CircleIcon
									color="#000000"
									size={6}
									className="mt-[0.1rem] mr-[0.1rem]"
								/>
								SPECIAL SHOW BY CARLA GREYCIA
							</div>
							<div className="flex flex-row items-center justify-center">
								<CircleIcon
									color="#000000"
									size={6}
									className="mt-[0.1rem] mr-[0.1rem]"
								/>
								HOSTED BY LAKSMI UDAYANA
							</div>
							<div className="flex flex-row items-center justify-center">
								<CircleIcon
									color="#000000"
									size={6}
									className="mt-[0.1rem] mr-[0.1rem]"
								/>
								THE BOYZ BAND PERFORMANCE
							</div>
						</div>
						<div className="my-2 flex items-center justify-around flex-row">
							<div className="flex flex-row items-center justify-center">
								<CircleIcon
									color="#000000"
									size={6}
									className="mt-[0.1rem] mr-[0.1rem]"
								/>
								GUITAR BY JADID KARSONO
							</div>
							<div className="flex flex-row items-center justify-center">
								<CircleIcon
									color="#000000"
									size={6}
									className="mt-[0.1rem] mr-[0.1rem]"
								/>
								KEYBOARD BY SADRACH KIN
							</div>
							<div className="flex flex-row items-center justify-center">
								<CircleIcon
									color="#000000"
									size={6}
									className="mt-[0.1rem] mr-[0.1rem]"
								/>
								BASS BY ELMO COOL
							</div>
							<div className="flex flex-row items-center justify-center">
								<CircleIcon
									color="#000000"
									size={6}
									className="mt-[0.1rem] mr-[0.1rem]"
								/>
								DRUM BY CHIKO
							</div>
						</div>
						<div className="my-2 flex items-center justify-around flex-row">
							<div className="flex flex-row items-center justify-center">
								<CircleIcon
									color="#000000"
									size={6}
									className="mt-[0.1rem] mr-[0.1rem]"
								/>
								SPECIAL PERFORM BY CESSI KIMORA
							</div>
							<div className="flex flex-row items-center justify-center">
								<CircleIcon
									color="#000000"
									size={6}
									className="mt-[0.1rem] mr-[0.1rem]"
								/>
								SPECIAL PERFORM BY MECCA
							</div>
							<div className="flex flex-row items-center justify-center">
								<CircleIcon
									color="#000000"
									size={6}
									className="mt-[0.1rem] mr-[0.1rem]"
								/>
								FUN GAMES
							</div>
						</div>
						<div className="my-1 flex items-center justify-center flex-row">
							<CircleIcon
								color="#000000"
								size={6}
								className="mt-[0.1rem] mr-[0.1rem]"
							/>
							SPECIAL AFTER PARTY HOSTED BY RADIO TERGANGAN TINGGI
						</div>
					</div>
				</div>
				<h2
					className="text-2xl font-bold mb-4"
					style={{
						textShadow:
							"0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4)",
					}}
				>
					SHOW START ON TIME 6 PM
				</h2>
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
