// NAVIGATION
export const NAV_LINKS = [
	// { href: '/', key: 'home', label: 'Home' },
	// { href: '/', key: 'how_agentsbook_work', label: 'How Hilink Work?' },
	// { href: '/', key: 'services', label: 'Services' },
	// { href: '/pricing', key: 'pricing ', label: 'Pricing ' },
	{ href: '/sign-in', key: 'sign_in ', label: 'Sign in ' },
	{ href: '/sign-up', key: 'sign_up ', label: 'Sign up ' }
	// { href: '/contactus', key: 'contact_us', label: 'Contact Us' }
];

// CAMP SECTION
export const PEOPLE_URL = [
	'/person-1.png',
	'/person-2.png',
	'/person-3.png',
	'/person-4.png'
];

// FEATURES SECTION
export const FEATURES = [
	{
		title: 'Real maps can be offline',
		icon: '/map.svg',
		variant: 'green',
		description:
			'We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location'
	},
	{
		title: 'Set an adventure schedule',
		icon: '/calendar.svg',
		variant: 'green',
		description:
			"Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there's no more discussion"
	},
	{
		title: 'Technology using augment reality',
		icon: '/tech.svg',
		variant: 'green',
		description:
			'Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection'
	},
	{
		title: 'Many new locations every month',
		icon: '/location.svg',
		variant: 'orange',
		description:
			'Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing'
	}
];

// FOOTER SECTION
export const FOOTER_LINKS = [
	{
		title: 'Learn More',
		links: [
			'About AgentsBook',
			'Press Releases',
			'Environment',
			'Jobs',
			'Privacy Policy',
			'Contact Us'
		]
	},
	{
		title: 'Our Community',
		links: ['Climbing xixixi', 'Hiking hilink', 'Hilink kinthill']
	}
];

export const FOOTER_CONTACT_INFO = {
	title: 'Contact Us',
	links: [
		{ label: 'Admin Officer', value: '123-456-7890' },
		{ label: 'Email Officer', value: 'test@test.com' }
	]
};

export const SOCIALS = {
	title: 'Social',
	links: [
		'/facebook.svg',
		'/instagram.svg',
		'/twitter.svg',
		'/youtube.svg',
		'/wordpress.svg'
	]
};

// DEMO_CARD_INFO
export const DEMO_CARD_INFO = [
	{
		titleImage: 'IMG-TITLE',
		title: 'TEST-TITLE',
		smallDescription:
			'SMALL-DESCRIPTION LOREM IPSUM, DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT. OBCAECATI, TOTAM! LOREM IPSUM DOLOR SIT, AMET CONSECTETUR ADIPISICING ELIT. EA, APERIAM?',
		price: '20',
		currentSlug: 'CURRENT-SLUG-1'
	},
	{
		titleImage: 'IMG-TITLE',
		title: 'TEST-TITLE',
		smallDescription:
			'SMALL-DESCRIPTION LOREM IPSUM, DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT. OBCAECATI, TOTAM! LOREM IPSUM DOLOR SIT, AMET CONSECTETUR ADIPISICING ELIT. EA, APERIAM?',
		price: '20',
		currentSlug: 'CURRENT-SLUG-2'
	},
	{
		titleImage: 'IMG-TITLE',
		title: 'TEST-TITLE',
		smallDescription:
			'SMALL-DESCRIPTION LOREM IPSUM, DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT. OBCAECATI, TOTAM! LOREM IPSUM DOLOR SIT, AMET CONSECTETUR ADIPISICING ELIT. EA, APERIAM?',
		price: '20',
		currentSlug: 'CURRENT-SLUG-3'
	},
	{
		titleImage: 'IMG-TITLE',
		title: 'TEST-TITLE',
		smallDescription:
			'SMALL-DESCRIPTION LOREM IPSUM, DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT. OBCAECATI, TOTAM! LOREM IPSUM DOLOR SIT, AMET CONSECTETUR ADIPISICING ELIT. EA, APERIAM?',
		price: '20',
		currentSlug: 'CURRENT-SLUG-4'
	},
	{
		titleImage: 'IMG-TITLE',
		title: 'TEST-TITLE',
		smallDescription:
			'SMALL-DESCRIPTION LOREM IPSUM, DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT. OBCAECATI, TOTAM! LOREM IPSUM DOLOR SIT, AMET CONSECTETUR ADIPISICING ELIT. EA, APERIAM?',
		price: '20',
		currentSlug: 'CURRENT-SLUG-5'
	}
];

// USER ROLE
export const UserRolesEnum = {
	ADMIN: 'ADMIN',
	USER: 'USER',
	SUBSCRIBER: 'SUBSCRIBER'
};

export const AvailableUserRoles = Object.values(UserRolesEnum);
