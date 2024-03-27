import Navbar from '@/app/(root)/_components/navbar';
import Footer from '@/app/(root)/_components/footer';

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
