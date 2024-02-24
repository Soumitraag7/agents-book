import { ModeToggle } from '@/components/mode-toggle';
import Link from 'next/link';

export default function Navbar() {
	return (
		<nav className="w-full  relative flex items-center justify-between max-w-4xl mx-auto py-5">
			<Link href="/" className="">
				<h1 className="text-2xl">
					agents<span className="text-[#d90706] font-bold">Book</span>
				</h1>
			</Link>
			<div className="flex items-center justify-center gap-3">
				<h2 className="cursor-pointer">SignIn</h2>
				<h2 className="cursor-pointer">SignUp</h2>
				<ModeToggle />
			</div>
		</nav>
	);
}
