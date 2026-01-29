import Icon from "@/assets/Icon";

export default function Header() {
  return (
    <header className="fixed h-16 top-0 left-0 w-full py-5 flex items-center pe-5 ps-[1.375rem] z-30 gap-x-3 bg-primary">
      <button
        className="flex h-10 w-10 items-center justify-center hover:scale-105 active:scale-99 duration-500"
        aria-label="Menu"
      >
        <Icon name="menu" className="size-[1.75rem] text-white" />
      </button>
      <div className="font-semibold tracking-wide text-white text-2xl hover:scale-105 active:scale-99 duration-500">
        BOO
      </div>
      <div className="flex shadow-main flex items-center w-full gap-2 rounded-3xl px-3.5 py-2 text-sm text-white/60">
        <Icon name="search" className="h-4 w-4 text-white/50" />
        <input
          className="w-full bg-transparent text-white outline-none placeholder:text-white/40"
          placeholder="Search"
        />
      </div>
      <div className="ml-auto flex items-center">
          <button className="flex h-10 items-center whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            Sign in
          </button>
      </div>
    </header>
  );
}
