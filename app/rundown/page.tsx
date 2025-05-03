import HeroSection from "@/components/hero-section";
import LineupSecion from "@/components/lineup-section";
import LocationSection from "@/components/location-section";
import RsvpSection from "@/components/rsvp-section";
import RundownSection from "@/components/rundown-section";
import ThanksSection from "@/components/thanks-section";
import VenueSection from "@/components/venue-section";

export default function Rundown() {
	return (
		<main>
			<HeroSection />
			<RundownSection />
			<LineupSecion />
			<VenueSection />
			<LocationSection />
			<RsvpSection />
			<ThanksSection />
		</main>
	);
}
