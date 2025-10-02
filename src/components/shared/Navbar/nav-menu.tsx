import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import Link from "next/link";

export const NavMenu = (props: NavigationMenuProps) => (
    <NavigationMenu {...props}>
        <NavigationMenuList className="gap-6 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start font-medium">
            <NavigationMenuItem>
                <NavigationMenuLink asChild>
                    {/* <Link href="/" className="text-white hover:text-primary">Home</Link> */}
                    <Link href="/" className="">Home</Link>
                </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuLink asChild>
                    {/* <Link href="/blogs" className="text-white hover:text-primary">Blogs</Link> */}
                    <Link href="/blogs" className="">Blogs</Link>
                </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuLink asChild>
                    {/* <Link href="/about" className="text-white hover:text-primary">About</Link> */}
                    <Link href="/about" className="">About</Link>
                </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuLink asChild>
                    {/* <Link href="/dashboard" className="text-white hover:text-primary">dashboard</Link> */}
                    <Link href="/dashboard" className="">dashboard</Link>
                </NavigationMenuLink>
            </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu>
);
