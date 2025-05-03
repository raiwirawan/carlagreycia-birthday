import Image from "next/image";

export default function LocationSection() {
	return (
		<section className="relative flex min-h-screen flex-col items-center justify-start p-4 bg-[url('/city.webp')] bg-center bg-cover">
			<div className="mt-10 mb-2">
				<Image
					src={"/map_direction.webp"}
					width={400}
					height={200}
					alt="Rundown Title Image"
				/>
			</div>
			<div className="relative flex flex-col items-center justify-center rounded-lg mt-10">
				<div className="mt-2 mb-5">
					<h2
						className="text-4xl text-white font-bold mb-4"
						style={{
							textShadow:
								"0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4)",
						}}
					>
						HARD ROCK CAFE
					</h2>
				</div>
				<div className="w-full h-full rounded-2xl overflow-hidden">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63108.56626632061!2d115.12244256184026!3d-8.664385240320568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd246bae8383c21%3A0x1498119380bcc80f!2sHard%20Rock%20Cafe!5e0!3m2!1sid!2sid!4v1746262488340!5m2!1sid!2sid"
						className="w-90 h-100"
						allowFullScreen={true}
						loading="lazy"
					></iframe>
				</div>
			</div>
		</section>
	);
}
