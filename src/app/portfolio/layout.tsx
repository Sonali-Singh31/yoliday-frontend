// app/portfolio/layout.tsx
import type { ReactNode } from "react";
import TabsNav from "../components/TabsNav";

export default function PortfolioLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full px-4 py-6">
      <h2 className="text-xl font-semibold mb-4">Portfolio</h2>
      <TabsNav />
      <div className="mt-4">{children}</div>
    </div>
  );
}
