"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
    const { data: session, status } = useSession();

    return (
        <nav className="fixed top-6 inset-x-4 h-16 max-w-7xl mx-auto rounded-full bg-white/20 backdrop-blur-xs border border-white/30 dark:bg-black/20 dark:border-slate-700/50 z-30">
            <div className="flex h-full items-center justify-between px-6 md:px-8">
                {/* Logo */}
                <Link href="/" className="flex-shrink-0">
                    <Logo />
                </Link>

                {/* Desktop Menu */}
                <NavMenu className="hidden md:block" />

                {/* Right Side */}
                <div className="flex items-center gap-4 md:gap-6">
                    {status === "authenticated" ? (
                        <Button
                            className="rounded-full px-5 py-2 text-sm md:text-base"
                            onClick={() => signOut({ callbackUrl: "/" })}
                        >
                            Logout
                        </Button>
                    ) : (
                        <Button className="rounded-full px-5 py-2 text-sm md:text-base">
                            <Link href="/login" className="block w-full text-center">
                                Login
                            </Link>
                        </Button>
                    )}

                    {/* Mobile Menu */}
                    <div className="md:hidden">
                        <NavigationSheet />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;




















// "use client";
// import { Button } from "@/components/ui/button";

// import Link from "next/link";
// import { Logo } from "./logo";
// import { NavMenu } from "./nav-menu";
// import { NavigationSheet } from "./navigation-sheet";

// const Navbar = () => {
//     return (
//         <nav className="fixed top-6 inset-x-4 h-16 max-w-screen-xl mx-auto rounded-full bg-white/20 backdrop-blur-xs border border-white/30 dark:bg-black/20 dark:border-slate-700/50 z-30">
//             <div className="flex h-full items-center justify-between px-6 md:px-8">
//                 <Link href="/" className="flex-shrink-0">
//                     <Logo />
//                 </Link>

//                 <NavMenu className="hidden md:block" />

//                 <div className="flex items-center gap-4 md:gap-6">
//                     <Button className="rounded-full px-5 py-2 text-sm md:text-base">
//                         <Link href="/login" className="block w-full text-center">
//                             Login
//                         </Link>
//                     </Button>


//                     <div className="md:hidden">
//                         <NavigationSheet />
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;

