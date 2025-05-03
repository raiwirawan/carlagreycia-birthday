import Button from "./button";
import Countdown from "./countdown";
import PlayMusicButton from "./play-music-button";

export default function WelcomeSection() {
	return (
		<div className="w-full h-screen flex items-center justify-center relative">
			<div className="container mx-auto w-full h-full px-5 py-10 flex items-center justify-center">
				<div className="flex flex-col w-full h-full relative">
					<div className="flex items-center justify-center flex-1">
						<Button
							text={"OPEN INVITATION"}
							href="/rundown"
							className="uppercase rounded-full"
						/>
					</div>
					<div className="flex flex-col lg:flex-row items-center justify-center flex-none">
						<div className="uppercase px-4">#CARLAGREYSHOW</div>
						<div className="px-4">
							<Countdown date="2025-05-12" time="17:00" />
						</div>
					</div>
				</div>
			</div>
			<PlayMusicButton src="/tiara_andini_kupu_kupu.mp3" />
		</div>
	);
}
