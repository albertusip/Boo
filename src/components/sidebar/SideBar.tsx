import Icon, { type IconName } from "@/assets/Icon";

import type { SideBarProps } from "./types";

const NAV_ICON: IconName[] = [
  "home",
  "heart",
  "chat",
  "user",
  "grid",
  "book",
  "sparkle",
];

export default function SideBar({ sidebarLinks }: SideBarProps) {
  return (
    <aside className="hidden lg:flex lg:h-[calc(100vh-88px)] lg:flex-col lg:gap-6 lg:pt-6">
      <div className="flex flex-col gap-4 rounded-[28px] px-2 py-5 xl:px-4">
        {NAV_ICON.map((icon, index) => (
          <button
            key={icon}
            className="group flex items-center justify-center gap-3 rounded-full px-3 py-2 text-sm text-white/70 hover:border-white/30 xl:justify-start"
            aria-label={sidebarLinks[index] ?? icon}
          >
            <Icon name={icon} className="h-5 w-5 shrink-0 text-white/70" />
            <span className="hidden whitespace-nowrap xl:inline">
              {sidebarLinks[index] ?? icon}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-auto flex flex-col gap-3 text-xs text-white/40 xl:pr-2">
        <button className="w-fit rounded-full px-3 py-2 text-xs text-white/70">
          English
        </button>
        <span className="hidden xl:block">We stand for love.</span>
        <span className="hidden text-[10px] uppercase tracking-[0.18em] text-white/30 xl:block">
          Boo Enterprises
        </span>
      </div>
    </aside>
  );
}
