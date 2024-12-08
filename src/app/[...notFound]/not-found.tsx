"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <div className="bg-[#D6E4FD] min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-[1440px] mx-auto p-5">
        {/* Breadcrumb Section */}
        <div className="pl-5 pt-[75px] sm:pl-[135px] w-full max-w-4xl mb-10 flex items-center">
          <Link href="/" className="text-[#1A37A7] hover:text-[#0A196F] text-sm">
            Home
          </Link>
          <span className="mx-2 text-[#658DF1]">/</span>
          <span className="text-[#3563E9] text-sm font-medium">404 Error</span>
        </div>

        {/* 404 Text */}
        <h1 className="text-[110px] font-medium text-[#102587] text-center">
          404 Not Found
        </h1>

        {/* Subtext */}
        <p className="text-[16px] text-[#0A196F] mt-2 text-center">
          Your visited page not found. You may go to the home page.
        </p>

        {/* Back Button */}
        <div className="flex pt-10 flex-col items-center mx-auto h-[179px] w-[829px] px-5">
          <button
            onClick={() => router.push("/")}
            className="mt-6 w-[254px] h-[56px] px-6 py-3 bg-[#3563E9] text-white text-[16px] font-semibold rounded-[4px] hover:bg-[#264BC8] transition-all duration-300"
          >
            Back to home page
          </button>
        </div>
      </div>
    </div>
  );
}
