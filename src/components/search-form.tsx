'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { CalendarIcon, Plane } from 'lucide-react';
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from '@/components/ui/popover';
import { format } from 'date-fns';

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Calendar } from '@/components/ui/calendar';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select';

export const formSchema = z.object({
	location: z.string().min(2, 'Location is required').max(50),
	seatType: z.enum(['economy', 'preminum-economy', 'business', 'first']),
	date: z.date()
	// tripType: z.enum(['one-way', 'round-trip']),
	// dates: z.object({
	// 	from: z.date(),
	// 	to: z.date()
	// }),
});
// .refine(
// 	data => {
// 		if (data.tripType === 'one-way') {
// 			return !!data.tripType;
// 		}
// 		return false;
// 	},
// 	{
// 		message: 'Trip type is required',
// 		path: ['tripType']
// 	}
// );

export default function SearchForm() {
	// const router = useRouter();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			location: '',
			// tripType: 'one-way',
			// dates: {
			// 	from: undefined,
			// 	to: undefined
			// },
			date: undefined,
			seatType: 'economy'
		}
	});

	// const tripType = form.watch('tripType');

	// console.log(form.getValues());

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log('onSubmit :: ', values);
		form.reset();

		// const checkin_monthday = values.dates.from.getDate().toString();
		// const checkin_month = (values.dates.from.getMonth() + 1).toString();
		// const checkin_year = values.dates.from.getFullYear().toString();
		// const checkout_monthday = values.dates.to.getDate().toString();
		// const checkout_month = (values.dates.to.getMonth() + 1).toString();
		// const checkout_year = values.dates.to.getFullYear().toString();

		// const checkin = `${checkin_year}-${checkin_month}-${checkin_monthday}`;
		// const checkout = `${checkout_year}-${checkout_month}-${checkout_monthday}`;

		// const url = new URL('https://www.booking.com/searchresults.html');
		// url.searchParams.set('ss', values.location);
		// url.searchParams.set('checkin', checkin);
		// url.searchParams.set('checkout', checkout);

		// router.push(`/search?url=${url.href}`);
	}

	return (
		<>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="flex flex-col lg:flex-row lg:max-w-6xl lg:mx-auto items-center justify-center space-x-0 lg:space-x-2 space-y-4 lg:space-y-0 rounded-lg"
				>
					{/* TRIP TYPE */}
					{/* <div className="grid w-full  lg:max-w-28 items-center gap-1.5">
						<FormField
							control={form.control}
							name="tripType"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="text-white flex">Trip Type</FormLabel>

									<Select onValueChange={field.onChange}>
										<FormControl>
											<SelectTrigger className="w-full">
												<SelectValue placeholder="One-way" />
											</SelectTrigger>
										</FormControl>

										<SelectContent>
											<SelectGroup>
												<SelectItem value="one-way">One-way</SelectItem>
												<SelectItem value="round-trip">Round-trip</SelectItem>
											</SelectGroup>
										</SelectContent>
									</Select>

									<FormMessage />
								</FormItem>
							)}
						/>
					</div> */}

					{/* LOCATION */}
					<div className="grid w-full lg:max-w-sm items-center gap-1.5">
						<FormField
							control={form.control}
							name="location"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="text-white flex">
										Location
										<Plane className="ml-2 h-4 w-4 text-white" />
									</FormLabel>

									<FormControl>
										<Input placeholder="Dhaka, BD" {...field} />
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					{/* CALENDAR */}
					{/* {tripType === 'round-trip' ? (
						<div className="grid w-full lg:max-w-sm flex-1 items-center gap-1.5">
							<FormField
								control={form.control}
								name="dates"
								render={({ field }) => (
									<FormItem className="flex flex-col">
										<FormLabel className="text-white">Dates</FormLabel>

										<Popover>
											<PopoverTrigger asChild>
												<FormControl>
													<Button
														id="dates"
														name="dates"
														variant={'outline'}
														className={cn(
															'w-full lg:w-[300px] justify-start text-left font-normal',
															!field.value?.from && 'text-muted-foreground'
														)}
													>
														<CalendarIcon className="mr-3 h-4 w-4 opacity-50" />
														{field.value?.from ? (
															field.value?.to ? (
																<>
																	{format(field.value?.from, 'LLL dd, y')} -{' '}
																	{format(field.value?.to, 'LLL dd, y')}
																</>
															) : (
																format(field.value?.from, 'LLL dd, y')
															)
														) : (
															<span>Select your dates</span>
														)}
													</Button>
												</FormControl>
											</PopoverTrigger>
											<PopoverContent className="w-auto p-0" align="start">
												<Calendar
													initialFocus
													mode="range"
													selected={field.value}
													defaultMonth={field.value?.from}
													onSelect={field.onChange}
													numberOfMonths={2}
													disabled={date =>
														date < new Date(new Date().setHours(0, 0, 0, 0))
													}
												/>
											</PopoverContent>
										</Popover>

										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
					) : (
						<div className="grid w-full lg:max-w-sm flex-1 items-center gap-1.5">
							<FormField
								control={form.control}
								name="date"
								render={({ field }) => (
									<FormItem className="flex flex-col">
										<FormLabel className="text-white">Date</FormLabel>

										<Popover>
											<PopoverTrigger asChild>
												<FormControl>
													<Button
														id="date"
														name="date"
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

										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
					)} */}

					<div className="grid w-full lg:max-w-sm flex-1 items-center gap-1.5">
						<FormField
							control={form.control}
							name="date"
							render={({ field }) => (
								<FormItem className="flex flex-col">
									<FormLabel className="text-white">Date</FormLabel>

									<Popover>
										<PopoverTrigger asChild>
											<FormControl>
												<Button
													id="date"
													name="date"
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

									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					{/* SEAT TYPE */}
					<div className="flex w-full items-center space-x-2">
						<div className="grid items-center flex-1">
							<FormField
								control={form.control}
								name="seatType"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-white flex">Seat Type</FormLabel>

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

						{/* SUBMIT BUTTON */}
						<div className="mt-auto">
							<Button type="submit" className="bg-blue-500 text-base">
								Search
							</Button>
						</div>
					</div>
				</form>
			</Form>
		</>
	);
}
