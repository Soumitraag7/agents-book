import { FC, ReactNode } from 'react';

interface AuthLayoutProps {
	children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
	return (
		// <div className="dark:bg-[#19191a] dark:border-none border sm:w-[400px] mx-auto p-10 rounded-2xl">
		<div className="flex items-center justify-center mx-auto">{children}</div>
	);
};

export default AuthLayout;
