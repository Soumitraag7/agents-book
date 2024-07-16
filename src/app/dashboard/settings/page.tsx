import PageTitle from '@/app/dashboard/_components/page-title';
import AddProfileForm from '@/app/dashboard/_components/add-profile-form';
import { getUserProfile } from '@/lib/actions/user.actions';
import { currentUser } from '@clerk/nextjs/server';

export default async function SettingsPage() {
	// const { userId } = auth();
	const user = await currentUser();

	const userId: string = user?.publicMetadata.userId as string;

	const profile = await getUserProfile(userId);

	return (
		<main className="flex flex-col gap-5 w-full">
			<PageTitle title="Settings" />

			<AddProfileForm profile={profile} />
		</main>
	);
}
