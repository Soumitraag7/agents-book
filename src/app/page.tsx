import { ModeToggle } from '@/components/mode-toggle';

export default function Home() {
	return (
		<div className="flex items-center justify-center">
			<div className="container p-3 min-w-full flex items-center justify-between">
				<h1>HELLO 🔥</h1>
				<ModeToggle />
			</div>
		</div>
	);
}
