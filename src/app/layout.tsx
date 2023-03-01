import { type Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Time Tracker',
	description: 'Created using Next.js',
	icons: { icon: '/favicon.ico' },
};

interface Props {
	children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
