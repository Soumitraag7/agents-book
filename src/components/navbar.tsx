import Link from 'next/link';

import { ModeToggle } from '@/components/mode-toggle';
import { BellIcon } from '@radix-ui/react-icons';
import { Notification } from './notification';

export default function Navbar() {
	return (
		<nav className="w-full relative flex items-center justify-between max-w-4xl mx-auto px-4 py-5">
			<Link href="/" className="">
				<h1 className="text-2xl">
					agents<span className="text-[#d90706] font-bold">Book</span>
				</h1>
			</Link>
			<div className="flex items-center justify-center gap-3">
				<Link
					href="/sign-in"
					className="dark:hover:text-blue-200 hover:text-gray-500"
				>
					Sign in
				</Link>
				<Link
					href="/sign-up"
					className="dark:hover:text-blue-200 hover:text-gray-500"
				>
					Sign up
				</Link>
				<Notification />
				<ModeToggle />
			</div>
		</nav>
	);
}
