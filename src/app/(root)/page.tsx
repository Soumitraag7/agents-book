import Hero from '@/app/(root)/_components/hero';
import Pricing from '@/components/pricing';
import SiteStatus from '@/app/(root)/_components/site-status';
import TrustedBy from '@/app/(root)/_components/trusted-by';

export default function Home() {
	return (
		<>
			<Hero />
			<TrustedBy />
			<SiteStatus />
			<Pricing />
		</>
	);
}
