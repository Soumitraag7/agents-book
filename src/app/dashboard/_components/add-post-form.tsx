'use client';

import { useForm } from 'react-hook-form';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { CalendarIcon, PlaneLanding, PlaneTakeoff } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select';
import { useFormStatus } from 'react-dom';
import { addPost } from '@/lib/actions/post.action';
import { useUser } from '@clerk/nextjs';

const FormSchema = z.object({
	from: z.string().min(1, 'Please enter a location From').max(100),
	to: z.string().min(1, 'Please enter a location To').max(100),
	arivalTime: z.string().min(1, 'Please enter a Arival time'),
	departureTime: z.string().min(1, 'Please enter a Departure time'),
	arivalDate: z.date({
		required_error: 'Please select a arival date',
		invalid_type_error: "That's not a date!"
	}),
	departureDate: z.date({
		required_error: 'Please select a departure date',
		invalid_type_error: "That's not a date!"
	}),
	seatType: z.enum(['economy', 'preminum-economy', 'business', 'first']),
	totalTicket: z.coerce
		.number({
			required_error: 'Please enter total number of tickets'
			// invalid_type_error: 'Age must be a number'
		})
		.positive('Please enter total number of tickets'),
	airlineName: z.string().min(1, 'Please enter the airline name'),
	pricePerTicket: z.coerce
		.number({
			required_error: 'Please enter the price'
			// invalid_type_error: 'Age must be a number'
		})
		.positive('Please enter the price/ticket')

	// roundTrip: z.boolean().default(false).optional()
});

export default function AddPostForm() {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			from: '',
			to: '',
			arivalTime: '',
			departureTime: '',
			arivalDate: undefined,
			departureDate: undefined,
			totalTicket: 0,
			airlineName: '',
			pricePerTicket: 0,
			seatType: 'economy'
		}
	});

	// const roundTrip = form.watch('roundTrip');

	const { pending } = useFormStatus();

	const { user } = useUser();

	const onSubmit = (values: z.infer<typeof FormSchema>) => {
		addPost(values, user?.id);

		form.reset();
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
				{/* ONE WAY */}
				<div className="space-y-2 w-full">
					{/* LOCATION */}
					<div className=" flex md:flex-row flex-col gap-4">
						{/* FROM */}
						<div className="w-full">
							<FormField
								control={form.control}
								name="from"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-white flex">
											From
											<PlaneTakeoff className="ml-2 h-4 w-4 text-white" />
										</FormLabel>
										<FormControl>
											<Input {...field} />
										</FormControl>
										<FormMessage className="text-[#f04438]" />
									</FormItem>
								)}
							/>
						</div>

						{/* TO */}
						<div className="w-full">
							<FormField
								control={form.control}
								name="to"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-white flex">
											To <PlaneLanding className="ml-2 h-4 w-4 text-white" />
										</FormLabel>
										<FormControl>
											<Input {...field} />
										</FormControl>
										<FormMessage className="text-[#f04438]" />
									</FormItem>
								)}
							/>
						</div>
					</div>

					{/* SEATS */}
					<div className=" flex md:flex-row flex-col gap-4">
						{/* AIRLINE NAME */}
						<div className="w-full md:w-1/2 ">
							<div className="grid items-center flex-1">
								<FormField
									control={form.control}
									name="airlineName"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="text-white flex">
												Airline Name
											</FormLabel>

											<FormControl>
												<Input {...field} />
											</FormControl>

											<FormMessage className="text-[#f04438]" />
										</FormItem>
									)}
								/>
							</div>
						</div>

						{/* SEAT TYPE */}
						<div className="w-full md:w-1/2 ">
							<div className="grid items-center flex-1">
								<FormField
									control={form.control}
									name="seatType"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="text-white flex">
												Seat Type
											</FormLabel>

											<Select onValueChange={field.onChange}>
												<FormControl>
													<SelectTrigger className="w-full">
														<SelectValue placeholder="Economy" />
													</SelectTrigger>
												</FormControl>

												<SelectContent>
													<SelectGroup>
														<SelectItem value="economy">Economy</SelectItem>
														<SelectItem value="preminum-economy">
															Preminum Economy
														</SelectItem>
														<SelectItem value="business">Business</SelectItem>
														<SelectItem value="first">First</SelectItem>
													</SelectGroup>
												</SelectContent>
											</Select>

											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
						</div>
					</div>

					{/* DATE */}
					<div className="flex md:flex-row flex-col gap-4">
						{/* DEPARTURE DATE */}
						<div className="w-full">
							<FormField
								control={form.control}
								name="departureDate"
								render={({ field }) => (
									<FormItem className="flex flex-col">
										<FormLabel className="text-white">
											Departure Date (In BST)
										</FormLabel>

										<Popover>
											<PopoverTrigger asChild>
												<FormControl>
													<Button
														id="departureDate"
														name="departureDate"
														variant={'outline'}
														className={cn(
															'w-full lg:w-[300px] justify-start text-left font-normal',
															!field.value && 'text-muted-foreground'
														)}
													>
														<CalendarIcon className="mr-3 h-4 w-4 opacity-50" />
														{field.value ? (
															<>{format(field.value, 'LLL dd, y')}</>
														) : (
															<span>Select your date</span>
														)}
													</Button>
												</FormControl>
											</PopoverTrigger>
											<PopoverContent className="w-auto p-0" align="start">
												<Calendar
													// onDayClick={}
													initialFocus
													mode="single"
													selected={field.value}
													defaultMonth={field.value}
													onSelect={field.onChange}
													numberOfMonths={1}
													disabled={date =>
														date < new Date(new Date().setHours(0, 0, 0, 0))
													}
												/>
											</PopoverContent>
										</Popover>

										<FormMessage className="text-[#f04438]" />
									</FormItem>
								)}
							/>
						</div>

						{/* ARIVAL DATE */}
						<div className="w-full">
							<FormField
								control={form.control}
								name="arivalDate"
								render={({ field }) => (
									<FormItem className="flex flex-col">
										<FormLabel className="text-white">
											Arival Date (In BST)
										</FormLabel>

										<Popover>
											<PopoverTrigger asChild>
												<FormControl>
													<Button
														id="arivalDate"
														name="arivalDate"
														variant={'outline'}
														className={cn(
															'w-full lg:w-[300px] justify-start text-left font-normal',
															!field.value && 'text-muted-foreground'
														)}
													>
														<CalendarIcon className="mr-3 h-4 w-4 opacity-50" />
														{field.value ? (
															<>{format(field.value, 'LLL dd, y')}</>
														) : (
															<span>Select your date</span>
														)}
													</Button>
												</FormControl>
											</PopoverTrigger>
											<PopoverContent className="w-auto p-0" align="start">
												<Calendar
													// onDayClick={}
													initialFocus
													mode="single"
													selected={field.value}
													defaultMonth={field.value}
													onSelect={field.onChange}
													numberOfMonths={1}
													disabled={date =>
														date < new Date(new Date().setHours(0, 0, 0, 0))
													}
												/>
											</PopoverContent>
										</Popover>

										<FormMessage className="text-[#f04438]" />
									</FormItem>
								)}
							/>
						</div>
					</div>

					{/* TIME */}
					<div className=" flex md:flex-row flex-col gap-4">
						{/* DEPARTURE TIME */}
						<div className="w-full">
							<FormField
								control={form.control}
								name="departureTime"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-white flex">
											Departure Time (In BST)
										</FormLabel>

										<FormControl>
											<Input type="time" {...field} />
										</FormControl>

										<FormMessage className="text-[#f04438]" />
									</FormItem>
								)}
							/>
						</div>

						{/* ARIVAL TIME */}
						<div className="w-full">
							<FormField
								control={form.control}
								name="arivalTime"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-white flex">
											Arival Time (In BST)
										</FormLabel>

										<FormControl>
											<Input type="time" {...field} />
										</FormControl>

										<FormMessage className="text-[#f04438]" />
									</FormItem>
								)}
							/>
						</div>
					</div>

					{/* PRICE */}
					<div className=" flex md:flex-row flex-col gap-4">
						{/* TOTAL TICKETS */}
						<div className="w-full md:w-1/2 ">
							<div className="grid items-center flex-1">
								<FormField
									control={form.control}
									name="totalTicket"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="text-white flex">
												Total Tickets
											</FormLabel>

											<FormControl>
												<Input type="number" {...field} />
											</FormControl>

											<FormMessage className="text-[#f04438]" />
										</FormItem>
									)}
								/>
							</div>
						</div>

						{/* PRICE PER TICKET */}
						<div className="w-full md:w-1/2 ">
							<div className="grid items-center flex-1">
								<FormField
									control={form.control}
									name="pricePerTicket"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="text-white flex">
												Price/Ticket
											</FormLabel>

											<FormControl>
												<Input type="number" {...field} />
											</FormControl>

											<FormMessage className="text-[#f04438]" />
										</FormItem>
									)}
								/>
							</div>
						</div>
					</div>
				</div>

				{/* <Separator className="mt-8" /> */}

				{/* ROUND TRIP */}
				{/* <div className="mt-8 space-y-2 w-full">
					<FormField
						control={form.control}
						name="roundTrip"
						render={({ field }) => (
							<FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
								<div className="space-y-0.5">
									<FormLabel>Round Trip</FormLabel>
								</div>
								<FormControl>
									<Switch
										checked={field.value}
										onCheckedChange={field.onChange}
									/>
								</FormControl>
							</FormItem>
						)}
					/>

					{roundTrip && <h1>hello</h1>}
				</div> */}

				<div className="w-full flex item-center justify-center">
					<Button
						className="w-full lg:w-1/4 mt-6"
						type="submit"
						aria-disabled={pending}
					>
						{pending ? 'Adding post' : 'Add post'}
					</Button>
				</div>
			</form>
		</Form>
	);
}
