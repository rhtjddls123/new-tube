import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import SearchInput from "./search-input";
import AuthButton from "@/modules/auth/ui/components/auth-button";

export const HomeNavbar = () => {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 flex h-16 items-center bg-white px-2 pr-5">
      <div className="flex w-full items-center gap-4">
        {/* Logo and Title */}
        <div className="flex shrink-0 items-center">
          <SidebarTrigger />
          <Link href="/" className="flex items-center gap-1 p-4">
            <Image src="logo.svg" alt="Logo" width={32} height={32} />
            <p className="text-left text-xl font-semibold tracking-tight">
              NewTube
            </p>
          </Link>
        </div>

        {/* Search bar */}
        <div className="mx-auto flex max-w-[720px] flex-1 justify-center">
          <SearchInput />
        </div>

        <div className="flex shrink-0 items-center gap-4">
          <AuthButton />
        </div>
      </div>
    </nav>
  );
};
