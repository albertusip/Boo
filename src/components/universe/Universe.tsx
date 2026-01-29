import type {UniverseProps } from "./types";

export default function Universe({ universes, variant = "vertical" }: UniverseProps) {
  if (variant === "horizontal") {
    return (
      <section className="rounded-[20px] px-4 py-3">
        <div className="flex items-center gap-2 text-sm font-semibold text-white/80">
          <span>Universe</span>
          <span className="text-xs text-white/40">▾</span>
        </div>
        <div className="no-scrollbar mt-3 flex gap-3 overflow-x-auto p-2">
          {universes.map((item) => (
            <span
              key={item.tag}
              className="whitespace-nowrap shadow-main rounded-full px-4 py-2 text-xs text-white/80"
            >
              #{item.tag}
            </span>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="boo-card shadow-main rounded-[28px] px-6 py-6">
      <h2 className="text-xl font-semibold">Universe</h2>
      <div className="no-scrollbar mt-5 max-h-[calc(100vh-13rem)] space-y-2 overflow-y-auto pr-2" style={{maskImage: "linear-gradient(transparent 0%, black 20px, black calc(100% - 20px), transparent 100%)"}}>
        {universes.map((item) => (
          <div
            key={item.tag}
            className="flex items-center justify-between rounded-full px-4 py-2 text-xs text-white/70"
          >
            <span className="font-semibold text-white/90">#{item.tag}</span>
            <span>{item.souls}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
