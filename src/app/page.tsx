import Hero from '@/components/hero';
import Pricing from '@/components/pricing';
import SiteStats from '@/components/site-stats';
import TrustedBy from '@/components/trusted-by';

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
