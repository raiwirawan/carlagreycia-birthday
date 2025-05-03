import Button from "./button";
import Countdown from "./countdown";

export default function WelcomeSection() {
	return (
		<div className="w-full h-screen flex items-center justify-center relative bg-[url('/very_newest.webp')] bg-cover bg-center">
			<div className="container mx-auto w-full h-full px-5 py-10 flex items-center justify-center">
				<div className="flex flex-col w-full h-full relative">
					<div className="flex items-center justify-center flex-1">
						<Button
							text={"OPEN INVITATION"}
							href="/rundown"
							className="uppercase rounded-full mt-50"
						/>
					</div>
					<div className="flex flex-col lg:flex-row items-center justify-center flex-none ">
						<div className="uppercase px-4">#CARLAGREYSHOW</div>
						<div className="px-4">
							<Countdown date="2025-05-12" time="17:00" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
