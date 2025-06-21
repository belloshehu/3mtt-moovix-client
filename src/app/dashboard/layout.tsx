export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <div className="p-5 md:p-20">{children}</div>;
}
