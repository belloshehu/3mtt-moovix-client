import { NavigationItemType } from "@/types/navigation.types";

export const navItems: NavigationItemType[] = [
	{ path: "#features", name: "Features" },
	{ path: "#pricing", name: "Pricing" },
];

export const adminNavItems: NavigationItemType[] = [
	{
		name: "Users",
		path: "/users",
		active: true,
	},
];

export const userNavItems: NavigationItemType[] = [
	{
		name: "Dashboard",
		path: "/dashboard",
		active: true,
	},

	{
		name: "Messages",
		path: "#",
		active: false,
	},
	{
		name: "Notifications",
		path: "#",
		active: true,
	},
];

export const studioNavItems: NavigationItemType[] = [
	{
		name: "Decoration",
		path: "/decoration",
	},
	{
		name: "Saved",
		path: "/saved",
	},
	{
		name: "members",
		path: "/members",
	},
];
