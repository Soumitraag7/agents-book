import Hero from '@/components/Hero';
import Pricing from '@/components/Pricings';
import SiteStats from '@/components/SiteStats';
import TrustedBy from '@/components/TrustedBy';

export default function Home() {
	return (
		<>
			<Hero />
			<TrustedBy />
			<SiteStats />
			<Pricing />
		</>
	);
}
