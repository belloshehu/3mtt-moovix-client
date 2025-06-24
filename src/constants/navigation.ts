import { NavigationItemType } from "@/types/navigation.types";

export const navItems: NavigationItemType[] = [
	{ path: "#features", name: "Features" },
	{ path: "#pricing", name: "Pricing" },
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

export const dashboardNavItems: NavigationItemType[] = [
	{
		name: "Watchlist",
		path: "/watchlist",
		active: true,
	},
	{
		name: "Custom List",
		path: "/custom-list",
		active: true,
	},
	{
		name: "Favorites",
		path: "/favorites",
		active: true,
	},
	{
		name: "Followers",
		path: "/followers",
		active: true,
	},
];

export const userNavItems: NavigationItemType[] = [
	...dashboardNavItems,
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

export const adminNavItems: NavigationItemType[] = [
	...dashboardNavItems,
	{
		name: "Users",
		path: "/users",
		active: true,
	},
];
