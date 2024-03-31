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

const FormSchema = z.object({
	from: z.string().min(1, 'From is required').max(100),
	to: z.string().min(1, 'To is required').max(100),
	arivalTime: z.string().min(1, 'Arival time is required'),
	departureTime: z.string().min(1, 'Departure time is required'),
	arivalDate: z.date(),
	departureDate: z.date(),
	seatType: z.enum(['economy', 'preminum-economy', 'business', 'first']),
	roundTrip: z.boolean().default(false).optional()
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
			departureDate: undefined
		}
	});

	const roundTrip = form.watch('roundTrip');

	const onSubmit = (values: z.infer<typeof FormSchema>) => {
		console.log(values);
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
										<FormLabel className="flex">
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
										<FormLabel className="flex">
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

										<FormMessage />
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

										<FormMessage />
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
										<FormLabel className="flex">
											Departure Time (In BST)
										</FormLabel>
										<FormControl>
											<Input {...field} />
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
										<FormLabel className="flex">Arival Time (In BST)</FormLabel>
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
					<div className=" flex md:flex-row flex-col gap-4">
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
					<Button className="w-full lg:w-1/4 mt-6" type="submit">
						Create post
					</Button>
				</div>
			</form>
		</Form>
	);
}