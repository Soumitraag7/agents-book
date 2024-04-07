import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FilePenLine, Trash2 } from 'lucide-react';
import Link from 'next/link';

export const DEMO_CARD_INFO = [
	{
		from: 'LAX',
		to: 'YYX',
		arivalTime: '20:30',
		departureTime: '12:30',
		arivalDate: '12-11-2022',
		departureDate: '02-12-2023',
		seatType: 'First'
	}
];

export default function Post() {
	return (
		<div className=" grid  gap-5">
			{DEMO_CARD_INFO.map((post, idx) => (
				<Card key={idx}>
					<CardContent className="mt-5 flex flex-col md:flex-row items-center justify-center gap-2">
						<div className="flex flex-col md:flex-row items-center justify-center">
							<h2>from: {post.from}</h2>
							<h2>to: {post.to}</h2>
							<h2>departureTime: {post.departureTime}</h2>
							<h2>arivalTime: {post.arivalTime}</h2>
							<h2>departureDate: {post.departureDate}</h2>
							<h2>arivalDate: {post.arivalDate}</h2>
							<h2>seatType: {post.seatType}</h2>
						</div>

						<div className="flex items-center justify-center gap-3 ">
							<Button asChild size="sm" className="w-full mt-7">
								<div className="gap-1.5">
									<FilePenLine className="h-4 w-4 text-black" />
									<span>Edit</span>
								</div>
							</Button>

							<Button
								asChild
								size="sm"
								variant="destructive"
								className="w-full mt-7"
							>
								<div className="gap-1.5">
									<Trash2 className="h-4 w-4 text-white" /> <span>Delete</span>
								</div>
							</Button>
						</div>
					</CardContent>
				</Card>
			))}
		</div>
	);
}
