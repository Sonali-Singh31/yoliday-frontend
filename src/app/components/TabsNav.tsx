// components/TabsNav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { name: "Project", href: "/portfolio/projects" },
  { name: "Saved", href: "/portfolio/saved" },
  { name: "Shared", href: "/portfolio/shared" },
  { name: "Achievement", href: "/portfolio/achievement" },
];

export default function TabsNav() {
  const pathname = usePathname();

  return (
    <div className="flex overflow-x-auto border-b border-gray-200 text-sm sm:text-base">
      {tabs.map((tab) => {
        const isActive = pathname.startsWith(tab.href);
        return (
          <Link
            key={tab.name}
            href={tab.href}
            className={`px-4 py-2 whitespace-nowrap border-b-2 ${
              isActive
                ? "border-orange-500 text-orange-500 font-medium"
                : "border-transparent text-gray-500 hover:text-orange-500"
            }`}
          >
            {tab.name}
          </Link>
        );
      })}
    </div>
  );
}
