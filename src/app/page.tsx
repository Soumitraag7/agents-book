import Hero from '@/components/Hero';
import ProductCard from '@/components/product-card';
import { SignedIn, SignedOut } from '@clerk/nextjs';

export default function Home() {
	return (
		<>
			<SignedOut>
				<Hero />
			</SignedOut>

			<SignedIn>
				<ProductCard />
			</SignedIn>
		</>
	);
}
