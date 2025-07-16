import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import AuthButton from "@/modules/auth/ui/components/auth-button";
import StudioUploadModal from "../studio-upload-modal";

export const StudioNavbar = () => {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 flex h-16 items-center border-b bg-white px-2 pr-5 shadow-md">
      <div className="flex w-full items-center gap-4">
        {/* Logo and Title */}
        <div className="flex shrink-0 items-center">
          <SidebarTrigger />
          <Link href="/studio" className="flex items-center gap-1 p-4">
            <Image src="logo.svg" alt="Logo" width={32} height={32} />
            <p className="text-left text-xl font-semibold tracking-tight">
              Studio`
            </p>
          </Link>
        </div>

        <div className="flex-1" />

        <div className="flex shrink-0 items-center gap-4">
          <StudioUploadModal />
          <AuthButton />
        </div>
      </div>
    </nav>
  );
};
