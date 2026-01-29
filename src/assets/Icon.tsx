export type IconName =
  | "menu"
  | "search"
  | "bell"
  | "home"
  | "heart"
  | "chat"
  | "user"
  | "grid"
  | "book"
  | "sparkle"
  | "chevron";

type IconProps = {
  name: IconName;
  className?: string;
};

export default function Icon({ name, className }: IconProps) {
  const iconClass = className ?? "h-5 w-5 text-white/70";

  switch (name) {
    case "menu":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={iconClass}>
          <path
            d="M4 6h16M4 12h16M4 18h16"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "search":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={iconClass}>
          <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M16 16l4 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "bell":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={iconClass}>
          <path
            d="M6 9a6 6 0 0 1 12 0v3.5l1.5 2.5H4.5L6 12.5V9z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 18a2.5 2.5 0 0 0 5 0"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "home":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={iconClass}>
          <path
            d="M4 11.5 12 5l8 6.5V19a1 1 0 0 1-1 1h-4.5v-5h-5v5H5a1 1 0 0 1-1-1v-7.5z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "heart":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={iconClass}>
          <path
            d="M12 20s-6.5-4.2-8.5-7.3C1.7 9.9 3 6.5 6.5 6.5c2 0 3.4 1.1 4 2.4.6-1.3 2-2.4 4-2.4 3.5 0 4.8 3.4 3 6.2C18.5 15.8 12 20 12 20z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "chat":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={iconClass}>
          <path
            d="M5 17.5V6.5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9l-4 2z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "user":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={iconClass}>
          <path
            d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4zM5 20a7 7 0 0 1 14 0"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "grid":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={iconClass}>
          <path
            d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      );
    case "book":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={iconClass}>
          <path
            d="M5 4h10a3 3 0 0 1 3 3v12H8a3 3 0 0 0-3 3V4z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "sparkle":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={iconClass}>
          <path
            d="M12 3l2.6 5.3L20 9l-4 4.1L17 19l-5-2.6L7 19l1-5.9L4 9l5.4-.7L12 3z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "chevron":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={iconClass}>
          <path
            d="M8 10l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return null;
  }
}
