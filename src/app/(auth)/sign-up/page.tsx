import SignUpForm from '@/components/form/SignUpForm';

const page = () => {
	return (
		<div className="w-full">
			<h1 className="mb-6 text-xl font-semibold">Create your account</h1>
			<SignUpForm />
		</div>
	);
};

export default page;
