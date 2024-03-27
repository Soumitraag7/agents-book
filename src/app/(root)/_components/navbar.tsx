import Link from 'next/link';

import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

import { NAV_LINKS } from '@/constants';

import { ModeToggle } from '@/components/mode-toggle';
import { Notification } from '@/components/notification';
import MobileMenu from '@/components/mobile-menu';

export default function Navbar() {
	return (
		<nav className="w-full relative flex items-center justify-between mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 py-5">
			<Link href="/" className="">
				<h1 className="text-2xl">
					agents<span className="text-[#d90706] font-bold">Book</span>
				</h1>
			</Link>

			<ul className="hidden h-full gap-6 pl-2 lg:flex">
				<SignedOut>
					{NAV_LINKS.map(link => (
						<Link
							href={link.href}
							key={link.key}
							className="regular-16 flexCenter cursor-pointer transition-all hover:font-bold"
						>
							{link.label}
						</Link>
					))}
				</SignedOut>

				<SignedIn>
					<Link
						href="/dashboard"
						className="regular-16 flexCenter cursor-pointer transition-all hover:font-bold"
					>
						Dashboard
					</Link>
					<UserButton afterSignOutUrl="/" />
				</SignedIn>
				{/* <Notification /> */}
				{/* <ModeToggle /> */}
			</ul>

			{/* <div className="hidden lg:flex gap-5 pl-2">
				<Link
					href="/sign-in"
					className="regular-16 text-gray-50 flexCenter cursor-pointer transition-all hover:font-bold whitespace-nowrap "
				>
					Sign in
				</Link>
				<Link
					href="/sign-up"
					className="regular-16 text-gray-50 flexCenter cursor-pointer transition-all hover:font-bold whitespace-nowrap "
				>
					Sign up
				</Link>

				<Notification />
				<ModeToggle />
			</div> */}

			<MobileMenu />
		</nav>
	);
}
