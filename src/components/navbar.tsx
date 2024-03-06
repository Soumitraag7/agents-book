import Link from 'next/link';

import { ModeToggle } from '@/components/mode-toggle';
import { Notification } from './notification';
import MobileMenu from './mobile-menu';

export default function Navbar() {
	return (
		<nav className="w-full relative flex items-center justify-between mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 py-5">
			<Link href="/" className="">
				<h1 className="text-2xl">
					agents<span className="text-[#d90706] font-bold">Book</span>
				</h1>
			</Link>

			<div className="flex items-center justify-center gap-3 ">
				<Link
					href="/sign-in"
					className="dark:hover:text-blue-200 hover:text-gray-500 whitespace-nowrap hidden md:block"
				>
					Sign in
				</Link>
				<Link
					href="/sign-up"
					className="dark:hover:text-blue-200 hover:text-gray-500 whitespace-nowrap hidden md:block"
				>
					Sign up
				</Link>

				<Notification />
				<ModeToggle />

				<MobileMenu />
			</div>
		</nav>
	);
}
