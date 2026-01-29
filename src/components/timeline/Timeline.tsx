import Icon from "@/assets/Icon";
import { Universe } from "@/components";

import type { TimelineProps, PostItemProps } from "./types";

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-300/70 via-cyan-400/70 to-blue-500/70 text-sm font-semibold text-black">
      {initials}
    </div>
  );
}

function PostItem({
  author,
  badge,
  astro,
  stats,
  content,
  likes,
  comments,
  time,
}: PostItemProps) {
  return (
    <div className="boo-card shadow-main rounded-[28px] px-6 py-6">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <Avatar name={author} />
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold">
              {author}
              <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-white/60">
                {badge}
              </span>
              <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-white/60">
                {astro}
              </span>
              <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-white/60">
                {stats}
              </span>
            </div>
            <span className="text-xs text-white/40">1 Award</span>
          </div>
        </div>
        <span className="text-xs text-white/40">{time}</span>
      </div>
      <p className="mt-4 text-sm text-white/70">
        {content} <span className="text-pink-300">💕</span>
      </p>
      <div className="mt-4 flex items-center gap-4 text-xs text-white/60">
        <div className="flex items-center gap-2">
          <Icon name="heart" className="h-4 w-4 text-white/60" />
          {likes}
        </div>
        <div className="flex items-center gap-2">
          <Icon name="chat" className="h-4 w-4 text-white/60" />
          {comments}
        </div>
        <span className="ml-auto text-xs text-white/40">Reply</span>
      </div>
    </div>
  );
}

function QuestionCard({
  title,
  date,
  likes,
  comments,
  variant = "default",
}: {
  title: string;
  date: string;
  likes: number;
  comments: number;
  variant?: "highlight" | "default";
}) {
  return (
    <div className="boo-card shadow-main rounded-[28px] px-6 py-6">
      <div className="flex items-center justify-between text-sm text-white/50">
        <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1">
          Question of the Day
        </span>
        <span>{date}</span>
      </div>
      <h3
        className={`mt-4 text-xl font-medium leading-snug ${
          variant === "highlight" ? "text-2xl" : ""
        }`}
      >
        {title}
      </h3>
      <div className="mt-4 flex items-center gap-4 text-xs text-white/60">
        <div className="flex items-center gap-2">
          <Icon name="heart" className="h-4 w-4 text-white/60" />
          {likes}
        </div>
        <div className="flex items-center gap-2">
          <Icon name="chat" className="h-4 w-4 text-white/60" />
          {comments}
        </div>
      </div>
      {variant === "highlight" ? (
        <div className="mt-4 flex items-center justify-between rounded-full border border-white/10 px-4 py-2 text-sm text-white/40">
          <span>Comment</span>
          <span className="px-2 py-0.5 text-xs text-white-100">
            +1
          </span>
        </div>
      ) : null}
    </div>
  );
}

export default function Timeline({
  highlightQuestion,
  posts,
  universes,
}: TimelineProps) {
  return (
    <div className="space-y-6">
      <div className="md:hidden">
        <Universe variant="horizontal" universes={universes} />
      </div>

      <div className="flex items-center justify-center">
        <span className="rounded-full border border-white/10 bg-white/10 px-4 py-1 text-xs font-semibold text-white/80">
          #questions
        </span>
      </div>

      <QuestionCard {...highlightQuestion} variant="highlight" />

      <section className="boo-card shadow-main rounded-[28px] px-6 py-6">
        <h2 className="text-2xl font-medium">Questions Community</h2>
        <p className="text-md mb-2">
          The questions community, chat, and discussion.
        </p>

        <button className="rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em]">
          Join now
        </button>
      </section>

      <div className="flex items-center justify-between text-xs text-white/50">
        <div className="flex items-center gap-4">
          <span className="rounded-full shadow-main px-3 py-1 text-white/80">
            Best
          </span>
          <div className="flex items-center gap-1">
            <div>Today</div>
            <Icon name="chevron" className="h-4 w-4 text-white/60" /></div>
        </div>
        
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}
