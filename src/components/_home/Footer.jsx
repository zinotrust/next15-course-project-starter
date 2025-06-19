"use client";
import { usePathname } from "next/navigation";

export function Footer() {
    const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  if (pathname.includes("/dashboard") || pathname.includes("/admin")) {
    return null;
  }

  return (
    <footer className="bg-gray-700 border-t border-gray-500 py-4">
      <div className="container mx-auto px-4 text-center text-white">
        <p>
          &copy; {currentYear} <a href="https://course.zinotrust@gmail.com">ZinoTrust</a>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}