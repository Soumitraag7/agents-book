import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main>
			<Navbar />
			<main className="relative overflow-hidden">{children}</main>
			<Footer />
		</main>
	);
}
